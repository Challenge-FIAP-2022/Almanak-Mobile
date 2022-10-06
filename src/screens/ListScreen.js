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
import { ListGameComponent } from "../Components/ListGameComponent";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { api } from "../services/api";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default function ListScreen({ route }) {
  const navigation = useNavigation();
  const [search, setSearch] = useState('')
  const [data, setData] = useState([]);
  const [oldParam, setOldParam] = useState();

  const endpoint = "/jogo/valido/sim";
  const endpointCategoria = "/jogo/categoria/" + route.params?.game;

  useEffect(() => {
    if (data == false || route.params?.game != oldParam) {
      api
        .get(route.params?.game ? endpointCategoria : endpoint)
        .then(function (response) {
          // manipula o sucesso da requisição
          setData(response.data);
          setOldParam(route.params?.game);
        })
        .catch(function (error) {
          // manipula erros da requisição
          console.error(error);
        });
    }
  });

  useEffect(() => {
    return () => {
      navigation.addListener("blur", () => {
        navigation.setParams({ game: null });
        setData([]);
      });
    };
  }, [navigation]);

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
            size={RFValue(25)}
            color="#FFF"
            style={styles.icon}
            onPress={() => console.log("DASHBOARD")}
          />
          <MaterialIcons
            name="mic"
            size={RFValue(25)}
            color="#FFF"
            style={styles.icon}
          />

          <Pressable>
            <MaterialCommunityIcons
              name="filter"
              size={RFValue(25)}
              color="#FFF"
              style={styles.icon}
              onPress={() => navigation.navigate("Filter")}
            />
          </Pressable>
        </View>

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
    marginHorizontal: RFValue(20),
  },
  scrollVertical: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: RFValue(15),
    marginBottom: RFValue(50),
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
    width: RFValue(300),
  },
  textInputAndIcons: {
    width: RFValue(300),
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
    paddingStart: RFValue(10),
    justifyContent: "space-between",
  },
});
