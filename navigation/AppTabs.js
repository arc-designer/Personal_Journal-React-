
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen        from '../Screens/HomeScreen';
import JournalListScreen from '../Screens/JournalListScreen';
import NewEntryScreen    from '../Screens/NewEntryScreen';
import ProfileScreen     from '../Screens/ProfileScreen';
import SettingsScreen    from '../Screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function AppTabs() {
  return (
    <Tab.Navigator
    
      screenOptions={({ route }) => ({
        headerShown: false,

       
        tabBarStyle: {
          backgroundColor: '#000',  // black
          borderTopColor:  '#000',  // hide top border
          elevation: 0,             // Android shadow
          shadowOpacity: 0,         // iOS shadow
          height: 60,
        },

        
        tabBarActiveTintColor:   '#fff',
        tabBarInactiveTintColor: '#888',

        
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home')      iconName = 'home';
          else if (route.name === 'Entries') iconName = 'list';
          else if (route.name === 'NewEntry') iconName = 'add-circle';
          else if (route.name === 'Profile') iconName = 'person';
          else if (route.name === 'Settings') iconName = 'settings';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home"      component={HomeScreen}        options={{ title: 'Home'       }} />
      <Tab.Screen name="Entries"   component={JournalListScreen} options={{ title: 'Entries'    }} />
      <Tab.Screen name="NewEntry"  component={NewEntryScreen}    options={{ title: 'New Entry' }} />
      <Tab.Screen name="Profile"   component={ProfileScreen}     options={{ title: 'Profile'    }} />
      <Tab.Screen name="Settings"  component={SettingsScreen}    options={{ title: 'Settings'   }} />
    </Tab.Navigator>
  );
}