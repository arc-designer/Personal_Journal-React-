import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';


import WelcomeScreen from './Screens/WelcomeScreen';
import SignInScreen  from './Screens/SignInScreen';
import SignUpScreen  from './Screens/SignUpScreen';


import HomeScreen         from './Screens/HomeScreen';
import JournalListScreen  from './Screens/JournalListScreen';
import NewEntryScreen     from './Screens/NewEntryScreen';
import ViewEntryScreen    from './Screens/ViewEntryScreen';
import ProfileScreen      from './Screens/ProfileScreen';
import SettingsScreen     from './Screens/SettingsScreen';

import { JournalProvider } from './context/JournalContext';
import { AuthProvider, AuthContext } from './context/AuthContext';

const Stack = createNativeStackNavigator();
const Tab   = createBottomTabNavigator();

export default function App() {
  return (
    <AuthProvider>
      <JournalProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </JournalProvider>
    </AuthProvider>
  );
}

function RootNavigator() {
  const { user } = useContext(AuthContext);

  // 1) Not signed in → Auth flow
  if (!user) {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="SignIn"  component={SignInScreen}  />
        <Stack.Screen name="SignUp"  component={SignUpScreen}  />
      </Stack.Navigator>
    );
  }

  // 2) Signed in → Tabs + detail stack
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle:      { backgroundColor: '#8AC850' },
        headerTintColor:  '#000000',
        headerTitleStyle: { fontWeight: 'bold', fontSize: 24 },
      }}
    >
      {/* The tab navigator is the “home” of your signed‑in flow */}
      <Stack.Screen
        name="MainTabs"
        component={AppTabs}
        options={{ headerShown: false }}
      />
      {/* Push this on top when you navigate to ViewEntry */}
      <Stack.Screen
        name="ViewEntry"
        component={ViewEntryScreen}
        options={{ title: 'View Entry' }}
      />
    </Stack.Navigator>
  );
}

function AppTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle:      { backgroundColor: '#8AC850' },
        headerTintColor:  '#000000',
        headerTitleStyle: { fontWeight: 'bold', fontSize: 24 },
        tabBarActiveTintColor:   '#8AC850',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Home':    iconName = 'home';    break;
            case 'Entries': iconName = 'list';    break;
            case 'New':     iconName = 'create';  break;
            case 'Profile': iconName = 'person';  break;
            case 'Settings':iconName = 'settings';break;
            default:        iconName = 'ellipse'; break;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home"    component={HomeScreen}        options={{ title: 'Home'       }} />
      <Tab.Screen name="Entries" component={JournalListScreen} options={{ title: 'Entries'    }} />
      <Tab.Screen name="New"     component={NewEntryScreen}    options={{ title: 'New Entry' }} />
      <Tab.Screen name="Profile" component={ProfileScreen}     options={{ title: 'Profile'    }} />
      <Tab.Screen name="Settings"component={SettingsScreen}    options={{ title: 'Settings'   }} />
    </Tab.Navigator>
  );
}