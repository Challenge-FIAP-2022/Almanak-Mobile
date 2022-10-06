import { Image } from "@rneui/base";
import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import RatingComponent from "./RatingComponent";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const ListGameComponent = ({ category, gameName, urlImg, score }) => {
  return (
    <Pressable style={styles.card}>
      <View style={styles.container}>
        <View>
          <Image
            style={styles.img}
            source={{
              uri: urlImg,
            }}
          />
        </View>

        <View style={styles.text}>
          <Text
            style={{
              fontFamily: "SquadaOne_400Regular",
              fontSize: RFValue(18),
              height: RFValue(20),
              color: "#FFF",
            }}
          >
            {category}
          </Text>
          <Text
            style={{
              fontFamily: "SquadaOne_400Regular",
              fontSize: RFValue(24),
              height: RFValue(26),
              color: "#FFF",
            }}
          >
            {gameName}
          </Text>
        </View>
      </View>

      <View style={styles.estrelas}>
        <RatingComponent 
          score ={score}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  img: {
    width: RFValue(75),
    height: RFValue(75),
    resizeMode: "cover",
    borderRadius: 10,
    marginStart: RFValue(10),
    marginTop: RFValue(45),
  },
  card: {
    flexDirection: "column",
    justifyContent: "space-between",
    borderWidth: 2,
    borderColor: "#296D98",
    height: RFValue(100),
    width: RFValue(300),
    borderRadius: 10,
    marginBottom: RFValue(20),
    backgroundColor: "#132E3D",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: RFValue(10),
    marginBottom: "auto",
    backgroundColor: "rgba(15, 146, 203, 0.15)",
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10,
    width: RFValue(320),
    height: RFValue(55),
  },
  text: {
    flex: 1,
    marginLeft: RFValue(15),
  },
  estrelas: {
    height: RFValue(70),
    alignItems: "center",
    paddingTop: RFValue(25),
    marginLeft: RFValue(110),
  },
});
