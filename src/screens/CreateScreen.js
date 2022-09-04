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
import MultipleSelectListComponent from "../Components/MultipleSelectListComponent";

export default function CreateScreen() {
  // const [check2, setCheck2] = useState(false);

  return (
    <ImageBackground
      source={require("../../assets/bg.png")}
      blurRadius={3}
      style={styles.imgBackground}
    >
      <Text style={styles.textTitle}>Cadastrar Novo Jogo</Text>

      <View style={styles.scrollVertical}>
        <ScrollView vertical showsHorizontalScrollIndicator={false}>
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
                style={styles.answerNumberInput}
                placeholder="Mínimo"
                placeholderTextColor="#FFFFFF"
                keyboardType="number-pad"
              />
              <TextInput
                style={styles.answerNumberInput}
                placeholder="Máximo"
                placeholderTextColor="#FFFFFF"
                keyboardType="number-pad"
              />
            </View>

            <Text style={styles.titleInput}>
              O jogo permite jogadores menores de idade?:
            </Text>
            {/* <CheckBox style={styles.checkbox}
              center
              wrapperStyle="#0E2433"
              title="Click Here"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checked={check2}
              onPress={() => setCheck2(!check2)}
            />  */}
            <TextInput
              style={styles.answerInput}
              placeholder="Arrumar a parte do radiobutton aqui"
              placeholderTextColor="#FFFFFF"
            />

            <Text style={styles.titleInput}>
              Quais itens são necessários no jogo:
            </Text>
          </View>

          <MultipleSelectListComponent />
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
    marginBottom: 15,
    width: 320,
  },
  scrollVertical: {
    flex: 1,
    marginTop: 20,
    marginBottom: 80,
  },
  textInput: {
    flex: 1,
    color: "#FFF",
  },
  titleInput: {
    fontFamily: "SquadaOne_400Regular",
    fontSize: 20,
    color: "#FFF",
    marginLeft: 45,
    marginRight: 40,
    marginBottom: 10,
  },
  answerInput: {
    fontFamily: "Rubik_400Regular",
    fontSize: 16,
    color: "#FFF",
    marginLeft: 30,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: "#296D98",
    borderRadius: 10,
    padding: 15,
    width: 320,
    paddingVertical: 10,
    alignItems: "center",
    textAlignVertical: "center",
    textAlign: "left",
  },
  numberInput: {
    flexDirection: "row",
  },
  answerNumberInput: {
    fontFamily: "Rubik_400Regular",
    fontSize: 16,
    color: "#FFF",
    marginLeft: 30,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: "#296D98",
    borderRadius: 10,
    padding: 15,
    width: 145,
    paddingVertical: 10,
    alignItems: "center",
    textAlignVertical: "center",
    textAlign: "left",
  },
  checkbox: {
    backgroundColor: "transparent",
  },
});
