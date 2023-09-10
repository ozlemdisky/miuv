import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
//  import { data } from "../constans/data";

const Animal = ({ data }) => {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#A5C3FF rgba(165, 195, 255, 0.90)" }}
    >
      <View style={styles.container}>
        <View>
          <Text>{data.name}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Animal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A5C3FF rgba(165, 195, 255, 0.90)",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#fff",
    width: 284,
    height: 185,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginBottom: 24,
    borderRadius: 25,
    marginLeft: 68,
  },
});
