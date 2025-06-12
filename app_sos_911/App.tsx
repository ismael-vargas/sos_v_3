import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './src/navigation/Navigator';
import LoginScreen from './src/screens/Auth/Login/Login';
import RegisterScreen from './src/screens/Auth/Register/Register';
import HomeScreen from './src/screens/Home/Home';
import EmergencyContactsScreen from './src/screens/EmergencyContacts/EmergencyContacts';
import ContactDetailsScreen from './src/screens/EmergencyContacts/Details/ContactDetails';
import AddContactScreen from './src/screens/EmergencyContacts/Add/AddContact';
import GroupsScreen from './src/screens/Groups/Groups';
import GroupChatScreen from './src/screens/Groups/Chat/GroupChat';
import LocationScreen from './src/screens/Location/Location';
import ProfileScreen from './src/screens/Profile/Profile';
import InformationScreen from './src/screens/Information/Information';
import NotificationsScreen from './src/screens/Notifications/Notifications';
import AlertHistoryScreen from './src/screens/Details/AlertHistory';


const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: '#ffffff' },
          }}
        >{/* Importante: No dejar espacios entre los Stack.Screen */}
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="EmergencyContacts" component={EmergencyContactsScreen} />
          <Stack.Screen name="ContactDetails" component={ContactDetailsScreen} />
          <Stack.Screen name="AddContact" component={AddContactScreen} />
          <Stack.Screen name="Groups" component={GroupsScreen} />
          <Stack.Screen name="GroupChat" component={GroupChatScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Location" component={LocationScreen} />
          <Stack.Screen name="Notifications" component={NotificationsScreen} />
          <Stack.Screen name="Information" component={InformationScreen} />
          <Stack.Screen name="AlertHistory" component={AlertHistoryScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}