import { Image } from "@rneui/base";
import React from "react";
import {
  ImageBackground,
  View,
  StyleSheet,
  Pressable,
  Text,
} from "react-native";
//import { Rating } from "react-native-ratings";
import RatingComponent from "./RatingComponent";


export const ListGameComponent = ({category, gameName, urlImg}) => {
  return (
    // <ImageBackground
    //   style={styles.imgBg}
    //   source={{
    //     uri: urlImg,
    //   }}
    //   imageStyle={{ borderRadius: 10 }}
    // >
    <Pressable style={styles.card}>
      <View style={styles.container}>
        <View>
          <Image 
            style={styles.img}
            source={{
              uri: urlImg,
            }}
          />
        </View>
        
        <View style={styles.text}>
          <Text
            style={{
              fontFamily: "SquadaOne_400Regular",
              fontSize: 18,
              height: 20,
              color: "#FFF",
            }}
          >
            {category}
          </Text>
          <Text
            style={{
              fontFamily: "SquadaOne_400Regular",
              fontSize: 24,
              height: 26,
              color: "#FFF",
            }}
          >
            {gameName}
          </Text>


        </View>



      </View>


      <View style={styles.estrelas}>
        <RatingComponent style={styles.rating} />

      </View>

    </Pressable>
    // </ImageBackground>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 75,
    height: 75,
    resizeMode: "contain",
    borderRadius: 10,
    marginStart: 10,
    marginTop: 45,
  },
  card: {
    flexDirection: "column",
    justifyContent: "space-between",
    // borderTopWidth: 2,
    borderWidth: 2,
    borderColor: "#296D98",
    height: 100,
    width: 320,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: "rgba(28, 73, 102, 0.2)",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginBottom: "auto",
    backgroundColor: "rgba(15, 146, 203, 0.15)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: 320,
    height: 50,
  },
  text:{
    flex: 1,    
    marginLeft: 15,
  },
  estrelas: {
    paddingVertical: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "auto",
    alignItems: "center",
    marginLeft: 140,
    padding: 25,

  
  },
  
});
