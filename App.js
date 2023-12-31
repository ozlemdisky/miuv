import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import HomePage from "./screens/HomePage";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailScreen from "./screens/Detail";
import GameScreen from "./screens/Game";
import useFonts from './constans/fonts';



const Stack = createNativeStackNavigator();

export default function App() {

  const [isready, setIsready] = useState(false);


  const loadApp = async () => {
    try {
      await useFonts();
      

    }
    catch (e) {
      console.warn(e);
    }
  };

  useEffect(() => {
    loadApp();
  }, []);
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Detail" component={DetailScreen} />
          <Stack.Screen name="Game" component={GameScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#A5C3FF rgba(165, 195, 255, 0.90)",
  },
});
