import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text } from "react-native";

export default function ListScreen() {
  //const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Jogos</Text>
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