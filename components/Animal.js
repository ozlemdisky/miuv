import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";
import { Audio } from "expo-av";
import { useState, useEffect } from "react";

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
        <Image style={styles.image} source={data.image} />

        <Text>{data.name}</Text>
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
    marginLeft: 10,
    width: 284,
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
  },
  image: {
    height: 120,
    width: 120,
    zIndex: 2,
    position: "absolute",
    left: -55,
  },
});
