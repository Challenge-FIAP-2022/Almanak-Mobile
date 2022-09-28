import { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  ImageBackground,
  TextInput,
  Pressable,
} from "react-native";
import GamesData from "../services/RecommendedGameService.json";
import { ListGameComponent } from "../Components/ListGameComponent";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { api } from "../services/api";

export default function ListScreen() {
  
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  
  useEffect(() => {
    api.get('/jogo/valido/sim')
    .then(function (response) {
      // manipula o sucesso da requisição
      setData(response.data);
      console.log(response.data);
    })
    .catch(function (error) {
      // manipula erros da requisição
      console.error(error);
    })
    
  }, []);
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

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

          <Pressable>
            <MaterialCommunityIcons
              name="filter"
              size={25}
              color="#FFF"
              style={styles.icon}
              onPress={() => navigation.navigate("Filter")}
            />
          </Pressable>
        </View>

        {/* <View style={{ flex: 1 }}>
          <Button title="Show modal" onPress={toggleModal} />

          <Modal isVisible={isModalVisible}>
            <View style={{ flex: 1 }}>
              <Text>Hello!</Text>

              <Button title="Hide modal" onPress={toggleModal} />
            </View>
          </Modal>
        </View> */}

        <View style={styles.scrollVertical}>
          <ScrollView vertical showsVerticalScrollIndicator={false}>
            {data.map((item) => (
              <ListGameComponent
                category={item.categorias[0].name}
                gameName={item.name}
                urlImg={item.imagem}
                key={item.id}
                score={item.score}
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
    marginHorizontal: 20,
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
  },
  icon: {
    alignSelf: "center",
    paddingStart: 20,
    justifyContent: "space-between",
  },
});
