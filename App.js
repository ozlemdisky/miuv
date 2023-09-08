import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomePage from "./components/HomePage";
import useFonts from "./assets/fonts";

export default function App() {
  const loadApp = async () => {
    try {
      await useFonts();
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <HomePage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#A5C3FF rgba(165, 195, 255, 0.90)",
  },
});
