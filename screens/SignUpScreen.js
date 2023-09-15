import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert,StyleSheet } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import firebase from '../firebase'; // Import your Firebase configuration

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    const auth = getAuth(firebase);

    try {
      // Create a new user with the provided email and password
      await createUserWithEmailAndPassword(auth, email, password);

      // Navigate to the next screen (e.g., the home screen)
    } catch (error) {
      // Handle signup error and display an alert
      Alert.alert('Signup Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
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
        onPress={handleSignUp}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('LogIn')}
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
    width:'30%',
    textAlign:'center',
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    margin:2
  },
  buttonText: {
    color: 'white', 
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
