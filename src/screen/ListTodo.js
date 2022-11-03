import * as React from "react";
import {
  Box,
  Center,
  CheckIcon,
  HStack,
  Image,
  Input,
  ScrollView,
  Select,
  Text,
} from "native-base";
import profile from "../components/assets/pp.png";
import Inputc from "../components/Inputc";
// const [service, setService] = React.useState("");

const ListTodo = () => {
  return (
    <ScrollView w="full" mt="10" padding="5">
      <Center>
        <HStack marginBottom={10}>
          <Box>
            <Text bold fontSize="xl" w="64">
              Hi Aziz gans
            </Text>
            <Text color="red.400">3000 List</Text>
          </Box>
          <Image source={profile} resizeMode="contain" alt="profile" />
        </HStack>
        <Inputc placeholder="Search List...." />
        <HStack alignItems={"center"}>
          <Input
            size="md"
            placeholder="Chose date"
            paddingRight={3}
            mt={2}
            marginRight={2}
            width={24}
          />
          <Select
            // selectedValue={service}
            width={24}
            // minWidth="200"

            accessibilityLabel="Category"
            placeholder="Category"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            // onValueChange={(itemValue) => setService(itemValue)}
            marginRight={2}
          >
            <Select.Item label="UX Research" value="ux" />
            <Select.Item label="Web Development" value="web" />
            <Select.Item label="Cross Platform Development" value="cross" />
            <Select.Item label="UI Designing" value="ui" />
            <Select.Item label="Backend Development" value="backend" />
          </Select>
          <Select
            // selectedValue={service}
            width={24}
            accessibilityLabel="Status"
            placeholder="Status"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            // onValueChange={(itemValue) => setService(itemValue)}
          >
            <Select.Item label="UX Research" value="ux" />
            <Select.Item label="Web Development" value="web" />
            <Select.Item label="Cross Platform Development" value="cross" />
            <Select.Item label="UI Designing" value="ui" />
            <Select.Item label="Backend Development" value="backend" />
          </Select>
        </HStack>
      </Center>
    </ScrollView>
  );
};

export default ListTodo;
