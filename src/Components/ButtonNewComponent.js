import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


export default function ButtonNewComponent({ focused }) {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: focused ? "#0E2433" : "#ffff00" },
        { borderColor: focused ? "#ffff00" : "#0E2433" },
      ]}
    >
      <Ionicons name="add" size={45} color={focused ? "#ffff00" : "#0E2433"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: RFValue(60),
    height: RFValue(60),
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 5,
    marginBottom: RFValue(30),
  },
});
