import React from "react";
import { StyleSheet, Text, View, Pressable, Alert } from "react-native";

export const SignaturesComponent = ({ name, desc, value }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{name}</Text>
      </View>
      <View style={styles.containerBody}>
        <Text style={styles.text}>{desc}</Text>
        <View style={styles.line} />
        <Text style={styles.title}>R$ {value}</Text>
        <Pressable
          style={styles.button}
          onPress={() => Alert.alert("Plano escolhido com sucesso")}
        >
          <Text style={styles.textButton}>Escolher Plano</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 220,
    height: 440,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 10,
    marginRight: 20,
  },
  titleContainer: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFF00",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontFamily: "PressStart2P_400Regular",
    color: "#0E2333",
    fontSize: 24,
    alignSelf: "center",
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#3939",
    marginTop: 20,
    width: 150,
    height: 40,
    alignSelf: "center",
    marginBottom: 50,
  },
  textButton: {
    fontFamily: "PressStart2P_400Regular",
    color: "#FFFF00",
    fontSize: 13,
    marginTop: 5,
    textAlign: "center",
    lineHeight: 17,
  },
  text: {
    fontFamily: "Rubik_400Regular",
    fontSize: 18,
    color: "#FFFFFF",
    padding: 20,
  },
  line: {
    backgroundColor: "#FFFF00",
    width: "90%",
    height: 2,
    alignSelf: "center",
    marginTop: "auto",
    marginBottom: 20,
  },
  containerBody: {
    backgroundColor: "#3792CB",
    flex: 1,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
});
