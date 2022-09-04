import React, { useContext, useEffect } from "react";
import { createContext, useState } from "react";
import { api } from "../services/api";
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
        api
          .get(`/usuario/enterapp/${_authData.id}`)
          .then(function (response) {
            // manipula o sucesso da requisição
            delete response.data.plano;
            setAuth(response.data);
            AsyncStorage.setItem("@AuthData", JSON.stringify(response.data));
          })
          .catch(function (error) {
            // manipula erros da requisição
            // console.error(error.response);
          });
      }
    } catch (error) {
    } finally {
      setisLoading(false);
    }
  }

  async function signIn(email, password) {
    api
      .get("/usuario/login", {
        params: {
          email: email,
          senha: password,
        },
      })
      .then(function (response) {
        // manipula o sucesso da requisição
        delete response.data.plano;
        setAuth(response.data);
        AsyncStorage.setItem("@AuthData", JSON.stringify(response.data));
      })
      .catch(function (error) {
        // manipula erros da requisição
        console.error(error.response);
      });
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
