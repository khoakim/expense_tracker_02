import {StatusBar} from "expo-status-bar";
import React from "react";
import {StyleSheet, Text, View, Button} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";


// pages
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import AddScreen from './screens/AddScreen'
import UpdateScreen from './screens/UpdateScreen'
import AllTransactions from './screens/AllTransactions'


const Stack = createNativeStackNavigator();

export default function App() {
  const globalScreenOptions = {
    headerStyle: {
      backgroundColor: '#DDD5F1',
      // backgroundColor: '#51A3B1',
    },
    headerTitleStyle: {
      color: '#000000',
    },
    headerTintColor: 'black',
  }
  return (
    <NavigationContainer>
      <StatusBar style='dark' />
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Register' component={RegisterScreen} />
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Add' component={AddScreen} />
        <Stack.Screen name='Update' component={UpdateScreen} />
        <Stack.Screen name='All' component={AllTransactions} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

