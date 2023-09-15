import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthenticationScreen from './screens/AuthenticationScreen'; // Import your AuthenticationScreen component
import SignUpScreen from './screens/SignUpScreen';
import LogInScreen from './screens/LogInScreen';
import Home from './Home';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Authentication"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#312651', // Set the background color of the header area
        },
        headerTintColor: 'white', // Set the text color of the header title and buttons
      }}>
        <Stack.Screen
          name="Authentication"
          component={AuthenticationScreen}
          options={{ title: 'Government Billing and Invoice' }} // Set the screen title
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ title: 'Sign Up' }} // Set the screen title
        />
        <Stack.Screen
          name="LogIn"
          component={LogInScreen}
          options={{ title: 'Log In' }} // Set the screen title
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Invoice generator' }} // Set the screen title
        />
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
