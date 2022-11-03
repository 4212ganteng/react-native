import React from "react";
import Containerc from "../components/Containerc";
import vector from "../components/assets/formLogin.png";
import { Box, Center, HStack, ScrollView, Text } from "native-base";
import Inputc from "../components/Inputc";
import Buttonc from "../components/Buttonc";
import { TouchableOpacity } from "react-native-gesture-handler";

const Login = ({ navigation }) => {
  return (
    <ScrollView w="full" mt="10" padding="5">
      <Box>
        <Containerc gambar={vector}>
          <Box>
            <Text marginTop={8} marginBottom={5} fontSize={"lg"}>
              Login
            </Text>
            <Inputc placeholder="Email" />
            <Inputc placeholder="Password" />

            <Buttonc
              color="red"
              name="Login"
              onPress={() => navigation.navigate("Profile")}
            />
          </Box>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <HStack mt={5} alignItems="center">
              <Text>New users ?</Text>
              <Text style={{ color: "#B82020" }}> Register</Text>
            </HStack>
          </TouchableOpacity>
        </Containerc>
      </Box>
    </ScrollView>
  );
};

export default Login;
