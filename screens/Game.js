import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { data } from "../constans/data";
import { Audio } from "expo-av";
import Grasst from "../components/design/grasst";




const playSound = async (soundSource) => {
  const soundObject = new Audio.Sound();
  try {
    await soundObject.loadAsync(soundSource);
    await soundObject.playAsync();
  } catch (error) {
    console.error("Ses çalma hatası:", error);
  }
};

const PlayCard = ({ item, onPress, isCorrect, isPressed }) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor:
              isPressed !== null ? (isCorrect ? "green" : "red") : "white",
          },
        ]}
        onPress={() => {
          onPress(isCorrect);
          playSound(item.sound);
        }}
        disabled={isPressed !== null}
      >
        <Image source={item.image} style={{ width: 100, height: 100 }} />
      </TouchableOpacity>
    </View>
  );
};

const GameScreen = () => {
  const [shuffledData, setShuffledData] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const shuffleData = (count) => {
    const shuffled = [...data];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    const randomIndex = Math.floor(Math.random() * count);
    setCorrectAnswer(randomIndex);

    return shuffled.slice(0, count);
  };

  useEffect(() => {
    const initialData = shuffleData(4);
    setShuffledData(initialData);
  }, []);

  const handleButtonPress = (isCorrect) => {
    if (isCorrect) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    }
  };

  const handleNextButtonPress = () => {
    setSelectedAnswer(null);
    const newData = shuffleData(4);
    setShuffledData(newData);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#D4E2FE",
      }}
    >
      <View style={{ justifyContent: "center", marginTop: 100, flex: 1 }}>
        <FlatList
          data={shuffledData}
          keyExtractor={(item) => item.image}
          renderItem={({ item, index }) => (
            <PlayCard
              item={item}
              onPress={handleButtonPress}
              isCorrect={index === correctAnswer}
              isPressed={selectedAnswer}
            />
          )}
          horizontal={false}
          numColumns={2}
        />
      </View>

      {selectedAnswer !== null && (
        <TouchableOpacity
          style={styles.nextButton}
          onPress={handleNextButtonPress}
        >
          <Text style={{fontFamily: "Gluten_300Light"}}>Yeni Veri Getir</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity
        style={styles.playButton}
        onPress={() => playSound(shuffledData[correctAnswer].sound)}
      >
        <Text style={styles.buttonText }>PLAY</Text>
        <Image
          style={styles.playImage}
          source={require("../images/seses.png")}
        />
      </TouchableOpacity>
      <Grasst style={styles.grass} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 15,
    marginTop: 20,
    marginBottom: 10,
  },

  button: {
    width: 128,
    height: 115,
    borderRadius: 25,
    elevation: 10,
    shadowRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 3,
  },
  nextButton: {
    backgroundColor: "white",
    justifyContent: "center",
    position: "absolute",
    alignItems: "center",
    bottom: 150,
    width: 110,
    height: 50,

    borderRadius: 20,
    zIndex: 2,
  },
  playButton: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5,
    position: "absolute",
    bottom: 50,
    backgroundColor: "#fff",
    borderRadius: 25,
    width: 300,
    height: 70,
    zIndex: 1,
   

  },
  playImage: {
    width: 90,
    height: 90,
    alignSelf: "stretch",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 20,
  },
  buttonText: {
    fontFamily:  "Gluten_500Medium",
    fontSize: 40,
    fontWeight: "bold",
    color: "black",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    paddingLeft: 50,
    
  },
  buluts: {},
});

export default GameScreen;
