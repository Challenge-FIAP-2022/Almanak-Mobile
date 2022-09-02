import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, ScrollView, ImageBackground, TextInput } from "react-native";
import RatingComponent from "../Components/RatingComponent";
import GamesData from "../services/RecommendedGameService.json";
import { useEffect, useState } from "react";
import { ListGameComponent } from "../Components/ListGameComponent";

export default function ListScreen() {
  const [data, setData] = useState([]);
  //const navigation = useNavigation();

  useEffect(() => {
    setData(GamesData.games);
  }, []);

  return (
    <ImageBackground
      source={require("../../assets/bg.png")}
      blurRadius={3}
      style={styles.imgBackground}
    >

      <View style={styles.container}>
        <Text style={styles.textTitle}>Lista de Jogos</Text>

          <TextInput style={styles.textInput}
            placeholder="Pesquisar jogos"
            placeholderTextColor="#FFFFFF"

          />


        <View style={styles.scrollVertical}>
          <ScrollView vertical showsVerticalScrollIndicator={false}>
            {data.map((item) => (
              <ListGameComponent
                category={item.categoria}
                gameName={item.jogo}
                urlImg={item.imagem}
                key={item.id}
              />
            ))}
          </ScrollView>
          <RatingComponent />
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
    flex: 1,
    alignItems: "center",
    marginBottom: 20,
  },
  scrollVertical: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

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
    textAlign: "center",
    lineHeight: 50,
    marginTop: 50,
    marginBottom: 15,
    alignSelf: "center",
  },
  textInput: {
    fontFamily: "SquadaOne_400Regular", 
    height: 40,
    width: "80%",
    margin: 10,
    textAlign: "left",
    borderWidth: 2,
    borderColor: "#296D98",
    paddingLeft: 20,
    borderRadius: 10,
    color: "white",
    fontSize: 20,
    backgroundColor: "rgba(14, 36, 51, 0.2)",
  }

});
