import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Grass from "../constans/design/grass";
import Grassmini from "../constans/design/grassmini";
import GrassminiTwo from "../constans/design/grassminiTwo";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const HomePage = () => {
  const navigation = useNavigation();



  return (
    <SafeAreaView style={{backgroundColor: "#A5C3FF rgba(165, 195, 255, 0.90)", flex:1}}>
      <View style={styles.container}>
        <Text style={styles.text}>Merhaba!</Text>
        <Text style={styles.text2}>Dünyamıza Hoşgeldin</Text>
        <View style={styles.grassContainer}>
          <Grass />
        </View>
        <View style={styles.grassMini}>
          <Grassmini />
        </View>
        <View style={styles.grassMiniContainer}>
          <GrassminiTwo />
        </View>

        <Image style={styles.image} source={require("../images/lionn.png")} />

        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Detail')}>
          <Text style={[styles.buttonText]}>Hayvanlar Dünyası</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonTwo} onPress={()=> navigation.navigate('Game')}>
          <Text style={[styles.buttonText]}>Eşleştirme Oyunu</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#A5C3FF rgba(165, 195, 255, 0.90)",
  },

  grassContainer: {
    position: "absolute",
    bottom: 0,
    zIndex: 1,
  },
  grassMini: {
    position: "absolute",
    bottom: 228,
    left: 255,
  },
  grassMiniContainer: {
    position: "absolute",
    right: 260,
    bottom: 225,
  },
  button: {
    backgroundColor: "#FFF",
    width: 219,
    height: 66,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 3,
    borderRadius: 25,
    position: "absolute",
    bottom: 174,
  },
  buttonTwo: {
    backgroundColor: "#FFF",
    width: 219,
    height: 66,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 3,
    borderRadius: 25,
    position: "absolute",
    bottom: 74,
  },
  buttonText: {
    fontSize: 23,
    color: "#3F4A5F",
  },
  text: {
    position: "absolute",
    top: 30,
    fontSize: 45,
    color: "#fff",
  },
  text2: {
    position: "absolute",
    top: 90,
    fontSize: 30,
    color: "#fff",
    zIndex: 3,
  },
  image: {
    top: -30,
    height: 430,
    width: 420,
  },
});

export default HomePage;
