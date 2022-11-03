import { Box, Center, Flex, HStack, StatusBar, Text } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";
import Buttonc from "../components/Buttonc";
import Containerc from "../components/Containerc";
import Inputc from "../components/Inputc";

const AddCategory = () => {
  return (
    <Box>
      <StatusBar />
      <Text fontSize={"4xl"} fontWeight="bold" m={(2, 10)}>
        Add Category
      </Text>
      <Center mb={20}>
        <Inputc placeholder="Name" />
        <Buttonc color="red" name="Add Category" />
      </Center>
      <Text fontSize={"4xl"} fontWeight="bold" m={(2, 10)}>
        List Category
      </Text>
      <Center>
        <HStack alignItems="center" space={3}>
          <TouchableOpacity
            style={{
              backgroundColor: "blue",
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 10,
            }}
          >
            <Text color={"white"}>Study</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Study</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Study</Text>
          </TouchableOpacity>
        </HStack>
      </Center>
    </Box>
  );
};

export default AddCategory;
