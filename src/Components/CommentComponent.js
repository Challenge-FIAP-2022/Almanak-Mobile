import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import RatingComponent from "../Components/RatingComponent";
import { RFValue } from "react-native-responsive-fontsize";

export default function CommentComponent({ user, text, score }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>{user}</Text>
      <View
        style={{
          justifyContent: "center",
          alignSelf: "baseline",
          width: RFValue(120),
          height: RFValue(30),
          paddingBottom: RFValue(10),
        }}
      >
        <RatingComponent score={score} color={"#FFF"} />
      </View>
      <Text style={styles.userAvaliation}>
        {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderTopWidth: 2,
    borderColor: "#296D98",
  },
  textTitle: {
    fontFamily: "SquadaOne_400Regular",
    textAlign: "left",
    color: "#FFFF00",
    fontSize: RFValue(26),
    marginTop: RFValue(12),
  },
  userAvaliation: {
    fontFamily: "SquadaOne_400Regular",
    textAlign: "left",
    color: "white",
    fontSize: 20,
    marginTop: RFValue(5),
    marginBottom: RFValue(15),
    zIndex: 10,
  },
});
