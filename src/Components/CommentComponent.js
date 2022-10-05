import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import RatingComponent from "../Components/RatingComponent";

export default function CommentComponent({ user, text, score }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Usuário</Text>
      <View
        style={{
          justifyContent: "center",
          alignSelf: "baseline",
          width: 120,
          height: 30,
          paddingBottom: 10,
        }}
      >
        <RatingComponent score={5} color={"#FFF"} />
      </View>
      <Text style={styles.userAvaliation}>
        Achei o aplicativo maravilhoso. Tenho vários itens que consigo usar para
        jogar diversos jogos com os meus amigos e eu nem lembrava da existência
        deles. Super recomendo!!!
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
    fontSize: 26,
    marginTop: 12,
  },
  userAvaliation: {
    fontFamily: "SquadaOne_400Regular",
    textAlign: "left",
    color: "white",
    fontSize: 20,
    marginTop: 5,
    marginBottom: 15,
    zIndex: 10,
  },
});
