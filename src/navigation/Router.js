import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppStack } from "./AppStack";
import { AuthStack } from "./AuthStack";
import { useAuth } from "../contexts/Auth";
import LoadingScreen from "../screens/LoadingScreen";

export const Router = () => {
  const { authData, loading } = useAuth();

  if (loading) {
    return <LoadingScreen />;
  }
  return (
    <NavigationContainer>
      {authData ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
