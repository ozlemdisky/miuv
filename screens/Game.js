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
import { Audio } from "expo-av"; // Ses çalmak için Expo'nun Audio modülü
import Grasst from "../components/design/grasst";

// Ses çalmak için kullanılacak fonksiyon
const playSound = async (soundSource) => {
  const soundObject = new Audio.Sound();
  try {
    await soundObject.loadAsync(soundSource); // Ses kaynağını yükleme
    await soundObject.playAsync(); // Ses çalma
  } catch (error) {
    console.error("Ses çalma hatası:", error);
  }
};

// Her bir hayvan kartını temsil eden bileşen

const PlayCard = ({ item, onPress, isCorrect, isPressed }) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={[
          styles.button,
          {
            ////
            backgroundColor:
              isPressed !== null ? (isCorrect ? "green" : "red") : "white",
          },
        ]}
        onPress={() => {
          onPress(isCorrect);
          playSound(item.sound); // butona tıklandığında sesi çal
        }}
        disabled={isPressed !== null} // buton tekrar tıklanamaz
      >
        <Image source={item.image} style={{ width: 100, height: 100 }} />
      </TouchableOpacity>
    </View>
  );
};

// Oyun ekranı bileşeni
const GameScreen = () => {
  const [shuffledData, setShuffledData] = useState([]); //setShuffledData, React Hook kullanımı sırasında bir durum değişkenini güncellemek için kullanılan bir işlevdir.
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  // Verileri karıştırmak için kullanılacak fonksiyon
  const shuffleData = (count) => {
    const shuffled = [...data]; // Verileri kopyalama
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Verileri karıştırın
    }

    const randomIndex = Math.floor(Math.random() * count);
    setCorrectAnswer(randomIndex); // Doğru cevabı belirle

    return shuffled.slice(0, count); // İstenen sayıda kart verisi döndür
  };

  // Oyun başladığında verileri karıştır
  useEffect(() => {
    const initialData = shuffleData(4);
    setShuffledData(initialData);
  }, []);

  // Kartlardan birine tıklandığında tetiklenecek fonksiyon

  const handleButtonPress = (isCorrect) => {
    if (isCorrect) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    }
  };

  // Sonraki verileri getirme işlemi
  const handleNextButtonPress = () => {
    setSelectedAnswer(null); // Seçilen cevabı sıfırla
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
          <Text style={{ color: "#2A303A", fontFamily: "Gluten_300Light" }}>
            Yeni Veri Getir
          </Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity
        style={styles.playButton}
        onPress={() => playSound(shuffledData[correctAnswer].sound)}
      >
        <Text style={[styles.buttonText, {}]}>PLAY</Text>
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
    alignItems: "center",
    marginRight: 180,
  },
  buttonText: {
    fontFamily: "Gluten_800ExtraBold",
    fontSize: 40,
    color: "#2A303A",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    paddingLeft: 60,
  },
  buluts: {},
});

export default GameScreen;
