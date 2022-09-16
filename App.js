import React from "react";
import { Router } from "./src/navigation/Router";
import { AuthProvider } from "./src/contexts/Auth";
import LoadingScreen from "./src/screens/LoadingScreen";

import {
  useFonts,
  PressStart2P_400Regular,
} from "@expo-google-fonts/press-start-2p";

import { SquadaOne_400Regular} from "@expo-google-fonts/squada-one";
import { Rubik_400Regular } from "@expo-google-fonts/rubik";
import { StatusBar } from "react-native";

const App = () => {
  let [fontsLoaded] = useFonts({
    PressStart2P_400Regular,
    SquadaOne_400Regular,
    Rubik_400Regular,
  });

  if (!fontsLoaded) {
    return <LoadingScreen />
  }

  return (
    <AuthProvider>
      <StatusBar barStyle={"light-content"} translucent backgroundColor={"transparent"}/>
      <Router />
    </AuthProvider>
  );
};

export default App;
