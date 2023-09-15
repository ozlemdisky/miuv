import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";
import { Audio } from "expo-av";
import { useState, useEffect } from "react";

const { width } = Dimensions.get("window");

const Animal = ({ data }) => {
  const [sound, setSound] = useState();

  useEffect(() => {
    // Load the sound when the component mounts
    async function loadSound() {
      const { sound } = await Audio.Sound.createAsync(data.sound);
      setSound(sound);
    }

    loadSound();
  }, [data.sound]);

  const playSound = async () => {
    if (sound) {
      await sound.replayAsync(); // Play the loaded sound
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: data.renk }]}
        onPress={playSound}
      >
        <Image style={styles.image} source={data.image} resizeMode="center" />

        <Text style={styles.buttonText}>{data.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Animal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginLeft: 25,
    width: width - 25,
    height: 200,
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#fff",
    width: 284,
    height: 140,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    marginBottom: 24,
    position: "relative",
  },
  image: {
    height: 120,
    width: 120,
    zIndex: 2,
    position: "absolute",
    left: -50,
  },
  buttonText: {
    fontFamily: "Gluten_600SemiBold",
    fontSize: 40,
    color: "white",
  },
});
