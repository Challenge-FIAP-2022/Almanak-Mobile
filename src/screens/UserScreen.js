import { useEffect, useState } from "react";
import {
  Alert,
  StyleSheet,
  View,
  ImageBackground,
  Pressable,
  Text,
} from "react-native";
import { useAuth } from "../contexts/Auth";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import { api } from "../services/api";

export default function UserScreen() {
  const { authData, signOut } = useAuth();
  const [user, setUser] = useState({});

  useEffect(() => {
    api
      .get(`/usuario/adj/${authData.id}`)
      .then(function (response) {
        // manipula o sucesso da requisição
        console.log(response.data);
        setUser(response.data);
      })
      .catch(function (error) {
        // manipula erros da requisição
        console.error(error.response);
      });
  }, []);

  return (
    <ImageBackground
      source={require("../../assets/bg.png")}
      blurRadius={3}
      style={styles.imgBackground}
    >
      <View style={styles.container}>
        <Text style={styles.textTitle}>Almanak</Text>
        <Text style={styles.textYellow}>Perfil de usuário</Text>
      </View>

      <View style={styles.userData}>
        <Text style={styles.text}>Nome</Text>
        <Text style={styles.userInfo}>{user.name}</Text>
        <Text style={styles.text}>E-mail</Text>
        <Text style={styles.userInfo}>{user.email}</Text>
        <Text style={styles.text}>Senha</Text>
        <Text style={styles.userInfo}>*********</Text>
        <Text style={styles.text}>Data de nascimento</Text>
        <Text style={styles.userInfo}>{user.dtNascimento}</Text>

        <View style={styles.buttons}>
          <Pressable
            style={styles.button}
            onPress={() => Alert.alert("Cadastro atualizado")}
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
    marginBottom: RFValue(20),
  },
  textTitle: {
    fontFamily: "PressStart2P_400Regular",
    color: "#FFFF00",
    fontSize: RFValue(38),
    textShadowColor: "white",
    textShadowRadius: 1,
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    marginBottom: RFValue(20),
  },
  buttons: {
    flex: 0.8,
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: RFValue(12),
    paddingHorizontal: RFValue(32),
    borderRadius: 10,
    backgroundColor: "#3792CB",
    marginTop: RFValue(20),
    width: "80%",
  },
  textYellow: {
    fontFamily: "PressStart2P_400Regular",
    color: "#FFFF00",
    fontSize: RFValue(23),
    lineHeight: RFValue(32),
  },
  textButton: {
    fontFamily: "PressStart2P_400Regular",
    color: "#FFFF00",
    fontSize: RFValue(10),
    marginTop: RFValue(5),
    alignItems: "center",
  },
  userData: {
    flex: 0.85,
  },
  text: {
    fontFamily: "SquadaOne_400Regular",
    fontSize: RFValue(18),
    color: "#FFFFFF",
    marginLeft: RFValue(40),
    marginBottom: RFValue(5),
  },
  userInfo: {
    fontFamily: "Rubik_400Regular",
    fontSize: RFValue(16),
    color: "#FFFFFF",
    marginLeft: RFValue(35),
    marginBottom: RFValue(10),
    borderWidth: 2,
    borderColor: "#296D98",
    borderRadius: 10,
    padding: RFValue(10),
    width: "80%",
    paddingVertical: RFValue(10),
    textAlignVertical: "center",
  },
});
