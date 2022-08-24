import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Text,
} from "react-native";

export default function App() {
  return (
    <ImageBackground
      source={require("../../assets/bg.png")}
      style={styles.imgBackground}
    >
      <View style={styles.container}>
        <TouchableOpacity>
          <Image source={require("../../assets/logo.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.loading}>
        <ActivityIndicator size="small" color="#45B6FE" />
        <Text style={styles.text}>Beijoz</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  imgBackground: {
    flex: 1,
    resizeMode: "cover",
  },
  loading: {
    flex: 1,
    alignItems: "center"
  },
  text: {
    fontSize: 14,
    fontFamily: "PressStart2P_400Regular",
    color: "#FFFF00",
  },
});
