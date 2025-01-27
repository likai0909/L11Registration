import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Register from './Register';
import Success from './Success';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
          <Stack.Screen name="Register" component={Register} options={{ title: 'Register' }} />
          <Stack.Screen name="Success" component={Success} options={{ title: 'Success' }} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
