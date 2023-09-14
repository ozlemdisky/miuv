import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Audio } from "expo-av";

const Oyunsal = ({ data }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={{ color: "#000" }}>{data.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#fff",
    width: 128,
    height: 115,
    borderRadius: 25,
    elevation: 4,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Oyunsal;
