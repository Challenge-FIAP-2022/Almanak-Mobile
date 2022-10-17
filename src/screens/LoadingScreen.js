import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Text,
} from "react-native";
 
export default function App() {
  return (
    <ImageBackground
      source={require("../../assets/bg.png")}
      style={styles.imgBackground}
      blurRadius={3}
    >
      <View style={styles.container}>
        <TouchableOpacity>
          <Image source={require("../../assets/logo.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#45B6FE" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  imgBackground: {
    flex: 1,
    resizeMode: "cover",
  },
  loading: {
    flex: 1,
    alignItems: "center",
  },
});
