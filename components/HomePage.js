import { View, Text } from "react-native";
import React from "react";
import Grass from "../constans/design/grass";
import { StyleSheet } from "react-native";

const HomePage = () => {
  return (
    <View style={styles.container}>
    <Text style={{ color: "blue" }}>hellööö basliyoruzzz</Text>
    <View style={styles.grassContainer}>
      <Grass />
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
  
},
});

export default HomePage;
