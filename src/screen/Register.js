import React from "react";
import Containerc from "../components/Containerc";
import vector from "../components/assets/formLogin.png";
import { Box, HStack, ScrollView, Text } from "native-base";
import Inputc from "../components/Inputc";
import Buttonc from "../components/Buttonc";

const Register = () => {
  return (
    <Box>
      <ScrollView w="full" mt="5" padding="5">
        <Containerc gambar={vector}>
          <Box>
            <Text marginTop={8} marginBottom={5} fontSize={"lg"}>
              Register
            </Text>
            <Inputc placeholder="Email" />
            <Inputc placeholder="Name" />
            <Inputc placeholder="Password" />

            <Buttonc color="red" name="Login" />
          </Box>
          <HStack mt={5} alignItems="center">
            <Text>Joined us before ?</Text>
            <Text style={{ color: "#B82020" }}> Login</Text>
          </HStack>
        </Containerc>
      </ScrollView>
    </Box>
  );
};

export default Register;
