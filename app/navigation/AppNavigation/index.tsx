import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Books from '../../screens/Books';
import Details from '../../screens/Details';

const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Books' component={Books} />
        <Stack.Screen name='Details' component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default AppNavigation;
