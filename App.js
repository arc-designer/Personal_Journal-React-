import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

 
import HomeScreen from './Screens/HomeScreen';
import JournalListScreen from './Screens/JournalListScreen';
import NewEntryScreen from './Screens/NewEntryScreen';
import ViewEntryScreen from './Screens/ViewEntryScreen';
import ProfileScreen from './Screens/ProfileScreen';
import SettingsScreen from './Screens/SettingsScreen';

 
import { JournalProvider } from './context/JournalContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <JournalProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home"
           screenOptions={{
            headerStyle: { backgroundColor: '#8AC850' },  
            headerTintColor: '#000000',                   
            headerTitleStyle: { 
              fontWeight: 'bold', 
              fontSize: 24,                              
            },
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'My Journal'}} />
          <Stack.Screen name="JournalList" component={JournalListScreen} options={{ title: 'Entries' }} />
          <Stack.Screen name="NewEntry" component={NewEntryScreen} options={{ title: 'New Entry' }} />
          <Stack.Screen name="ViewEntry" component={ViewEntryScreen} options={{ title: 'View Entry' }} />
          <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }} />
          <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings / About' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </JournalProvider>
  );
}