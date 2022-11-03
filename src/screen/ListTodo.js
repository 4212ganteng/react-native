import { Center, HStack, Image, Text } from "native-base";
import React from "react";

const ListTodo = () => {
  return (
    <Center>
      <Image
        size={150}
        borderRadius={100}
        source={{
          uri: "https://wallpaperaccess.com/full/317501.jpg",
        }}
        alt="Alternate Text"
      />
    </Center>
  );
};

export default ListTodo;
