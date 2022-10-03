import { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TextInput,
  Pressable,
  ScrollView,
  Alert,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { RadioButton } from "react-native-paper";
import { api } from "../services/api";
import { MultipleSelectListComponent } from "../Components/MultipleSelectListComponent";
import { useNavigation } from "@react-navigation/native";

export default function FilterScreen() {
  const navigation = useNavigation();

  const [itensData, setItensData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [selecionadosItens, setSelecionadosItens] = useState([]);
  const [selecionadosCategories, setSelecionadosCategories] = useState([]);

  const [radioIdade, setRadioIdade] = useState("maior de idade");
  const [count, setCount] = useState(1);

  function getCategories() {
    return api.get("/categoria/adj");
  }

  function getItens() {
    return api.get("/item");
  }

  function getArrayPosition(itensToFind, listData) {
    let posicoesValidas = itensToFind.map((element) => {
      let position = listData.findIndex((e) => e.name == element) + 1;
      if (position > 0) {
        return position;
      }
    });

    return posicoesValidas;
  }

  async function useAudio() {
    const response = await api.get(
      "https://almanak.mybluemix.net/chatbot/teste"
    );
    // manipula o sucesso da requisição
    const categorias = response.data.busca.Categorias;
    let categoriasValidas = getArrayPosition(categorias, categoryData);
    const idade = response.data.busca.Idade[0];

    const itens = response.data.busca.Itens;
    let itensValidos = getArrayPosition(itens, itensData);

    const pessoas = response.data.busca["sys-number"][0];
    console.log(response.data);

    setCount(pessoas);
    setSelecionadosItens(itensValidos);
    setSelecionadosCategories(categoriasValidas);
    console.log("AQUI" + categoriasValidas);
    setRadioIdade(idade);
  }

  useEffect(() => {
    Promise.all([getItens(), getCategories()]).then(function (results) {
      const itens = results[0].data.content;
      const categories = results[1].data;

      setItensData(itens);

      // console.log(categories);
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
        <ScrollView vertical showsVerticalScrollIndicator={false}>
          <View style={styles.textInputAndIcons}>
            <TextInput
              style={styles.textInput}
              placeholder="Configurar Filtros"
              placeholderTextColor="#FFFFFF"
            />
            <MaterialIcons
              name="mic"
              size={25}
              color="#FFF"
              style={styles.icon}
              onPress={() => useAudio()}
            />
          </View>

          <View style={styles.scrollVertical}>
            <View>
              <Text style={styles.textTitle}>
                Possui jogadores menores de 18 anos?
              </Text>
              <View style={styles.radioButtonGroup}>
                <View style={styles.radioButtonIndividual}>
                  <RadioButton
                    value="maior de idade"
                    status={
                      radioIdade === "maior de idade" ? "checked" : "unchecked"
                    }
                    onPress={() => setRadioIdade("maior de idade")}
                    uncheckedColor="#296D98"
                    color="#FFFF00"
                  />
                  <Text style={styles.textRadio}>
                    Não, todos são maiores de idade
                  </Text>
                </View>
                <View style={styles.radioButtonIndividual}>
                  <RadioButton
                    value="menor de idade"
                    status={
                      radioIdade === "menor de idade" ? "checked" : "unchecked"
                    }
                    onPress={() => setRadioIdade("menor de idade")}
                    uncheckedColor="#296D98"
                    color="#FFFF00"
                  />
                  <Text style={styles.textRadio}>
                    Sim, tenho menores de idade jogando
                  </Text>
                </View>
              </View>
            </View>

            <View>
              <Text style={styles.textTitle}>Quantas pessoas vão jogar?</Text>
              <View style={styles.numberInput}>
                <Pressable
                  style={styles.button}
                  title="-"
                  onPress={() => (count === 1 ? count : setCount(count - 1))}
                >
                  <Text style={styles.textButton}>-</Text>
                </Pressable>

                <Text style={styles.counter}>{count}</Text>
                <Pressable
                  style={styles.button}
                  title="+"
                  onPress={() => setCount(count + 1)}
                >
                  <Text style={styles.textButton}>+</Text>
                </Pressable>
              </View>
            </View>

            <View style={styles.dropDown}>
              <Text style={styles.textTitle}>
                Possui algum dos itens abaixo?
              </Text>
              <MultipleSelectListComponent
                lista={itensData}
                selecionados={selecionadosItens}
                setSelectedItems={setSelecionadosItens}
              />
            </View>

            <View style={styles.dropDown}>
              <Text style={styles.textTitle}>
                Selecione a(s) categoria(s) de jogo
              </Text>
              <MultipleSelectListComponent
                lista={categoryData}
                selecionados={selecionadosCategories}
                setSelectedItems={setSelecionadosCategories}
              />
            </View>
          </View>
          <Pressable
            style={styles.secondButton}
            onPress={() => {
              Alert.alert("Buscando", "Buscando jogos com base no filtro", [
                { text: "Ok", onPress: () => navigation.navigate("Games") },
              ]);
            }}
          >
            <Text style={styles.textSecondButton}>Buscar</Text>
          </Pressable>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imgBackground: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 0.85,
    // alignItems: "center",
    margin: 20,
    padding: 20,
    borderWidth: 5,
    borderRadius: 20,
    borderColor: "#296D98",
    backgroundColor: "#0E2433",
  },
  textTitle: {
    fontFamily: "PressStart2P_400Regular",
    color: "#FFFF00",
    fontSize: 14,
    lineHeight: 20,
    textAlign: "center",
    marginBottom: 5,
    marginTop: 15,
    // alignSelf: "center",
    // width: 300,
  },
  textInputAndIcons: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    // marginBottom: 20,
    borderWidth: 2,
    borderColor: "#296D98",
    borderRadius: 10,
    justifyContent: "space-between",
  },
  textInput: {
    fontFamily: "SquadaOne_400Regular",
    textAlign: "left",
    paddingLeft: 20,
    color: "white",
    fontSize: 18,
  },
  icon: {
    alignSelf: "auto",
    paddingRight: 20,
    // paddingStart: 20,
    // justifyContent: "space-between",
  },
  radioButtonGroup: {
    justifyContent: "space-between",
  },
  radioButtonIndividual: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 2,
  },
  textRadio: {
    marginLeft: 5,
    color: "#FFF",
    fontFamily: "SquadaOne_400Regular",
    fontSize: 18,
  },
  counter: {
    fontFamily: "SquadaOne_400Regular",
    fontSize: 72,
    color: "#FFF",
    textShadowColor: "#296D98",
    textShadowRadius: 1,
    textShadowOffset: {
      width: 3,
      height: 3,
    },
  },
  button: {
    width: 40,
    height: 40,
    borderWidth: 2,
    borderColor: "#296D98",
    borderRadius: 10,
  },
  numberInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 40,
    marginVertical: 2,
  },
  dropDown: {
    // flex: 1,
    width: "100%",
    // alignItems: "center"
  },
  // scrollVertical: {
  //   flex: 1,
  //   justifyContent: "center",
  // },
  textButton: {
    alignSelf: "center",
    justifyContent: "center",
    fontFamily: "SquadaOne_400Regular",
    fontSize: 30,
    color: "#FFF",
    marginBottom: 5,
  },
  secondButton: {
    width: "60%",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#3792CB",
    alignSelf: "center",
    marginTop: 10,
  },

  textSecondButton: {
    fontFamily: "PressStart2P_400Regular",
    color: "#FFFF00",
    fontSize: 12,
    marginTop: 5,
  },
});
