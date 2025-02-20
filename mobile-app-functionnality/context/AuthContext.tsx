import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { authInstance } from '@/config/firebaseConfig'; // Adjust the import path as needed
import { signInWithEmailAndPassword, signOut, onAuthStateChanged, User } from 'firebase/auth';

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
      await signInWithEmailAndPassword(authInstance, email, password);
    };
  
    const logout = async () => {
      await signOut(authInstance);
    };
  
    return (
      <AuthContext.Provider value={{user, login, logout }}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  export const useUser = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
      throw new Error("useUser must be used within a UserProvider");
    }
    return context;
  };
  