import { useNavigation } from "@react-navigation/native";
import {
  Alert,
  StyleSheet,
  View,
  ImageBackground,
  Pressable,
  Text,
} from "react-native";
import { useAuth } from "../contexts/Auth";

import { api } from "../services/api";

export default function UserScreen() {
  const navigation = useNavigation();
  const { authData, signOut } = useAuth();

  api
    .get(`/usuario/${authData.id}`)
    .then(function (response) {
      // manipula o sucesso da requisição
      console.log(response);
    })
    .catch(function (error) {
      // manipula erros da requisição
      console.error(error.response);
    });

  return (
    <ImageBackground
      source={require("../../assets/bg.png")}
      blurRadius={3}
      style={styles.imgBackground}
    >
      <View style={styles.container}>
        <Text style={styles.textTitle}>Almanak</Text>
        <Text style={styles.textButton}>Perfil de usuário</Text>
      </View>

      <View style={styles.userData}>
        <Text style={styles.text}>Nome</Text>
        <Text style={styles.userInfo}>Otavio Gomes</Text>
        <Text style={styles.text}>E-mail</Text>
        <Text style={styles.userInfo}>otavio.gomes@gmail.com</Text>
        <Text style={styles.text}>Senha</Text>
        <Text style={styles.userInfo}>*********</Text>
        <Text style={styles.text}>Data de nascimento</Text>
        <Text style={styles.userInfo}>09/Maio/199x</Text>

        <View style={styles.buttons}>
          <Pressable
            style={styles.button}
            onPress={() => (
              Alert.alert("Cadastro atualizado"),
              navigation.navigate("SignaturesScreen")
            )}
          >
            <Text style={styles.textButton}>Atualizar Cadastro</Text>
          </Pressable>

          <Pressable style={styles.button} onPress={signOut}>
            <Text style={styles.textButton}>Sair</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imgBackground: {
    flex: 1,
    resizeMode: "contain",
  },
  container: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 20,
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
    marginBottom: 20,
  },
  buttons: {
    flex: 0.8,
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    backgroundColor: "#3792CB",
    marginTop: 20,
    width: "80%",
  },
  textButton: {
    fontFamily: "PressStart2P_400Regular",
    color: "#FFFF00",
    fontSize: 13,
    marginTop: 5,
    alignItems: 'center',
  },
  userData: {
    flex: 1,
  },
  text: {
    fontFamily: "SquadaOne_400Regular",
    fontSize: 18,
    color: "#FFFFFF",
    marginLeft: 40,
    marginBottom: 10,
  },
  userInfo: {
    fontFamily: "Rubik_400Regular",
    fontSize: 18,
    color: "#FFFFFF",
    marginLeft: 35,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: "#296D98",
    borderRadius: 10,
    padding: 10,
    width: "80%",
    paddingVertical: 10,
    textAlignVertical: "center"
  },
});
