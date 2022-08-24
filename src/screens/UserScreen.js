import { Button, StyleSheet, View } from "react-native";
import { useAuth } from "../contexts/Auth";

export default function UserScreen() {
  const {signOut} = useAuth;
  return (
    <View style={styles.container}>
      <Button title="Sair" onPress={signOut} />
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
