import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Button } from "react-native";

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Button
        title="Sua conta"
        onPress={() => navigation.navigate("UserScreen")}
      />
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
