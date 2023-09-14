import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Button,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { data } from "../constans/data";
import { Audio } from "expo-av";

const playSound = async (soundSource) => {
  // ses dosyasını yüklmen ve çalma
  const soundObject = new Audio.Sound();
  try {
    await soundObject.loadAsync(soundSource); // ses dosyasının yolunu doğru şekilde ayarlama
    await soundObject.playAsync();
  } catch (error) {
    console.error("Ses çalma hatası:", error);
  }
};
const PlayCard = ({ item, onPress, isCorrect, isPressed }) => {
  return (
    <View style={styles.butonContainer}>
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
          playSound(item.sound); // butona tıklandığında sesi çal
        }}
        disabled={isPressed !== null} // buton tekrar tıklanamaz
      >
        <Text style={{ color: isPressed !== null ? "white" : "black" }}>
          {item.image}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const GameScreen = () => {
  const [shuffledData, setShuffledData] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  // data'yı karıştırma ve doğru cevabı ayarlama işlemi
  const shuffleData = (count) => {
    const shuffled = [...data];

    // Fisher-Yates Shuffle
    //  Bu algoritma, bir dizinin veya listesinin elemanlarını rastgele karıştırmak için kullanılır.
    // Kodunuzda, geriye doğru bir döngü içinde elemanları yer değiştirerek shuffled dizisini karıştırıyor.
    // Bu algoritma, her bir elemanın karıştırılmış dizide herhangi bir pozisyona eşit bir olasılıkla gelmesini sağlar,
    //  bu nedenle elemanların sırasını rastgele hale getirmek için adil bir yöntemdir.
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    // rastgele doğru cevabı ayarla
    const randomIndex = Math.floor(Math.random() * count);

    setCorrectAnswer(randomIndex);

    return shuffled.slice(0, count);
  };

  // ekran açıldığında otomatik olarak veriyi al
  useEffect(() => {
    const initialData = shuffleData(4);
    setShuffledData(initialData);
  }, []);

  // butona tıklandığında doğru veya yanlış olduğunu kontrol etme işlemi
  const handleButtonPress = (isCorrect) => {
    if (isCorrect) {
      // doğru butona tıklandığında yeşil yap ve yeni soru hazırla
      setSelectedAnswer(true);
    } else {
      // yanlış butona tıklandığında kırmızı yap
      setSelectedAnswer(false);
    }
  };

  // yeni veriyi getirme işlemi
  const handleNextButtonPress = () => {
    setSelectedAnswer(null);
    const newData = shuffleData(4);
    setShuffledData(newData);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#D4E2FE" }}>
      <View>
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
        // <Button title="Yeni Veri Getir" onPress={handleNextButtonPress} />
        <TouchableOpacity>Yeni veri ver</TouchableOpacity>
      )}
      <TouchableOpacity
        style={styles.playButton}
        onPress={() => playSound(shuffledData[correctAnswer].sound)}
      >
        <Text style={styles.buttonText}>Ses Oynatma</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
  butonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 128,
    height: 115,
    borderRadius: 25,
    elevation: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  playButton: {
    flex: 1,
    
    paddingVertical: 5,
    position: "absolute",
    bottom: 20,
    alignItem: "center",
    backgroundColor: "#fff",
    borderRadius: 25,
    width: 300,
    height: 70,
  },
});

export default GameScreen;
