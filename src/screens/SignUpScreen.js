import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Pressable,
  Alert,
} from "react-native";

export default function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  return (
    <ImageBackground
      source={require("../../assets/bg.png")}
      style={styles.imgBackground}
    >
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.textTilte}>Almanak</Text>
        </View>
        <View style={styles.section}>
          <StatusBar style="auto" />
          <Text style={styles.text}>Cadastrar</Text>
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
          <Pressable
            style={styles.button}
            onPress={() =>
              Alert.alert(
                "Cadastrado com sucesso!",
                "Email de verificação enviado para: " + email
              )
            }
          >
            <Text style={styles.textButton}>Cadastrar</Text>
          </Pressable>
        </View>
        <View style={styles.section}>
          <View style={styles.secondContainer}>
            <Text style={styles.secondText}>
              Já tem uma conta?
              <Text
                style={styles.signUpText}
                onPress={() => navigation.replace("Login")}
              >
                {" "}
                Entrar
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  section: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  secondContainer: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  imgBackground: {
    flex: 1,
    resizeMode: "cover",
  },
  textTilte: {
    fontFamily: "PressStart2P_400Regular",
    color: "#FFFF00",
    fontSize: 40,
    textShadowColor: "white",
    textShadowRadius: 1,
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    marginTop: 100,
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
    width: "50%",
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
  signUpText: {
    fontFamily: "SquadaOne_400Regular",
    color: "#FFFF00",
    fontSize: 16,
  },
});
