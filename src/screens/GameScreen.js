import { useRef, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  ScrollView,
} from "react-native";
import RatingComponent from "../Components/RatingComponent";
import { Dimensions } from "react-native";
import AccordionComponent from "../Components/AccordionComponent";
import CommentComponent from "../Components/CommentComponent";

export default function GameScreen() {
  const scrollRef = useRef(null);
  const windowWidth = Dimensions.get("window").width;
  const [active, setActive] = useState(1);

  return (
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

      <View style={styles.container}>
        <View style={styles.line} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            margin: 20,
          }}
        >
          <View>
            <Pressable
              style={active == 1 ? styles.buttonActive : styles.button}
              onPress={() => (
                scrollRef.current.scrollTo({ x: windowWidth * 0 }), setActive(1)
              )}
            >
              <Text
                style={[
                  styles.textButton,
                  { color: active == 1 ? "#0E2433" : "#FFFF00" },
                ]}
              >
                1
              </Text>
            </Pressable>
            <Text
              style={[
                styles.text,
                { color: active === 1 ? "#FFFF00" : "#3792CB" },
              ]}
            >
              Sobre
            </Text>
          </View>
          <View>
            <Pressable
              style={active == 2 ? styles.buttonActive : styles.button}
              onPress={() => (
                scrollRef.current.scrollTo({ x: windowWidth * 1 }), setActive(2)
              )}
            >
              <Text
                style={[
                  styles.textButton,
                  { color: active == 2 ? "#0E2433" : "#FFFF00" },
                ]}
              >
                2
              </Text>
            </Pressable>
            <Text
              style={[
                styles.text,
                { color: active === 2 ? "#FFFF00" : "#3792CB" },
              ]}
            >
              Regras
            </Text>
          </View>
          <View>
            <Pressable
              style={active == 3 ? styles.buttonActive : styles.button}
              onPress={() => (
                scrollRef.current.scrollTo({ x: windowWidth * 3 }), setActive(3)
              )}
            >
              <Text
                style={[
                  styles.textButton,
                  { color: active == 3 ? "#0E2433" : "#FFFF00" },
                ]}
              >
                3
              </Text>
            </Pressable>
            <Text
              style={[
                styles.text,
                { color: active === 3 ? "#FFFF00" : "#3792CB" },
              ]}
            >
              Reviews
            </Text>
          </View>
        </View>

        <ScrollView
          horizontal={true}
          contentContainerStyle={{
            width: windowWidth * 3,
            // display: "flex",
            flexDirection: "row",
            // overflow: "hidden",
          }}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={200}
          decelerationRate="fast"
          pagingEnabled
          ref={scrollRef}
          onScroll={(event) => {
            const scrolling = event.nativeEvent.contentOffset.x;
            if (scrolling < windowWidth) {
              setActive(1);
            } else if (
              scrolling >= windowWidth &&
              scrolling < windowWidth * 2
            ) {
              setActive(2);
            } else if (scrolling >= windowWidth * 2) {
              setActive(3);
            }
          }}
          nestedScrollEnabled={true}
        >
          <View style={[styles.carousel, { overflow: "scroll" }]}>
            <View style={styles.informacoes}>
              <Text style={styles.textTitle}>Categoria:</Text>
              <Text style={styles.textInfo}>Cartas</Text>
              <Text style={styles.textTitle}>Itens:</Text>
              <Text style={styles.textInfo}>Baralho</Text>
              <Text style={styles.textTitle}>Quantidade de Jogadores:</Text>
              <Text style={styles.textInfo}>2 - 6 jogadores</Text>
              <Text style={styles.textTitle}>Avaliação do Jogo:</Text>
              <View style={styles.avaliation}>
                <Text style={styles.textAvaliation}>
                  4,5
                  <RatingComponent score={5} color={"#FFF"} />
                </Text>
              </View>
            </View>
          </View>

          <View style={[styles.carousel, { overflow: "scroll" }]}>
            <View
              style={{
                width: "100%",
                paddingHorizontal: 40,
              }}
            >
              <AccordionComponent
                title={"Regra Principal"}
                text={
                  "Utiliza-se dois baralhos de 52 cartas, com os coringas. Podem haver de dois a seis jogadores. O jogo com dois ou três participantes tem contagem individual. Quando quatro ou seis pessoas participam, duas duplas são formadas, devendo sentar em posições alternadas."
                }
                icon={"volume-high"}
                iconColor={"#FFFF00"}
                // func={clica}
              />
              <AccordionComponent title={"Opcional"} text={"Opcionais"} />
              <AccordionComponent title={"Extras"} text={"Extras"} />
            </View>
          </View>

          <View style={[styles.carousel, { overflow: "scroll" }]}>
            <ScrollView nestedScrollEnabled={true}>
              <View style={{ marginHorizontal: 40,}}>
                <CommentComponent />
                <CommentComponent />
                <CommentComponent />
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
      <MaterialCommunityIcons
        name={"message-question-outline"}
        size={56}
        color="#FFFF00"
        style={{ position: "absolute", bottom: "10%", right: "10%" }}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imgBackground: {
    flex: 1,
    resizeMode: "contain",
  },
  imgGameBackground: {
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
  informacoes: {
    marginHorizontal: 40,
  },
  textTitle: {
    fontFamily: "SquadaOne_400Regular",
    textAlign: "left",
    color: "#FFFF00",
    fontSize: 26,
    marginTop: 12,
  },
  textInfo: {
    fontFamily: "SquadaOne_400Regular",
    textAlign: "left",
    color: "white",
    fontSize: 24,
    marginVertical: 5,
    zIndex: 10,
  },
  userAvaliation: {
    fontFamily: "SquadaOne_400Regular",
    textAlign: "left",
    color: "white",
    fontSize: 20,
    marginTop: 5,
    marginBottom: 15,
    zIndex: 10,
  },
  textAvaliation: {
    fontFamily: "SquadaOne_400Regular",
    // textAlign: "left",
    color: "white",
    fontSize: 24,
  },
  avaliation: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "flex-start",
  },
  container: {
    width: "100%",
    elevation: 10,
  },
  carousel: {
    width: "33.33%",
  },
  line: {
    backgroundColor: "#FFFF00",
    width: "60%",
    height: 3,
    alignSelf: "center",
    position: "absolute",
    top: 43,
  },
  buttonActive: {
    width: 50,
    height: 50,
    backgroundColor: "#FFFF00",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: "#0E2433",
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#FFFF00",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
  },
  textButton: {
    fontFamily: "PressStart2P_400Regular",
    color: "#FFFF00",
    fontSize: 20,
  },
  text: {
    textAlign: "center",
    color: "#FFFF00",
    marginTop: 7,
    fontFamily: "Rubik_400Regular",
  },
});
