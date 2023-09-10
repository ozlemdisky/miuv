import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Animal from "../components/Animal";
import { data } from "../constans/data";

// var randomProperty = function (obj, num) {
//   var keys = Object.keys(obj);
//   const shuffled = [...keys].sort(() => 0.5 - Math.random());
//   const res = shuffled.slice(0, num);
//   for (let index = 0; index < res.length; index++) {
//     const element = obj[res[index]];
//     console.log(element);
//   }
//   // return obj.map((item, index) => {
//   //   console.log(obj[index]);
//   // });

//   // return obj[keys[ keys.length * Math.random() << 0]];
// };

const DetailScreen = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#A5C3FF rgba(165, 195, 255, 0.90)" }}
    >
      {data.map((item, index) => (
        //  [0,1,2,3]
        <Animal key={index} data={item} />
      ))}
    </SafeAreaView>
  );
};

export default DetailScreen;
