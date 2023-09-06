import { View, Text } from "react-native";
import React from "react";
import Grass from "../constans/design/grass";
import Grassmini from "../constans/design/grassmini";
import GrassminiTwo from "../constans/design/grassminiTwo";
import { Image } from "react-native";
import { StyleSheet } from "react-native";

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "blue" }}>hellööö basliyoruzzz</Text>
      <View style={styles.grassContainer }>
        <Grass />
      </View>
      <View style={styles.grassMini}>
      <Grassmini />
      </View>
      <View style={styles.grassMiniContainer}>
        <GrassminiTwo/>
      </View>
      <View style={styles.image}>
      <Image source={require('../images/lionn.png')} />
      </View>
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
    zIndex: 2,
  },
  grassMini: {
    position: "absolute",
    bottom: 287,
    left: 120,
  },
  grassMiniContainer: {
    position: "absolute",
    right: 116 ,
    bottom: 260,
  },
  image:{
    zIndex:1,
    bottom: 35,
    height:400,
    width: 400,



  }
});

export default HomePage;
