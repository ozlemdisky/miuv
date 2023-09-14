import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Animal from "../components/Animal";
import { data } from "../constans/data";

const DetailScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,

        backgroundColor: "#D4E2FE",
      }}
    >
      <View style={styles.container}>
        {/* {data.map((item, index) => (
          //  [0,1,2,3]
          <Animal key={index} data={item} />
        ))} */}
        <FlatList
          data={data}
          renderItem={({ item, index }) => <Animal key={index} data={item} />}
          style={{}}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 15,
  },
});

export default DetailScreen;
