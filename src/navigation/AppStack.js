import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import ListScreen from "../screens/ListScreen";
import CreateScreen from "../screens/CreateScreen";
import SignaturesScreen from "../screens/SignaturesScreen";
import UserScreen from "../screens/UserScreen";

import ButtonNew from "../Components/ButtonNew";

import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export function AppStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false, //nome abaixo dos ícones
        tabBarActiveTintColor: "#FFFF00",
        tabBarInactiveTintColor: "#0E2433",
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#3792CB",
          borderTopWidth: 0,
          paddingBottom: 5,
          paddingTop: 5,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ size, color, focused }) => {
            if (focused) {
              return <Ionicons name="home" size={size} color={color} />;
            }

            return <Ionicons name="home-outline" size={size} color={color} />;
          },
        }}
      />

      <Tab.Screen
        name="Games"
        component={ListScreen}
        options={{
          tabBarIcon: ({ size, color, focused }) => {
            if (focused) {
              return <Ionicons name="search" size={size} color={color} />;
            }

            return <Ionicons name="search-outline" size={size} color={color} />;
          },
        }}
      />

      <Tab.Screen
        name="New"
        component={CreateScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ size, focused }) => (
            <ButtonNew size={size} focused={focused} />
          ),
        }}
      />

      <Tab.Screen
        name="Plans"
        component={SignaturesScreen}
        options={{
          tabBarIcon: ({ size, color, focused }) => {
            if (focused) {
              return <Ionicons name="cart" size={size} color={color} />;
            }

            return <Ionicons name="cart-outline" size={size} color={color} />;
          },
        }}
      />

      <Tab.Screen
        name="Profile"
        component={UserScreen}
        options={{
          tabBarIcon: ({ size, color, focused }) => {
            if (focused) {
              return <Ionicons name="person" size={size} color={color} />;
            }

            return <Ionicons name="person-outline" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
