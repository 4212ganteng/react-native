import { Box, Center, Select, StatusBar, Text, TextArea } from "native-base";
import React from "react";
import Buttonc from "../components/Buttonc";
import Inputc from "../components/Inputc";

const Addlist = () => {
  return (
    <Box>
      <StatusBar />
      <Text fontSize={"4xl"} fontWeight="bold" m={(2, 10)}>
        Add List
      </Text>
      <Center>
        <Inputc placeholder="Name" />
        <Select
          // selectedValue={service}

          minWidth="300"
          accessibilityLabel="Category"
          placeholder="Category"
          _selectedItem={{
            bg: "teal.600",
          }}
          mt={1}
          mb={3}
          // onValueChange={(itemValue) => setService(itemValue)}
        >
          <Select.Item label="UX Research" value="ux" />
          <Select.Item label="Web Development" value="web" />
          <Select.Item label="Cross Platform Development" value="cross" />
          <Select.Item label="UI Designing" value="ui" />
          <Select.Item label="Backend Development" value="backend" />
        </Select>
        <Inputc placeholder="Chose Date" />
        <TextArea
          h={20}
          placeholder="Description"
          w="75%"
          maxW="300"
          p={2}
          mt={2}
          mb={10}
        />

        <Buttonc color="red" name="Add List" />
      </Center>
    </Box>
  );
};

export default Addlist;
