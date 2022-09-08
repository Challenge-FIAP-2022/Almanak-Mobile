import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TextInput,
} from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

export default function ListScreen() {
  return (
    <ImageBackground
      source={require("../../assets/bg.png")}
      blurRadius={3}
      style={styles.imgBackground}
    >
      <View style={styles.container}>
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
        <Text style={styles.textTitle}>Lista de Jogos</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imgBackground: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "center",
  },
  container: {
    flex: 0.85,
    alignItems: "center",
    margin: 20,
    borderWidth: 5,
    borderRadius: 10,
    borderColor: "#296D98",
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
    width: 280,
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
