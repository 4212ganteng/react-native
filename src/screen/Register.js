import React, { useContext, useState } from "react";
import Containerc from "../components/Containerc";
import vector from "../components/assets/formLogin.png";
import { Box, HStack, ScrollView, Text } from "native-base";
import Inputc from "../components/Inputc";
import Buttonc from "../components/Buttonc";
import { TouchableOpacity } from "react-native-gesture-handler";
import { UserContext } from "../../context/UserContext";
import { showMessage } from "react-native-flash-message";
import { API } from "../config/Api";
import axios from "axios";

const Register = ({ navigation }) => {
  const [dataRegister, setRegister] = useState({
    firstName: "",
    email: "",
    password: "",
  });

  // create handle change
  function handleChange(name, value) {
    setRegister({
      ...dataRegister,
      [name]: value,
    });
    console.log("ini data register", dataRegister);
  }
  // crete handle submit nya dulu cuy 😎
  const handleSubmit = async () => {
    try {
      console.log("test");
      if (dataRegister.firstName || dataRegister.email === "") {
        // cek isi input register nya dulu cuy 😏
        return showMessage({
          message: "Registration Failed!",
          description: " Email / First name was not null",
          type: "danger",
        });
      }

      console.log(dataRegister);
      //  let push data to api guyss 🥰
      const response = await axios.post("/auth/register", dataRegister);
      console.log("test handle");

      console.log("ini response", response);
      showMessage({
        message: "Registration was Success",
        description: "calm down wel be redirect to Login Page",
        type: "success",
      });
      // navigation.navigate("Login");
    } catch (error) {
      console.log(error.response.data.message);
      showMessage({
        message: "Register gagal!",
        description: `${error.response.data.message}`,
        type: "danger",
      });
    }
  };

  // const handleSubmit = async () => {
  //   try {
  //     const res = await axios.post(
  //       "https://api.kontenbase.com/query/api/v1/8267e433-c809-421b-a72b-cf45e3a884eb/auth/register"
  //     );

  //     console.log("data response", res);
  //   } catch (error) {
  //     console.log(error.response.data.message);
  //   }
  // };

  return (
    <Box>
      <ScrollView w="full" mt="5" padding="5">
        <Containerc gambar={vector}>
          <Box>
            <Text marginTop={8} marginBottom={5} fontSize={"lg"}>
              Register
            </Text>
            <Inputc
              placeholder="Email"
              onChangeText={(value) => handleChange("email", value)}
              value={dataRegister?.email}
            />
            <Inputc
              onChangeText={(value) => handleChange("firstName", value)}
              placeholder="Name"
              value={dataRegister?.firstName}
            />
            <Inputc
              placeholder="Password"
              onChangeText={(value) => handleChange("password", value)}
              value={dataRegister?.password}
            />

            {/* <Buttonc
              color="red"
              name="Register"
              handlePress={(e) => handleSubmit}
            /> */}
            <TouchableOpacity onPress={handleSubmit}>
              <Text>Register</Text>
            </TouchableOpacity>
          </Box>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <HStack mt={5} alignItems="center">
              <Text>Joined us before ?</Text>
              <Text style={{ color: "#B82020" }}> Login</Text>
            </HStack>
          </TouchableOpacity>
        </Containerc>
      </ScrollView>
    </Box>
  );
};

export default Register;
