import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { authInstance } from '@/config/firebaseConfig'; // Adjust the import path as needed
import { signInWithEmailAndPassword, signOut, onAuthStateChanged, User } from 'firebase/auth';
import * as SecureStore from 'expo-secure-store';
  interface AuthContextType {
    user: User | null| undefined;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
  }
  
  const AuthContext = createContext<AuthContextType | undefined>(undefined);
  
  export const AuthProvider= ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User|null|undefined>();
    useEffect(() => {

      const unsubscribe = onAuthStateChanged(authInstance, (user) => {
        setUser(user);
      });

      return unsubscribe;
    }, []);
  
    const login = async (email:string, password:string) => {
      try {
        const userCredential = await signInWithEmailAndPassword(authInstance, email, password);
        console.log('User signed in:', userCredential.user);

        setUser(userCredential.user);
        const idToken = await userCredential.user.getIdToken(); // Get the ID token
        await SecureStore.setItemAsync('auth_token', idToken);

      
      } catch (error) {
        console.error('Error signing in:', error);
          await signOut(authInstance);
          setUser(null);
          await SecureStore.deleteItemAsync('auth_token');
          // Handle the error (e.g., show an error message to the user)
      }
    };
  
    const logout = async () => {
      await signOut(authInstance);
      setUser(null);
      await SecureStore.deleteItemAsync('auth_token');
    };
  
    return (
      <AuthContext.Provider value={{user, login, logout }}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
      throw new Error("useUser must be used within a AuthContext.Provider");
    }
    return context;
  };
  