import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  ImageBackground,
  TextInput,
} from "react-native";
import GamesData from "../services/RecommendedGameService.json";
import { useEffect, useState } from "react";
import { ListGameComponent } from "../Components/ListGameComponent";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

export default function ListScreen() {
  const [data, setData] = useState([]);

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

        <View style={styles.textInputAndIcons}>
          <TextInput
            style={styles.textInput}
            placeholder="Pesquisar jogos"
            placeholderTextColor="#FFFFFF"
          />
          <MaterialIcons
            name="search"
            size={25}
            color="#FFF"
            style={styles.icon}
          />
          <MaterialIcons
            name="mic"
            size={25}
            color="#FFF"
            style={styles.icon}
          />
          <MaterialCommunityIcons
            name="filter"
            size={25}
            color="#FFF"
            style={styles.icon}
          />
        </View>

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
    marginTop: 15,
    marginBottom: 50,
  },
  textTitle: {
    fontFamily: "PressStart2P_400Regular",
    color: "#FFFF00",
    fontSize: 28,
    lineHeight: 40,
    textAlign: "center",
    alignSelf: "center",
    marginTop: 60,
    marginBottom: 15,
    width: 320,
  },
  textInputAndIcons: {
    width: 320,
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    width: 320,
    margin: 10,
    borderWidth: 2,
    borderColor: "#296D98",
    borderRadius: 10,
  },
  textInput: {
    fontFamily: "SquadaOne_400Regular",
    textAlign: "left",
    paddingLeft: 20,
    color: "white",
    fontSize: 20,
    // height: 40,
    // width: 320,
    // margin: 10,
    // borderWidth: 2,
    // borderColor: "#296D98",
    // borderRadius: 10,
    // backgroundColor: "rgba(14, 36, 51, 0.2)",
  },
  icon: {
    alignSelf: "center",
    paddingStart: 20,
    justifyContent: "space-between",
  },
});
