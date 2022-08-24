import React, { useContext, useEffect } from "react";
import { createContext, useState } from "react";
import { Alert } from "react-native";
import { authService } from "../services/authService";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [authData, setAuth] = useState();
  const [loading, setisLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      loadFromStorage();
    }, 2000);
  }, []);

  async function loadFromStorage() {
    try {
      //Try get the data from Async Storage
      const authDataSerialized = await AsyncStorage.getItem("@AuthData");
      if (authDataSerialized) {
        //If there are data, it's converted to an Object and the state is updated.
        const _authData = JSON.parse(authDataSerialized);
        setAuth(_authData);
      }
    } catch (error) {
    } finally {
      setisLoading(false);
    }
  }

  async function signIn(email, password) {
    try {
      const auth = await authService.signIn(email, password);

      setAuth(auth);
      AsyncStorage.setItem("@AuthData", JSON.stringify(auth));
    } catch (error) {
      Alert.alert(error.message, "Tente novamente");
    }
  }

  async function signOut() {
    setAuth(undefined);
    AsyncStorage.removeItem("@AuthData");
  }

  return (
    <AuthContext.Provider value={{ authData, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
