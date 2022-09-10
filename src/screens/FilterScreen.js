import { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { RadioButton } from "react-native-paper";
import { api } from "../services/api";
import MultipleSelectListComponent from "../Components/MultipleSelectListComponent";

export default function FilterScreen() {
  const [itensData, setItensData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);

  const [radioIdade, setRadioIdade] = useState("maioresIdade");
  const [count, setCount] = useState(0);

  function getCategories() {
    return api.get("/categoria/adj");
  }

  function getItens() {
    return api.get("/item");
  }

  useEffect(() => {
    Promise.all([getItens(), getCategories()]).then(function (results) {
      const itens = results[0].data.content;
      const categories = results[1].data;

      // console.log(results[0].data.content);
      setItensData(itens);

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
                    value="maioresIdade"
                    status={
                      radioIdade === "maioresIdade" ? "checked" : "unchecked"
                    }
                    onPress={() => setRadioIdade("maioresIdade")}
                    uncheckedColor="#296D98"
                    color="#FFFF00"
                  />
                  <Text style={styles.textRadio}>
                    Não, todos são maiores de idade
                  </Text>
                </View>
                <View style={styles.radioButtonIndividual}>
                  <RadioButton
                    value="menoresIdade"
                    status={
                      radioIdade === "menoresIdade" ? "checked" : "unchecked"
                    }
                    onPress={() => setRadioIdade("menoresIdade")}
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
                  onPress={() => (count === 0 ? count : setCount(count - 1))}
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
              <MultipleSelectListComponent lista={itensData} />
            </View>

            <View style={styles.dropDown}>
              <Text style={styles.textTitle}>
                Selecione a(s) categoria(s) de jogo
              </Text>
              <MultipleSelectListComponent lista={categoryData} />
            </View>
          </View>
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
    // alignSelf: "center",
    // marginTop: 20,
    marginBottom: 5,
    // width: 300,
  },
  textInputAndIcons: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    marginBottom: 20,
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
});
