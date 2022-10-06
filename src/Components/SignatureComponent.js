import React from "react";
import { StyleSheet, Text, View, Pressable, Alert } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

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
    width: RFValue(220),
    height: RFValue(420),
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 10,
    marginHorizontal: RFValue(10),
  },
  titleContainer: {
    flex: 0.25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFF00",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    
  },
  title: {
    fontFamily: "PressStart2P_400Regular",
    color: "#0E2333",
    fontSize: RFValue(22),
    alignSelf: "center",
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#FFFF00",
    marginTop: RFValue(20),
    width: RFValue(150),
    height: RFValue(40),
    alignSelf: "center",
    marginBottom: RFValue(20),
    borderWidth: 2,
    borderColor: "#0E2333",
  },
  textButton: {
    fontFamily: "PressStart2P_400Regular",
    color: "#0E2333",
    fontSize: RFValue(11),
    marginTop: RFValue(5),
    textAlign: "center",
    lineHeight: RFValue(16),
  },
  text: {
    fontFamily: "Rubik_400Regular",
    fontSize: RFValue(16),
    color: "#FFFFFF",
    paddingHorizontal: RFValue(20),
    marginTop: RFValue(20),
    height: RFValue(200),
    width: "100%",
  },
  line: {
    backgroundColor: "#FFFF00",
    width: "90%",
    height: RFValue(2),
    alignSelf: "center",
    marginTop: "auto",
    marginBottom: RFValue(20),
  },
  containerBody: {
    backgroundColor: "#3792CB",
    flex: 1,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
});
