import { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  ImageBackground,
} from "react-native";
import MarketPlaceItensComponent from "../Components/MarketPlaceItensComponent";
import { RFValue } from "react-native-responsive-fontsize";

export default function MarketPlaceScreen() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([
      {
        id: 1,
        jogo: "Baralho de Cartas",
        imagem:
          "https://images.unsplash.com/photo-1501003878151-d3cb87799705?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      },
      {
        id: 2,
        jogo: "Tabuleiro Xadrez",
        imagem:
          "https://static.turbosquid.com/Preview/2020/09/27__02_17_00/chess_light1.pngAA62607D-6DBD-4520-9788-87DFD4A3B39BLarge.jpg",
      },
      {
        id: 3,
        jogo: "Bola",
        imagem:
          "https://images.unsplash.com/photo-1593786930094-d5c8164ac771?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      },
    ]);
  }, []);

  return (
    <ImageBackground
      source={require("../../assets/bg.png")}
      blurRadius={3}
      style={styles.imgBackground}
    >
      <View style={styles.container}>
        <Text style={styles.textTitle}>Loja de Jogos</Text>
        <View style={styles.scrollVertical}>
          {data.map((item) => (
            <MarketPlaceItensComponent
              category={item.categoria}
              gameName={item.jogo}
              urlImg={item.imagem}
              key={item.id}
            />
          ))}
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
    marginHorizontal: 20,
  },
  scrollVertical: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: RFValue(15),
  },
  textTitle: {
    fontFamily: "PressStart2P_400Regular",
    color: "#FFFF00",
    fontSize: RFValue(28),
    lineHeight: RFValue(40),
    textAlign: "center",
    alignSelf: "center",
    marginTop: RFValue(60),
    marginBottom: RFValue(15),
    width: RFValue(320),
  },
  textInputAndIcons: {
    width: RFValue(320),
    flexDirection: "row",
    alignItems: "center",
    height: RFValue(40),
    margin: RFValue(10),
    borderWidth: 2,
    borderColor: "#296D98",
    borderRadius: 10,
  },
  textInput: {
    fontFamily: "SquadaOne_400Regular",
    textAlign: "left",
    paddingLeft: RFValue(20),
    color: "white",
    fontSize: RFValue(20),
  },
  icon: {
    alignSelf: "center",
    paddingStart: RFValue(20),
    justifyContent: "space-between",
  },
});
