import React from "react";
import Containerc from "../components/Containerc";
import vector from "../components/assets/formLogin.png";
import { Box, HStack, Text } from "native-base";
import Inputc from "../components/Inputc";
import Buttonc from "../components/Buttonc";

const Login = () => {
  return (
    <Box>
      <Containerc gambar={vector}>
        <Box>
          <Text marginTop={8} marginBottom={5} fontSize={"lg"}>
            Login
          </Text>
          <Inputc placeholder="Email" />
          <Inputc placeholder="Password" />

          <Buttonc color="red" name="Login" />
        </Box>
        <HStack mt={5} alignItems="center">
          <Text>New users ?</Text>
          <Text style={{ color: "#B82020" }}> Register</Text>
        </HStack>
      </Containerc>
    </Box>
  );
};

export default Login;
