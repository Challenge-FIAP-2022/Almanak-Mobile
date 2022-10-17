import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View, ImageBackground } from "react-native";
import { Audio } from "expo-av";
import * as FileSystem from "expo-file-system";
import { Buffer } from "buffer";
import { useAuth } from "../contexts/Auth";
import { api } from "../services/api";
import { Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

export default function App({ route }) {
  const [recording, setRecording] = React.useState();
  const [recordings, setRecordings] = React.useState([]);
  const [message, setMessage] = React.useState("");
  const { authData } = useAuth();

  function sendAudio() {
    const formData = new FormData();
    formData.append("file", {
      uri: recordings[0].file,
      name: "UserVoice.wav",
      type: "audio/wav",
    });
    api
      .post(
        `https://almanak.mybluemix.net/api/wa/duvidas/${authData.id}/${route.params?.game}`,
        formData,
        {
          responseType: "arraybuffer",
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then(async function (response) {
        const bufferData = Buffer.from(response.data);
        let fileData = await FileSystem.writeAsStringAsync(
          FileSystem.documentDirectory + "response.wav",
          bufferData.toString("base64"),
          {
            encoding: "base64",
          }
        );
        const { sound } = await Audio.Sound.createAsync({
          uri: FileSystem.documentDirectory + "response.wav",
        });
        console.log("Playing Sound");
        await sound.playAsync();
      })
      .catch(function (error) {
        console.log(error);
        console.error(error.response);
      });
    console.log(formData);
  }

  async function startRecording() {
    try {
      const permission = await Audio.requestPermissionsAsync();

      if (permission.status === "granted") {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true,
        });

        const { recording } = await Audio.Recording.createAsync(
          Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
        );

        setRecording(recording);
      } else {
        setMessage("Please grant permission to app to access microphone");
      }
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  }

  async function stopRecording() {
    setRecording(undefined);
    await recording.stopAndUnloadAsync();

    let updatedRecordings = [...recordings];
    const { sound, status } = await recording.createNewLoadedSoundAsync();
    updatedRecordings.push({
      sound: sound,
      duration: getDurationFormatted(status.durationMillis),
      file: recording.getURI(),
    });

    setRecordings(updatedRecordings);
  }

  function getDurationFormatted(millis) {
    const minutes = millis / 1000 / 60;
    const minutesDisplay = Math.floor(minutes);
    const seconds = Math.round((minutes - minutesDisplay) * 60);
    const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutesDisplay}:${secondsDisplay}`;
  }

  function getRecordingLines() {
    return recordings.map((recordingLine, index) => {
      console.log(typeof recordings[0].file);
      return (
        <View key={index} style={styles.row}>
          <Text style={styles.fill}>
            Dúvida {index + 1} - {recordingLine.duration}
          </Text>
          <Pressable
            style={styles.secondButton}
            onPress={() => recordingLine.sound.replayAsync()}
          >
            <Text style={styles.secondText}>Reproduzir</Text>
          </Pressable>
          <Pressable style={styles.secondButton} onPress={() => sendAudio()}>
            <Text style={styles.secondText}>Enviar</Text>
          </Pressable>
        </View>
      );
    });
  }

  return (
    <ImageBackground
      source={require("../../assets/bg.png")}
      blurRadius={3}
      style={styles.imgBackground}
    >
      <View style={styles.container}>
        <Text>{message}</Text>
        <Pressable
          style={styles.button}
          onPress={recording ? stopRecording : startRecording}
        >
          <MaterialCommunityIcons
            name={recording ? "stop-circle-outline" : "microphone"}
            size={RFValue(36)}
            style={styles.icon}
          />
          <Text style={styles.text}>
            {recording ? "Parar gravação" : "Gravar dúvida"}
          </Text>
        </Pressable>
        {getRecordingLines()}
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imgBackground: {
    flex: 1,
    resizeMode: "contain",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  fill: {
    flex: 1,
    margin: 16,
    color: "#FFF000",
    fontFamily: "SquadaOne_400Regular",
    fontSize: RFValue(20),
  },
  button: {
    backgroundColor: "#45B6FE",
    padding: 10,
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 20,
  },
  secondButton: {
    backgroundColor: "#45B6FE",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginRight: 10,
  },
  icon: {
    color: "#FFFF00",
    alignSelf: "center",
    paddingStart: RFValue(10),
    justifyContent: "space-between",
    marginHorizontal: RFValue(5),
  },
  text: {
    color: "#1C4966",
    fontFamily: "SquadaOne_400Regular",
    fontSize: RFValue(28),
    marginHorizontal: RFValue(20),
  },
  secondText: {
    color: "#1C4966",
    fontFamily: "SquadaOne_400Regular",
    fontSize: RFValue(16),
  },
});
