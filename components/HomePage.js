import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Grass from "../constans/design/grass";
import Grassmini from "../constans/design/grassmini";
import GrassminiTwo from "../constans/design/grassminiTwo";
import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";





const HomePage = () => {
  return (
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

      <TouchableOpacity style={styles.button}>
        <Text style={[styles.buttonText]}>
          Hayvanlar Dünyası
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonTwo}>
        <Text style={[styles.buttonText]}>
          Eşleştirme Oyunu
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
 
  grassContainer: {
    position: "absolute",
    bottom: 0,
    zIndex: 1,
  },
  grassMini: {
    position: "absolute",
    bottom: 287,
    left: 57,
  },
  grassMiniContainer: {
    position: "absolute",
    right: 50,
    bottom: 260,
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
  },
  text:{
    position: "absolute",
    top: 70,
    fontSize: 45,
    color: "#fff"
  },
  text2:{
    position: "absolute",
    top: 140,
    fontSize: 30,
    color:"#fff",

  }
});

export default HomePage;
