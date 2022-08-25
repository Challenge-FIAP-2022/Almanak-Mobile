import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
} from "react-native";
import { SignatureComponent } from "../Components/SignatureComponent";
import { useAuth } from "../contexts/Auth";

export default function UserScreen() {
  return (
    <ImageBackground
      source={require("../../assets/bg.png")}
      blurRadius={3}
      style={styles.imgBackground}
    >
      <View style={styles.container}>
        <Text style={styles.textTilte}>Almanak</Text>
        <Text style={styles.textYellow}>Planos</Text>
      </View>
      <View
        style={{
          flex: 0.8,
          marginHorizontal: 30,
          justifyContent: "flex-start",
        }}
      >
        <SignatureComponent />
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
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 20,
  },
  textTilte: {
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
  },
  textYellow: {
    fontFamily: "PressStart2P_400Regular",
    color: "#FFFF00",
    fontSize: 32,
  },
});
