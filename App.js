import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Screens/Home';
import Selfie from './src/Screens/Selfie';
import Maps from './src/Screens/Maps';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Selfie">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Selfie" component={Selfie} />
        <Stack.Screen name="Maps" component={Maps} />
 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
