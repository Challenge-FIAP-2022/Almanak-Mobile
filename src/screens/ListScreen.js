import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text } from "react-native";
import RatingComponent from "../Components/RatingComponent";

export default function ListScreen() {
  //const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Jogos</Text>
      <RatingComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});