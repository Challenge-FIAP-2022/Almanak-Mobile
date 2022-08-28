import React from "react";
import {
  ImageBackground,
  View,
  StyleSheet,
  Pressable,
  Text,
} from "react-native";

export const RecommendedGameComponent = ({category, gameName, urlImg}) => {
  return (
    <ImageBackground
      style={styles.imgBg}
      source={{
        uri: urlImg,
      }}
      imageStyle={{ borderRadius: 10 }}
    >
      <View style={styles.container}>
        <View>
          <Text
            style={{
              fontFamily: "SquadaOne_400Regular",
              fontSize: 18,
              color: "#0E2433",
            }}
          >
            {category}
          </Text>
          <Text
            style={{
              fontFamily: "SquadaOne_400Regular",
              fontSize: 24,
              color: "#0E2433",
            }}
          >
            {gameName}
          </Text>
        </View>
        <Pressable style={styles.button}>
          <Text style={styles.textButton}>Visualizar Jogo</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imgBg: {
    width: 220,
    height: 175,
    resizeMode: "contain",
    backgroundColor: "#1C4966",
    borderRadius: 10,
    marginStart: 20,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginTop: "auto",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  button: {
    backgroundColor: "#1C4966",
    borderRadius: 10,
    justifyContent: "center",
    alignContent: "center",
    padding: 5,
  },
  textButton: {
    fontFamily: "Rubik_400Regular",
    color: "#FFF",
    fontSize: 9,
  },
});
