import { useRef, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
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
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { api } from "../services/api";
import { useEffect } from "react";
import LoadingScreen from "./LoadingScreen";

export default function GameScreen({ route }) {
  const navigation = useNavigation();
  const scrollRef = useRef(null);
  const windowWidth = Dimensions.get("window").width;
  const [active, setActive] = useState(1);
  const [gameData, setGameData] = useState();
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function getComments() {
    return api.get(`/avaliacao/jogo/${route.params?.game}`);
  }

  function getGame() {
    return api.get(`/jogo/${route.params?.game}`);
  }

  function ratingCompleted(rating) {
    return rating;
  }

  useEffect(() => {
    Promise.all([getGame(), getComments()]).then(function (results) {
      const game = results[0].data;
      const comments = results[1].data;

      setGameData(game);

      setComments(comments);

      setIsLoading(false);
    });
  }, []);

  if (isLoading === true) {
    return <LoadingScreen />;
  }

  var regras = "";
  gameData.regras.forEach(function (regra) {
    regras = regras.concat(regra.desc);
    regras = regras.replace(".", ". ");
  });
  console.log(regras)

  return (
    <ImageBackground
      source={require("../../assets/bg.png")}
      blurRadius={3}
      style={styles.imgBackground}
    >
      <ImageBackground
        style={styles.imgGameBackground}
        source={{
          uri: gameData.imagem,
        }}
        blurRadius={5}
      >
        <Text style={styles.gameTitle}>{gameData.name}</Text>
      </ImageBackground>

      <View style={styles.container}>
        <View style={styles.line} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            margin: RFValue(20),
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
            flexDirection: "row",
          }}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={200}
          decelerationRate="fast"
          pagingEnabled
          ref={scrollRef}
          onScroll={(event) => {
            const scrolling = event.nativeEvent.contentOffset.x;
            let roundedScroll = Math.round(scrolling);
            if (roundedScroll < windowWidth) {
              setActive(1);
            } else if (
              roundedScroll >= windowWidth &&
              roundedScroll < windowWidth * 2
            ) {
              setActive(2);
            } else if (roundedScroll >= windowWidth * 2) {
              setActive(3);
            }
          }}
          nestedScrollEnabled={true}
        >
          <View style={[styles.carousel, { overflow: "scroll" }]}>
            <View style={styles.informacoes}>
              <Text style={styles.textTitle}>Categoria:</Text>
              <Text style={styles.textInfo}>{gameData.categorias[0].name}</Text>
              <Text style={styles.textTitle}>Itens:</Text>
              <Text style={styles.textInfo}>
                {gameData.itens[0]?.item.name}
              </Text>
              <Text style={styles.textTitle}>Quantidade de Jogadores:</Text>
              <Text style={styles.textInfo}>
                {gameData.maxJogadores ? gameData.maxJogadores : "indefinido"}
              </Text>
              <Text style={styles.textTitle}>Avaliação do Jogo:</Text>
              <View style={styles.avaliation}>
                <Text
                  style={[
                    styles.textAvaliation,
                    { marginTop: RFValue(15), marginRight: RFValue(10) },
                  ]}
                >
                  {ratingCompleted(gameData.score)}
                </Text>
                <RatingComponent score={gameData.score} color={"#FFF"} />
              </View>
            </View>
          </View>

          <View style={[styles.carousel, { overflow: "scroll" }]}>
            <View
              style={{
                width: "100%",
                paddingHorizontal: RFValue(40),
              }}
            >
              <AccordionComponent
                title={gameData.regras[0].nome}
                text={regras}
              />
              <AccordionComponent title={"Extras"} text={"Extras"} />
            </View>
          </View>

          <View style={[styles.carousel, { overflow: "scroll" }]}>
            <ScrollView nestedScrollEnabled={true}>
              <View style={{ marginHorizontal: RFValue(40) }}>
                {comments.map((item) => (
                  <CommentComponent
                    user={item.usuarioDTO.nome}
                    score={item.nota}
                    text={item.desc}
                    key={item.id}
                  />
                ))}
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
      <MaterialCommunityIcons
        name={"message-question-outline"}
        size={56}
        color="#FFFF00"
        onPress={() =>
          navigation.navigate("StackGame", {
            screen: "Chat",
            params: {
              game: route.params?.game,
            },
          })
        }
        style={{
          position: "absolute",
          bottom: RFPercentage(8),
          right: RFPercentage(3),
        }}
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
    height: RFValue(170),
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  gameTitle: {
    fontFamily: "PressStart2P_400Regular",
    textAlign: "center",
    color: "white",
    fontSize: RFValue(20),
    backgroundColor: "#1C4966",
    borderRadius: 10,
    paddingTop: RFValue(15),
    paddingBottom: RFValue(5),
    paddingHorizontal: RFValue(15),
  },
  informacoes: {
    marginHorizontal: RFValue(40),
  },
  textTitle: {
    fontFamily: "SquadaOne_400Regular",
    textAlign: "left",
    color: "#FFFF00",
    fontSize: RFValue(26),
    marginTop: RFValue(12),
  },
  textInfo: {
    fontFamily: "SquadaOne_400Regular",
    textAlign: "left",
    color: "white",
    fontSize: RFValue(24),
    marginVertical: RFValue(5),
    zIndex: 10,
  },
  userAvaliation: {
    fontFamily: "SquadaOne_400Regular",
    textAlign: "left",
    color: "white",
    fontSize: RFValue(20),
    marginTop: RFValue(5),
    marginBottom: RFValue(15),
    zIndex: 10,
  },
  textAvaliation: {
    fontFamily: "SquadaOne_400Regular",
    color: "white",
    fontSize: RFValue(24),
  },
  avaliation: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "flex-start",
  },
  container: {
    width: "100%",
    elevation: 10,
    marginBottom: RFValue(330),
  },
  carousel: {
    width: "33.33%",
  },
  line: {
    backgroundColor: "#FFFF00",
    width: "60%",
    height: RFValue(3),
    alignSelf: "center",
    position: "absolute",
    top: RFValue(43),
  },
  buttonActive: {
    width: RFValue(50),
    height: RFValue(50),
    backgroundColor: "#FFFF00",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: RFValue(10),
  },
  button: {
    width: RFValue(50),
    height: RFValue(50),
    backgroundColor: "#0E2433",
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#FFFF00",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: RFValue(10),
  },
  textButton: {
    fontFamily: "PressStart2P_400Regular",
    color: "#FFFF00",
    fontSize: RFValue(20),
  },
  text: {
    textAlign: "center",
    color: "#FFFF00",
    marginTop: RFValue(7),
    fontFamily: "Rubik_400Regular",
  },
});
