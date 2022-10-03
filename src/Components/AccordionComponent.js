import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";

export default function AccordionComponent({ title, icon, text, iconColor }) {
  const [ativo, setAtivo] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable
        style={[
          styles.faixa,
          {
            backgroundColor: ativo ? "#296D98" : "#0E2433",
            borderWidth: ativo ? undefined : 2,
            borderColor: ativo ? undefined : "#296D98",
          },
        ]}
        onPress={() => setAtivo(!ativo)}
      >
        <Text style={styles.textTitle}>{title}</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingEnd: 10,
          }}
        >
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={28}
              color={iconColor}
              style={styles.icon}
            />
          )}

          <MaterialCommunityIcons
            name={ativo ? "menu-up" : "menu-down"}
            size={36}
            color="#FFF"
            style={styles.icon}
          />
        </View>
      </Pressable>
      <View style={[styles.rule, { display: ativo ? undefined : "none" }]}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 10,
  },
  textTitle: {
    fontFamily: "SquadaOne_400Regular",
    color: "#FFF",
    fontSize: 28,
    paddingLeft: 20,
  },
  text: {
    fontFamily: "Rubik_400Regular",
    color: "#FFF",
    fontSize: 16,
    padding: 10,
  },
  faixa: {
    flexDirection: "row",
    backgroundColor: "#296D98",
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "space-between",
    padding: 5,
  },
  rule: {
    borderWidth: 2,
    borderColor: "#296D98",
    borderRadius: 10,
  },
});
