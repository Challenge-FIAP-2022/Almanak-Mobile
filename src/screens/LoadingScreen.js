import { StyleSheet, View, ImageBackground, Image } from "react-native";

export default function App(navigation) {
  return (
    <ImageBackground
      source={require("../../assets/bg.png")}
      style={styles.imgBackground}
    >
      <View style={styles.container}>
        <Image source={require("../../assets/logo.png")} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imgBackground: {
    flex: 1,
    resizeMode: "cover",
  },
});
