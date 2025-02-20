import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

import { HelloWave } from '@/components/HelloWave';
import React, { useState } from 'react';
import {
  TouchableWithoutFeedback,
  TouchableOpacity, Text, TextInput, View, Keyboard,
  KeyboardAvoidingView, Image, StyleSheet, Platform,
  Button
} from 'react-native';
import { getAuth,createUserWithEmailAndPassword,onAuthStateChanged } from 'firebase/auth';
import { authInstance } from '@/config/firebaseConfig';

export default function SignUpScreen() {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');
    const handleSignIn =async () => {
    
      await createUserWithEmailAndPassword(authInstance, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('User account created & signed in!', user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage + 'w/ code :'+errorCode);
        console.log('Error:', errorCode, errorMessage);
      });
    };
   return (
     <KeyboardAvoidingView
       style={{ flex: 1 }}
       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
     >
       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
       <View style={styles.container}>
        <Text style={styles.title}>Sign Up Page</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="SignUp" onPress={handleSignIn} />
        {error &&<Text style={{color:'red'}}>{error}</Text>}
       </View>
       </TouchableWithoutFeedback>
     </KeyboardAvoidingView>
   );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff', // Set background color to white
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});