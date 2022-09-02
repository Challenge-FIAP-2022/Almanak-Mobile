import React from "react";
import {
  ImageBackground,
  View,
  StyleSheet,
  Pressable,
  Text,
} from "react-native";
//import { Rating } from "react-native-ratings";
import RatingComponent from "./RatingComponent";

export const ListGameComponent = ({category, gameName, urlImg}) => {
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
      </View>

      <View style={styles.rating}>
        <RatingComponent />
      </View>

    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imgBg: {
    width: 320,
    height: 90,
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
    marginBottom: "auto",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 50,
  },
  rating: {
    //marginTop: 'auto',
    height: 10,
    borderWidth: 2,
    
  }

});
