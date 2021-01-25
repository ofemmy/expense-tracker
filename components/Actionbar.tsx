import React from "react";
import { Flex, HStack, Select, Wrap, WrapItem } from "@chakra-ui/react";

type ActionbarProps = {};
const Actionbar: React.FC<ActionbarProps> = (props) => {
  return (
    <Wrap spacing="24px" my={7}>
      <WrapItem>
        <Select width="400px" variant="filled" bgColor="gray.300">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </WrapItem>
      <WrapItem>
        <Select width="150px" variant="filled" bgColor="gray.300">
          <option value="option1" disabled>Currency</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </WrapItem>
    </Wrap>
  );
};
export default Actionbar;
