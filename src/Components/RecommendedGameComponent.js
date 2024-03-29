import React from "react";
import {
  ImageBackground,
  View,
  StyleSheet,
  Pressable,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const RecommendedGameComponent = ({
  category,
  gameName,
  urlImg,
  gameID,
}) => {
  const navigation = useNavigation();

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
            {category.length < 12 ? category : category.slice(0, 12) + "..."}
          </Text>
          <Text
            style={{
              fontFamily: "SquadaOne_400Regular",
              fontSize: 24,
              color: "#0E2433",
            }}
          >
            {gameName.length < 12 ? gameName : gameName.slice(0, 12) + "..."}
          </Text>
        </View>
        <Pressable
          style={styles.button}
          onPress={() =>
            navigation.navigate("StackGame", {
              screen: "Game",
              params: {
                game: gameID,
              },
            })
          }
        >
          <Text style={styles.textButton}>Visualizar Jogo</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imgBg: {
    width: RFValue(220),
    height: RFValue(175),
    resizeMode: "contain",
    backgroundColor: "#1C4966",
    borderRadius: 10,
    marginStart: RFValue(20),
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: RFValue(10),
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
    alignItems: "center",
    padding: RFValue(5),
    // width: "30%",
    // marginRight: 2,
  },
  textButton: {
    fontFamily: "Rubik_400Regular",
    color: "#FFF",
    fontSize: RFValue(9),
    textAlign: "center",
  },
});
