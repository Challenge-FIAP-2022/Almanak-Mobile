import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
//import { Button, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  TextInput,
  Pressable,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { api } from "../services/api";
import * as FileSystem from "expo-file-system";
import {Buffer} from "buffer";
import { Audio } from "expo-av";

export default function RegisterScreen() {
  const navigation = useNavigation();
  const [recording, setRecording] = useState();
  const [recordings, setRecordings] = useState([]);
  const [currentAudio, setCurrentAudio] = useState(0);
  const [audios, setAudios] = useState([]);
  const [message, setMessage] = useState("");

  async function sendAudio() {
    console.log('entrou aqui')
    const formData = new FormData();
    formData.append("file", {
      uri: recordings[currentAudio].file,
      name: "userVoice.wav",
      type: "audio/wav",
    });
    let gameId = 1;
    try{
        console.log('vai enviar requisição')
        let apiResponse = await api.post(`https://almanak.mybluemix.net/api/wa/duvidas/${gameId}`, data=formData, {
                responseType: 'arraybuffer',
                headers: {
                "Content-Type": "multipart/form-data",
            }
        });
        console.log('enviou requisição')
    
        if(apiResponse){
            const bufferData = Buffer.from(apiResponse.data);
            let fileData = await FileSystem.writeAsStringAsync(FileSystem.documentDirectory + `response${currentAudio}.wav`, bufferData.toString('base64'), {
              encoding: 'base64',
            });

            const { sound } = await Audio.Sound.createAsync({uri:FileSystem.documentDirectory + `response${currentAudio}.wav`});

            setAudios([...audios, sound]);

            setCurrentAudio(currentAudio + 1);
        }

        console.log(audios);
        console.log(currentAudio);
    }
    catch(error){
        console.log(error);
        console.error(error.response);
    }
  }
  async function startRecording() {
    try {
      const permission = await Audio.requestPermissionsAsync();

      if (permission.status === "granted") {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true,
        });

        const recording = new Audio.Recording();
        try {
          await recording.prepareToRecordAsync({
            android: {
              extension: ".wav",
              outputFormat: Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_WEBM,
              audioEncoder: Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_VORBIS,
              sampleRate: 44100,
              numberOfChannels: 2,
              bitRate: 128000,
            },
            ios: {
              extension: ".wav",
              audioQuality: Audio.RECORDING_OPTION_IOS_AUDIO_QUALITY_MAX,
              sampleRate: 44100,
              numberOfChannels: 2,
              bitRate: 128000,
              linearPCMBitDepth: 16,
              linearPCMIsBigEndian: false,
              linearPCMIsFloat: false,
            },
          });
          await recording.startAsync();
          // You are now recording!
        } catch (error) {
          // An error occurred!
        }

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

console.log(updatedRecordings);

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
            Recording {index + 1} - {recordingLine.duration}
          </Text>
          <Button
            style={styles.button}
            onPress={() => playSound(recordingLine)}
            title="Play"
          ></Button>
          <Button
            style={styles.button}
            onPress={() => Sharing.shareAsync(recordingLine.file)}
            title="Share"
          ></Button>
          <Button
            style={styles.button}
            onPress={() => sendAudio()}
            title="Teste"
          ></Button>
        </View>
      );
    });
}

  return ( <View style={styles.container}>
    <Text>{message}</Text>
    <Button
      title={recording ? "Stop Recording" : "Start Recording"}
      onPress={recording ? stopRecording : startRecording}
    />
    {getRecordingLines()}
    <StatusBar style="auto" />
  </View>);
}


//const styles = StyleSheet.create({});

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    row: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    fill: {
      flex: 1,
      margin: 16,
    },
    button: {
      margin: 16,
    },
  });
