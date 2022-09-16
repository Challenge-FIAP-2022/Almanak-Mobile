import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Pressable,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { api } from "../services/api";

export default function RegisterScreen() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [birth, setBirth] = useState("");
  const navigation = useNavigation();

  function userRegistration() {
    api
      .post("/usuario/signin", {
        name: userName,
        email: email,
        senha: password,
        dtNascimento: birth,
      })
      .then(function (response) {
        Alert.alert(
          "Usuário criado",
          "Agora você já pode fazer login na plataforma",
          [{ text: "Ok", onPress: () => navigation.navigate("Login") }]
        );
      })
      .catch(function (error) {
        console.error(error.response);
      });
  }
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ImageBackground
        source={require("../../assets/bg.png")}
        blurRadius={3}
        style={styles.imgBackground}
      >
        <View style={styles.containerTitle}>
          <Text style={styles.textTitle}>Almanak</Text>
          <Text style={styles.text}>Criar uma conta</Text>
        </View>
        <View style={styles.containerInput}>
          <TextInput
            value={userName}
            onChangeText={(userName) => setUserName(userName)}
            placeholder="Nome"
            style={styles.textInput}
            placeholderTextColor="#FFFFFF"
            keyboardType="default"
            autoCapitalize="words"
            autoCorrect={false}
          />

          <TextInput
            value={birth}
            onChangeText={(userBirth) => setBirth(userBirth)}
            placeholder="Data de nascimento"
            style={styles.textInput}
            placeholderTextColor="#FFFFFF"
            keyboardType="numeric"
          />
          <TextInput
            value={email}
            onChangeText={(userEmail) => setEmail(userEmail)}
            placeholder="Email"
            style={styles.textInput}
            placeholderTextColor="#FFFFFF"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TextInput
            value={password}
            onChangeText={(userPassword) => setPassword(userPassword)}
            style={styles.textInput}
            placeholder="Senha"
            placeholderTextColor="#FFFFFF"
            secureTextEntry
          />
          <TextInput
            value={confirmPassword}
            onChangeText={(userPassword) => setConfirmPassword(userPassword)}
            style={styles.textInput}
            placeholder="Confirmar senha"
            placeholderTextColor="#FFFFFF"
            secureTextEntry
          />
        </View>
        <View style={styles.containerButtons}>
          <Pressable style={styles.button} onPress={userRegistration}>
            <Text style={styles.textButton}>Cadastrar</Text>
          </Pressable>
          <Text style={styles.secondText}>
            Já tem uma conta?
            <Text
              style={styles.registerText}
              onPress={() => navigation.navigate("Login")}
            >
              {" "}
              Entrar
            </Text>
          </Text>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  containerTitle: {
    flex: 0.8,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  containerInput: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  containerButtons: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "flex-start",
  },

  imgBackground: {
    flex: 1,
    resizeMode: "cover",
  },
  textTitle: {
    fontFamily: "PressStart2P_400Regular",
    color: "#FFFF00",
    fontSize: 40,
    textShadowColor: "white",
    textShadowRadius: 1,
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    marginVertical: 30,
  },
  text: {
    fontFamily: "SquadaOne_400Regular",
    fontSize: 36,
    color: "#FFFFFF",
    alignSelf: "flex-start",
    marginLeft: 40,
  },
  textInput: {
    height: 40,
    width: "80%",
    margin: 10,
    textAlign: "left",
    borderWidth: 2,
    borderColor: "#296D98",
    paddingLeft: 20,
    borderRadius: 10,
    color: "white",
    fontSize: 15,
    backgroundColor: "rgba(14, 36, 51, 0.2)",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    backgroundColor: "#3792CB",
    marginTop: 20,
    width: "60%",
  },
  textButton: {
    fontFamily: "PressStart2P_400Regular",
    color: "#FFFF00",
    fontSize: 12,
    marginTop: 5,
  },
  secondText: {
    fontFamily: "SquadaOne_400Regular",
    color: "#FFFFFF",
    fontSize: 16,
    margin: 20,
  },
  registerText: {
    fontFamily: "SquadaOne_400Regular",
    color: "#FFFF00",
    fontSize: 16,
  },
});
