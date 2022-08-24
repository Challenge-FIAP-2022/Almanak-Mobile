import React from "react";
import { Router } from "./src/navigation/Router";
import { AuthProvider } from "./src/contexts/Auth";
import LoadingScreen from "./src/screens/LoadingScreen";

import {
  useFonts,
  PressStart2P_400Regular,
} from "@expo-google-fonts/press-start-2p";

import { SquadaOne_400Regular } from "@expo-google-fonts/squada-one";

const App = () => {
  let [fontsLoaded] = useFonts({
    PressStart2P_400Regular,
    SquadaOne_400Regular,
  });

  if (!fontsLoaded) {
    return <LoadingScreen />;
  }

  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
};

export default App;
