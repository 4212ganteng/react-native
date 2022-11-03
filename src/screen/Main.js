import { Box, Button, Center, HStack, Image } from "native-base";
import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import gambar from "../components/assets/home.png";
import Buttonc from "../components/Buttonc";

export const Main = () => {
  return (
    <Center mt={"32"}>
      <Image size="2xl" resizeMode="cover" source={gambar} alt={"Login.png"} />

      <HStack alignItems="center">
        <Text style={{ color: "white", marginEnd: 10, fontSize: 35 }}>
          Ways
        </Text>
        <Text style={{ color: "#B82020", fontSize: 35 }}>To</Text>
        <Text style={{ color: "#FF5555", fontSize: 35 }}>Do</Text>
      </HStack>

      <Text style={{ marginTop: 40 }}>
        Write your activity and finish your activity.{" "}
      </Text>

      <Text>Fast, Simple and Easy to Use</Text>
      <Box mt={24}>
        <Buttonc color="red" name="hai" />
        <Buttonc color="blue" name="hai" />
      </Box>

      {/* <TouchableOpacity style={styles.red}>
        <Text>ok</Text>
      </TouchableOpacity> */}
    </Center>
  );
};
