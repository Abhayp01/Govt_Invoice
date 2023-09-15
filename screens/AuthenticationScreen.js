import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';
const AuthenticationScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
       <StatusBar backgroundColor="#312651" barStyle="light-content" />
       <View>
      <Text style={styles.title}>Govt-Billing And Invoice App</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SignUp')}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.loginButton]}
        onPress={() => navigation.navigate('LogIn')}
      >
        <Text style={[styles.buttonText, styles.loginButtonText]}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0', // Background color
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: '#312651',
  },
  loginButtonText: {
    color: 'white',
  },
});

export default AuthenticationScreen;
