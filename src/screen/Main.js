import { Box, Button, Center, HStack, Image } from "native-base";
import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import gambar from "../components/assets/home.png";
import Buttonc from "../components/Buttonc";

export const Main = ({ navigation }) => {
  return (
    <Center mt={"32"}>
      <Image size="2xl" resizeMode="cover" source={gambar} alt={"Login.png"} />

      <Text style={{ marginTop: 40 }}>
        Write your activity and finish your activity.{" "}
      </Text>

      <Text>Fast, Simple and Easy to Use</Text>
      <Box mt={24}>
        <Buttonc
          color="red"
          name="Login"
          onPress={() => navigation.navigate("Login")}
        />

        <Buttonc
          color="blue"
          name="Register"
          onPress={() => navigation.navigate("Register")}
        />
      </Box>

      {/* <TouchableOpacity style={styles.red}>
        <Text>ok</Text>
      </TouchableOpacity> */}
    </Center>
  );
};
