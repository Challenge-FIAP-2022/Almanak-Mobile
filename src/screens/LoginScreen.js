import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Pressable,
  SafeAreaView,
} from "react-native";
import { useAuth } from "../contexts/Auth";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { signIn } = useAuth();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/bg.png")}
        blurRadius={3}
        style={styles.imgBackground}
      >
        <View style={styles.container}>
          <View style={styles.test}>
            <Text style={styles.textTilte}>Almanak</Text>
          </View>
          <View style={styles.test}>
            <Text style={styles.text}>Login</Text>
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
            <Pressable
              style={styles.button}
              onPress={() => signIn(email, password)}
            >
              <Text style={styles.textButton}>Entrar</Text>
            </Pressable>
          </View>
          <View style={styles.test}>
            <View style={styles.secondContainer}>
              <Text style={styles.secondText}>Esqueceu a sua senha? </Text>
              <Text style={styles.secondText}>
                Ainda não tem uma conta?
                <Text
                  style={styles.registerText}
                  onPress={() => navigation.replace("Register")}
                >
                  {" "}
                  Cadastrar-se
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  test: {
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
    fontSize: RFValue(40),
    textShadowColor: "white",
    textShadowRadius: 1,
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    marginTop: RFValue(100),
  },
  text: {
    fontFamily: "SquadaOne_400Regular",
    fontSize: RFValue(36),
    color: "#FFFFFF",
    alignSelf: "flex-start",
    marginLeft: RFValue(40),
  },
  textInput: {
    height: RFValue(40),
    width: "80%",
    margin: RFValue(10),
    textAlign: "left",
    borderWidth: 2,
    borderColor: "#296D98",
    paddingLeft: RFValue(20),
    borderRadius: 10,
    color: "white",
    fontSize: RFValue(15),
    backgroundColor: "rgba(14, 36, 51, 0.2)",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: RFValue(12),
    paddingHorizontal: RFValue(32),
    borderRadius: 10,
    backgroundColor: "#3792CB",
    marginTop: RFValue(20),
    width: "60%",
  },
  textButton: {
    fontFamily: "PressStart2P_400Regular",
    color: "#FFFF00",
    fontSize: RFValue(12),
    marginTop: RFValue(5),
  },
  secondText: {
    fontFamily: "SquadaOne_400Regular",
    color: "#FFFFFF",
    fontSize: RFValue(16),
    margin: RFValue(20),
  },
  registerText: {
    fontFamily: "SquadaOne_400Regular",
    color: "#FFFF00",
    fontSize: RFValue(16),
    marginLeft: RFValue(2),
  },
});
