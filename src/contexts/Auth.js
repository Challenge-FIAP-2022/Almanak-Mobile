import React, { useContext } from "react";
import { createContext, useState } from "react";
import { Alert } from "react-native";
import { authService } from "../services/authService";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [authData, setAuth] = useState({});

  async function signIn(email, password) {
    try {
      const auth = await authService.signIn(email, password);

      setAuth(authData);

      return auth;
    } catch (error) {
      Alert.alert(error.message, "Tente novamente");
    }
  }

  async function signOut() {
    setAuth(undefined);

    return;
  }

  return (
    <AuthContext.Provider value={{ authData, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
