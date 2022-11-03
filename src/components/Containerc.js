import { Center, Image } from "native-base";
import React from "react";

const Containerc = ({ gambar, children }) => {
  return (
    <Center mt={"32"}>
      <Image size="2xl" resizeMode="cover" source={gambar} alt={"Login.png"} />
      {children}
    </Center>
  );
};

export default Containerc;
