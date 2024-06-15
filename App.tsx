import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Q1 from './src/Question1';
import Q2 from './src/Question2';
import Q3 from './src/Question3';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Q1">
        <Stack.Screen name="Q1" component={Q1} />
        <Stack.Screen name="Q2" component={Q2} />
        <Stack.Screen name="Q3" component={Q3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
