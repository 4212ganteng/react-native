import React from "react";
import { Input, Stack } from "native-base";

const Inputc = ({ ...ph }) => {
  return (
    <Stack>
      <Input
        width={300}
        size="md"
        style={{ color: "#B82020" }}
        marginBottom={4}
        {...ph}
      />
    </Stack>
  );
};

export default Inputc;
