import { useEffect, useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  ScrollView,
  TextInput,
} from "react-native";

export default function GameScreen() {
    return(
        <ImageBackground
          source={require("../../assets/bg.png")}
          blurRadius={3}
          style={styles.imgBackground}
        >
          <ImageBackground
            style={styles.imgGameBackground}
            source={{
              uri: "https://images.unsplash.com/photo-1501003878151-d3cb87799705?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            }}
            blurRadius={5}
          >
            <Text style={styles.gameTitle}>JOGO X</Text>
          </ImageBackground>

          


            



        </ImageBackground>


    )
}


const styles = StyleSheet.create({
    imgBackground: {
      flex: 1,
      resizeMode: "contain",
    },
    imgGameBackground: {
      marginTop: 50,
      height: 170,
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
    },
    gameTitle: {
      fontFamily: "PressStart2P_400Regular",
      textAlign: "center",
      color: "white",
      fontSize: 20,
      backgroundColor: "#1C4966",
      borderRadius: 10,
      paddingTop: 15,
      paddingBottom: 5,
      paddingHorizontal: 15,
      
    },
});