import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { MainStackNavigator } from "./src/navigation/StackNavigators";

import LoadingScreen from "./src/screens/LoadingScreen";

import {
  useFonts,
  PressStart2P_400Regular,
} from "@expo-google-fonts/press-start-2p";

import { SquadaOne_400Regular } from "@expo-google-fonts/squada-one";

import AppLoading from "expo-app-loading";

const App = () => {
  let [fontsLoaded] = useFonts({
    PressStart2P_400Regular,
    SquadaOne_400Regular,
  });

  if (!fontsLoaded) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
};

export default App;
