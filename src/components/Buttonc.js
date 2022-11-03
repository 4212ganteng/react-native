import { Text, Button } from "native-base";

import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const Buttonc = ({ name, color }) => {
  return (
    <TouchableOpacity style={color === "red" ? styles.red : styles.blue}>
      <Text>{name}</Text>
    </TouchableOpacity>
  );
};

export default Buttonc;

const styles = StyleSheet.create({
  red: {
    marginTop: 20,
    backgroundColor: "#FF5555",
    color: "white",
    height: 40,
    paddingHorizontal: 110,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  blue: {
    marginTop: 20,
    backgroundColor: "#e0e0d1",
    color: "white",

    height: 40,
    paddingHorizontal: 110,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
});
