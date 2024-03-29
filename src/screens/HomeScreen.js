import { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  ScrollView,
} from "react-native";
import { RecommendedCategoryComponent } from "../Components/RecommendedCategoryComponent";
import { RecommendedGameComponent } from "../Components/RecommendedGameComponent";
import { useAuth } from "../contexts/Auth";
import { api } from "../services/api";
import { RFValue } from "react-native-responsive-fontsize";

export default function HomeScreen() {
  const [gameData, setGameData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const { authData } = useAuth();

  function getCategories() {
    return api.get("/categoria/adj");
  }

  function getGames() {
    return api.get(`/jogo/recomendados/${authData.id}`);
  }

  useEffect(() => {
    Promise.all([getGames(), getCategories()]).then(function (results) {
      const games = results[0].data;
      const categories = results[1].data;

      setGameData(games);
      setCategoryData(categories);
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
        <Text style={styles.secondText}>Recomendados</Text>
      </View>

      <View style={styles.scrollHorizontal}>
        <ScrollView
          contentContainerStyle={{ alignItems: "center" }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {gameData.map((item) => (
            <RecommendedGameComponent
              gameName={item.name}
              category={item.categorias[0].name}
              urlImg={item.imagem}
              key={item.id}
              gameID={item.id}
            />
          ))}
        </ScrollView>
      </View>

      <Text style={styles.secondText}>Categorias</Text>

      <View style={styles.scrollVertical}>
        <ScrollView vertical showsHorizontalScrollIndicator={false}>
          {categoryData.map((item) => (
            <RecommendedCategoryComponent
              icon={item.icone}
              categoryName={item.name}
              key={item.id}
              id={item.id}
            />
          ))}
        </ScrollView>
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
    justifyContent: "flex-end",
    marginBottom: RFValue(20),
    marginTop: RFValue(50),
  },
  textTitle: {
    fontFamily: "PressStart2P_400Regular",
    color: "#FFFF00",
    fontSize: RFValue(36),
    textShadowColor: "white",
    textShadowRadius: 1,
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    marginBottom: RFValue(20),
    alignSelf: "center",
  },
  secondText: {
    fontFamily: "SquadaOne_400Regular",
    color: "#FFF",
    fontSize: RFValue(32),
    alignSelf: "center",
    paddingTop: RFValue(10),
  },
  scrollHorizontal: {
    flex: 0.35,
    // marginBottom: 15,
    marginRight: RFValue(20),
  },
  scrollVertical: {
    flex: 0.5,
    marginTop: RFValue(20),
    marginBottom: RFValue(80),
  },
});
