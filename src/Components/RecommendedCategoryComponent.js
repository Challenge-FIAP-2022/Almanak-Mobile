import React from "react";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const RecommendedCategoryComponent = ({ icon, categoryName }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.container}
      onPress={() =>
        navigation.navigate("StackPart", {
          screen: "List",
          params: { game: categoryName },
        })
      }
    >
      <View style={styles.textAndIcon}>
        <MaterialCommunityIcons
          name={icon}
          size={32}
          color="#FFF"
          style={styles.icon}
        />
        <Text style={styles.text}>{categoryName}</Text>
      </View>
      <MaterialIcons
        name="keyboard-arrow-right"
        size={35}
        color="#FFF"
        style={styles.icon}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 2,
    borderColor: "#296D98",
    height: 50,
  },
  text: {
    fontFamily: "SquadaOne_400Regular",
    fontSize: 20,
    color: "#FFF",
    paddingStart: 20,
  },
  textAndIcon: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    alignSelf: "center",
    paddingStart: 20,
  },
});
