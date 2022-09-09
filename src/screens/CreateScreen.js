// import { CheckBox } from "@rneui/themed";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  ScrollView,
  TextInput,
} from "react-native";
import RadioButton from "react-native-paper";
import MultipleSelectListComponent from "../Components/MultipleSelectListComponent";

export default function CreateScreen() {
  // const [check2, setCheck2] = useState(false);
  const [radioIdade, setRadioIdade] = useState("menoresIdade");

  return (
    <ImageBackground
      source={require("../../assets/bg.png")}
      blurRadius={3}
      style={styles.imgBackground}
    >
      <Text style={styles.textTitle}>Cadastrar Novo Jogo</Text>

      <View style={styles.scrollVertical} >
        <ScrollView vertical showsVerticalScrollIndicator={false}>
          <View style={styles.textInput}>
            <Text style={styles.titleInput}>Nome do Jogo:</Text>
            <TextInput
              style={styles.answerInput}
              placeholder="Insira o nome do jogo"
              placeholderTextColor="#FFFFFF"
            />

            <Text style={styles.titleInput}>Quantidade de Jogadores:</Text>
            <View style={styles.numberInput}>
              <TextInput
                style={[styles.answerInput, styles.test]}
                placeholder="Mínimo"
                placeholderTextColor="#FFFFFF"
                keyboardType="number-pad"
              />
              <TextInput
                style={[styles.answerInput, styles.test]}
                placeholder="Máximo"
                placeholderTextColor="#FFFFFF"
                keyboardType="number-pad"
              />
            </View>

            {/* <View>
              <Text style={styles.titleInput}>O jogo permite jogadores menores de idade?:</Text>
              <View style={styles.radioButtonGroup}>
                <View style={styles.radioButtonIndividual}>
                  <RadioButton
                    value="maioresIdade"
                    status={radioIdade === "maioresIdade" ? "checked" : "unchecked"}
                    onPress={() => setRadioIdade("maioresIdade")}
                    uncheckedColor="#296D98"
                    color="#FFFF00"
                  />
                  <Text style={styles.textRadio}>Não, todos devem ser maiores de idade</Text>
                </View>
                <View style={styles.radioButtonIndividual}>
                  <RadioButton
                    value="menoresIdade"
                    status={radioIdade === "menoresIdade" ? "checked" : "unchecked"}
                    onPress={() => setRadioIdade("menoresIdade")}
                    uncheckedColor="#296D98"
                    color="#FFFF00"
                  />
                  <Text style={styles.textRadio}>Sim, permitir jogadores de todas as idades</Text>
                </View>
              </View>
            </View> */}

            <TextInput
              style={styles.answerInput}
              placeholder="VER ESSA PARTE"
              placeholderTextColor="#FFFFFF"
            />


            <Text style={styles.titleInput}>
              Quais itens são necessários no jogo:
            </Text>
            <MultipleSelectListComponent />
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
  },
  textTitle: {
    fontFamily: "PressStart2P_400Regular",
    color: "#FFFF00",
    fontSize: 28,
    lineHeight: 40,
    textAlign: "center",
    alignSelf: "center",
    marginTop: 60,
    width: 320,
  },
  scrollVertical: {
    flex: 1,
    marginTop: 20,
    marginBottom: 80,
    marginHorizontal: 20,
  },
  textInput: {
    flex: 1,
    color: "#FFF",
  },
  titleInput: {
    fontFamily: "SquadaOne_400Regular",
    fontSize: 20,
    color: "#FFF",
    marginHorizontal: 15,
    marginVertical: 15,
  },
  answerInput: {
    fontFamily: "Rubik_400Regular",
    fontSize: 16,
    color: "#FFF",
    borderWidth: 2,
    borderColor: "#296D98",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: "center",
    textAlignVertical: "center",
    textAlign: "left",
  },
  numberInput: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  checkbox: {
    backgroundColor: "transparent",
  },
  test: {
    paddingHorizontal: 35,
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
    color: '#FFF',
    fontFamily: 'SquadaOne_400Regular',
    fontSize: 18,
  },
});
