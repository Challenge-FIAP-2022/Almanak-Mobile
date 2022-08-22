import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from '../screens/HomeScreen'
import UserScreen from "../screens/UserScreen";

const Stack = createNativeStackNavigator();

export function AppStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="UserScreen" component={UserScreen} />
    </Stack.Navigator>
  );
}
