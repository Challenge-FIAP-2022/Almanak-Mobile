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
import GamesData from "../services/RecommendedGameService.json";
import CategoryData from "../services/RecommendedGameCategoty.json"

export default function HomeScreen() {
  const [data, setData] = useState([]);
  const [categoryData, setCategoryData] = useState([])

  useEffect(() => {
    setData(GamesData.games);
    setCategoryData(CategoryData.categories)
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
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {data.map((item) => (
            <RecommendedGameComponent
              category={item.categoria}
              gameName={item.jogo}
              urlImg={item.imagem}
              key={item.id}
            />
          ))}
        </ScrollView>
      </View>

      <Text style={styles.secondText}>Categorias</Text>

      <View style={styles.scrollVertical}>
        <ScrollView vertical showsHorizontalScrollIndicator={false}>
          {categoryData.map((item) => (
            <RecommendedCategoryComponent
              icon = {item.icone}
              categoryName = {item.categoria}
              key = {item.id}
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
    alignSelf: "center",
  },
  secondText: {
    fontFamily: "SquadaOne_400Regular",
    color: "#FFF",
    fontSize: 32,
    alignSelf: "center",
  },
  scrollHorizontal: {
    flex: 0.5,
    marginBottom: 20,
    marginRight: 20
  },
  scrollVertical: {
    flex: 0.4, 
    marginTop: 20,
    marginBottom: 80,
  }
});
