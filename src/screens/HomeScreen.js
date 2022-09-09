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
import CategoryData from "../services/RecommendedGameCategoty.json";
import { api } from "../services/api";

export default function HomeScreen() {
  const [gameData, setGameData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);

  function getCategories() {
    return api.get("/categoria/adj");
  }

  function getGames() {
    return api.get("/jogo/valido/sim");
  }

  Promise.all([getGames(), getCategories()]).then(function (results) {
    const games = results[0].data;
    const categories = results[1].data;

    console.log(games);
    console.log(categories);
  });

  useEffect(() => {
    // setTimeout(()=>{
    // api
    //   .get("/jogo/valido/sim", {
    //     params: {
    //       size: 5,
    //     },
    //   })
    //   .then(function (response) {
    //     // manipula o sucesso da requisição
    //     setGameData(response.data);
    //   })
    //   .catch(function (error) {
    //     // manipula erros da requisição
    //     console.error(error);
    //   });
    // // }, 1000)
    // setCategoryData(CategoryData.categories);

    Promise.all([getGames(), getCategories()]).then(function (results) {
      const games = results[0].data;
      const categories = results[1].data;

      console.log(games);
      setGameData(games);

      console.log(categories);
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
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {gameData.map((item, idx) => (
            <RecommendedGameComponent
              gameName={item.name}
              category={item.categorias[0].name}
              urlImg={item.imagem}
              key={idx}
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
    marginTop: 50,
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
    marginBottom: 20,
    alignSelf: "center",
  },
  secondText: {
    fontFamily: "SquadaOne_400Regular",
    color: "#FFF",
    fontSize: 32,
    alignSelf: "center",
  },
  scrollHorizontal: {
    flex: 0.3,
    marginBottom: 15,
    marginRight: 20,
  },
  scrollVertical: {
    flex: 0.5,
    marginTop: 20,
    marginBottom: 80,
  },
});
