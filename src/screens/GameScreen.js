
import { useEffect, useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  ScrollView,
  TextInput,
  Dimensions,
} from "react-native";
import RatingComponent from "../Components/RatingComponent";
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: '1',
    title: 'Teste 1',
    text: 'Texto do teste 1',
    text2: 'Teste 1930257835903284',
    //image: require('../../assets/logo.png'),
  },
  {
    key: '2',
    title: 'Teste 2',
    text: 'Texto do teste 2',
  },
  {
    key: '3',
    title: 'Teste 3',
    text: 'Texto do teste 3',
  },
];


export default function GameScreen() {
  const [showHome, setShowHome] = useState(false);

  function renderSlides({ item }){
    return(
      <View style={{flex:1}}>
        <Text>{item.title}</Text>
        <Text>{item.text}</Text>
        <Text>{item.text2}</Text>
        {/*<Image source={item.image} />*/}
      </View>
    )
  }

  if(showHome){
    return <Text>Teste entrou na home</Text>
  } else {
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

        <AppIntroSlider
          renderItem={renderSlides}
          data={slides}
          activeDotStyle={{
            backgroundColor: '#FFFF00',
            width: 30,
          }}
        />

        

        {/* <ScrollView
          horizontal={true}
          contentContainerStyle={{ width: '${100}%' }}
          // showsHorizontalScrollIndicator={false}
          scrollEventThrottle={100}
          decelerationRate="fast"
          pagingEnabled
        > */}

          {/* <View style={styles.carousel}>
            <View style={styles.informacoes}>
              <Text style={styles.textTitle}>Categoria:</Text>
              <Text style={styles.textInfo}>Cartas</Text>
              <Text style={styles.textTitle}>Itens:</Text>
              <Text style={styles.textInfo}>Baralho</Text>
              <Text style={styles.textTitle}>Quantidade de Jogadores:</Text>
              <Text style={styles.textInfo}>2 - 6 jogadores</Text>
              <Text style={styles.textTitle}>Avaliação do Jogo:</Text>
              <Text style={styles.textInfo}>4,5 */}
                {/* <RatingComponent 
                  score ={5}
                /> */}

              {/* </Text>
            </View>
          </View> */}

        {/* </ScrollView> */}


      </ImageBackground>
  



    );
  }
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
    informacoes: {
      margin: 20,
    },
    textTitle: {
      fontFamily: "SquadaOne_400Regular",
      textAlign: "left",
      paddingLeft: 20,
      color: "#FFFF00",
      fontSize: 28,
      marginVertical: 5,
    },
    textInfo: {
      fontFamily: "SquadaOne_400Regular",
      textAlign: "left",
      paddingLeft: 20,
      color: "white",
      fontSize: 24,
      marginVertical: 5,
    },
    // carousel: {
    //   flex: 1,
    //   backgroundColor: "white",
    // },
    // cardCarousel: { 
    //   backgroundColor: "red",
    // },
    // image: {
    //   height: 250,
    //   borderRadius: 8,
    // },
});