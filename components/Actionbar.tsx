import React, { useContext } from "react";
import { Button, Flex, HStack, Select, Wrap, WrapItem } from "@chakra-ui/react";
import Months from "../models/Months";
import Currency from "../models/Currency";
import { AppContext } from "../pages/_app";

type ActionbarProps = {};
const Actionbar: React.FC<ActionbarProps> = (props) => {
  const months = Object.values(Months);
  const currencies = Object.values(Currency);
  const { dispatch } = useContext(AppContext);
  return (
    <Wrap spacing="24px" my={7}>
      <WrapItem>
        <Select
          width="400px"
          variant="filled"
          bgColor="gray.300"
          onChange={(e) =>
            dispatch({ type: "changeMonth", payload: e.target.value })
          }
        >
          {months.map((mon) => (
            <option value={mon} key={mon}>{mon}</option>
          ))}
        </Select>
      </WrapItem>
      <WrapItem>
        <Select 
        width="200px"
         variant="filled" 
         bgColor="gray.300"
         onChange={(e) =>
          dispatch({ type: "changeCurrency", payload: e.target.value })
        }
         >
           <option disabled>Change currency</option>
          {currencies.map((curr) => (
            <option value={curr} key={curr}>{curr}</option>
          ))}
        </Select>
      </WrapItem>
      <WrapItem>
        <Button variant="solid" colorScheme="blue">Add</Button>
      </WrapItem>
    </Wrap>
  );
};
export default Actionbar;
/**
 * 
 * onChange={(e) =>
              dispatch({
                type: "CHANGE_MONTH",
                payload: { month: e.target.value },
              })
            }
 */
