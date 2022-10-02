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


// import Carousel from "react-native-snap-carousel"

// const sliderWidth = Dimensions.get('window').width
// const itemWidth = sliderWidth * 0.88

// type Props = {
//   item: { imgUrl: string }
//   index: number
// }

// const carouselItems = [
//   {
//     imgUrl: 'https://images.unsplash.com/photo-1501003878151-d3cb87799705?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
//   },
//   {
//     imgUrl: 'https://images.unsplash.com/photo-1617783919141-8417358d4e29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
//   },
//   {
//     imgUrl: 'https://images.unsplash.com/photo-1640461470346-c8b56497850a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
//   }
// ]


// function carouselCardItem({item, index}: Props) {
//   return(
//     <View style={styles.cardCarousel} key={index}>
//       <Image style={styles.image} source={{ url: item.imgUrl }} />
//     </View>
//   )
// }

// export function GameScreen() {
//     return(
//         <ImageBackground
//           source={require("../../assets/bg.png")}
//           blurRadius={3}
//           style={styles.imgBackground}
//         >
//           <ImageBackground
//             style={styles.imgGameBackground}
//             source={{
//               uri: "https://images.unsplash.com/photo-1501003878151-d3cb87799705?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//             }}
//             blurRadius={5}
//           >
//             <Text style={styles.gameTitle}>JOGO X</Text>
//           </ImageBackground>

//           <View style={styles.carousel}>
//             <Carousel
//               data={carouselItems}
//               renderItem={carouselCardItem}
//               sliderWidth={sliderWidth}
//               itemWidth={itemWidth}
//               useScrollView={true}
//             />
//           </View>


//         </ImageBackground>


//     )
// }

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

          <View style={styles.carousel}>
            <View style={styles.informacoes}>
              <Text style={styles.textTitle}>Categoria:</Text>
              <Text style={styles.textInfo}>Cartas</Text>
              <Text style={styles.textTitle}>Itens:</Text>
              <Text style={styles.textInfo}>Baralho</Text>
              <Text style={styles.textTitle}>Quantidade de Jogadores:</Text>
              <Text style={styles.textInfo}>2 - 6 jogadores</Text>
              <Text style={styles.textTitle}>Avaliação do Jogo:</Text>
              <Text style={styles.textInfo}>4,5
                {/* <RatingComponent 
                  score ={5}
                /> */}
              </Text>
            </View>
          </View>


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