import { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  ScrollView,
} from "react-native";
import { SignaturesComponent } from "../Components/SignatureComponent";
import { api } from "../services/api";

export default function UserScreen() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api
      .get("/plano")
      .then(function (response) {
        // manipula o sucesso da requisição
        setData(response.data.content);
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
        <Text style={styles.textYellow}>Planos</Text>
      </View>
      <View
        style={{
          flex: 0.8,
          marginHorizontal: 30,
          justifyContent: "flex-start",
        }}
      >
        <View style={styles.scroll}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {data.map((item) => (
              <SignaturesComponent
                name={item.name}
                desc={item.desc}
                value={item.valor}
                key={item.id}
              />
            ))}
          </ScrollView>
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
    flex: 0.25,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 20,
  },
  textTitle: {
    fontFamily: "PressStart2P_400Regular",
    color: "#FFFF00",
    fontSize: 36,
    textShadowColor: "white",
    textShadowRadius: 1,
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    marginBottom: 30,
  },
  textYellow: {
    fontFamily: "PressStart2P_400Regular",
    color: "#FFFF00",
    fontSize: 32,
  },
  scroll: {
    flex: 0.9,
  },
});
