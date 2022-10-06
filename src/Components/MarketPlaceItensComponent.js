import { Image } from "@rneui/base";
import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default function MarketPlaceItensComponent  ({ gameName, urlImg }) {

  const preco = (Math.floor(Math.random() * 200) + 10)/10;
  return (
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
              fontSize: RFValue(24),
              height: RFValue(26),
              color: "#FFF",
            }}
          >
            {gameName}
          </Text>
        </View>
      </View>

      <View style={styles.estrelas}>
        <Text
            style={{
              fontFamily: "SquadaOne_400Regular",
              fontSize: RFValue(25),
              height: RFValue(30),
              marginTop: RFValue(10),
              color: "#FFF",
            }}
          > 
           Preço: R${(preco % 10 == 0) ? preco + ".00" : preco + "0"}   
          </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  img: {
    width: RFValue(75),
    height: RFValue(75),
    resizeMode: "cover",
    borderRadius: RFValue(10),
    marginStart: RFValue(10),
    marginTop: RFValue(45),
  },
  card: {
    flexDirection: "column",
    justifyContent: "space-between",
    borderWidth: 2,
    borderColor: "#296D98",
    height: RFValue(100),
    width: RFValue(310),
    borderRadius: 10,
    marginBottom: RFValue(20),
    backgroundColor: "#132E3D",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: RFValue(10),
    marginBottom: "auto",
    backgroundColor: "rgba(15, 146, 203, 0.15)",
    width: RFValue(320),
    height: RFValue(55),
  },
  text: {
    flex: 1,
    marginLeft: RFValue(15),
  },
  estrelas: {
    float: "right",
    height: RFValue(70),
    alignItems: "center",
    paddingTop: RFValue(25),
    marginLeft: RFValue(110),
  },
});
