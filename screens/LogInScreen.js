import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert,TouchableOpacity,StyleSheet } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import firebase from '../firebase'; // Import your Firebase configuration
import { useNavigation } from '@react-navigation/native';

const LogInScreen = ({ navigation }) => {
  const nav= useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogIn = async () => {
    const auth = getAuth(firebase);

    try {
      // Sign in the user with the provided email and password
      await signInWithEmailAndPassword(auth, email, password);

      // Navigate to the next screen (e.g., the home screen)
      nav.navigate('Home');
    } catch (error) {
      // Handle login error and display an alert
      Alert.alert('Login Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log in</Text>
      <TextInput
      style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleLogIn}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white', 
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LogInScreen;
