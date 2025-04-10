import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WelcomeScreen } from '../Screens/WelcomeScreen';
import { SignInScreen } from '../Screens/SignInScreen';
import { SignUpScreen } from '../Screens/SignUpScreen';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen}/>
      <Stack.Screen name="SignIn"  component={SignInScreen}/>
      <Stack.Screen name="SignUp"  component={SignUpScreen}/>
    </Stack.Navigator>
  );
}