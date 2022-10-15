import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstOne from './FirstPage/FirstOne';
import FirstTwo from './FirstPage/FirstTwo';
import FirstThree from './FirstPage/FirstThree';
import SecondOne from './SecondPage/SecondOne';
import SecondTwo from './SecondPage/SecondTwo';
import SecondThree from './SecondPage/SecondThree';
import ThirdOne from './ThirdPage/ThirdOne';
import ThirdTwo from './ThirdPage/ThirdTwo';
import ThirdThree from './ThirdPage/ThirdThree';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


function FirstPage() {
  return (
    
      <Stack.Navigator  screenOptions={{headerShown:false}}>
        <Stack.Screen name="FirstOne" component={FirstOne} />
        <Stack.Screen name="FirstTwo" component={FirstTwo} />
        <Stack.Screen name="FirstThree" component={FirstThree} />
      </Stack.Navigator>
    
  );
}
function SecondPage() {
  return (
    
      <Stack.Navigator  screenOptions={{headerShown:false}}>
        <Stack.Screen name="SecondOne" component={SecondOne} />
        <Stack.Screen name="SecondTwo" component={SecondTwo} />
        <Stack.Screen name="SecondThree" component={SecondThree} />
      </Stack.Navigator>
    
  );
}
function ThirdPage() {
  return (
    
      <Stack.Navigator  screenOptions={{headerShown:false}}>
        <Stack.Screen name="ThirdOne" component={ThirdOne} />
        <Stack.Screen name="ThirdTwo" component={ThirdTwo} />
        <Stack.Screen name="ThirdThree" component={ThirdThree} />
      </Stack.Navigator>
    
  );
}

export default function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator initialRouteName='First' screenOptions={{headerShown:false}}>
        <Tab.Screen name="First" component={FirstPage} />
        <Tab.Screen name="Second" component={SecondPage} />
        <Tab.Screen name="Third" component={ThirdPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}