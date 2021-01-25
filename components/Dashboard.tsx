import { type } from "os";
import React from "react";
import {
  Box,
  Stat,
  StatGroup,
  StatLabel,
  StatNumber,
  Heading,
  HStack,
} from "@chakra-ui/react";
type DashboardProp = {};
const Dashboard: React.FC<DashboardProp> = (props) => {
  return (
    <Box minH="250px" bgColor="white" boxShadow="md" rounded="md" p={10}>
      <Heading mb={4}>January</Heading>
      <HStack>
        <Box width="70%">
          <StatGroup>
            <Stat>
              <StatLabel> Total Income</StatLabel>
              <StatNumber>£0.00</StatNumber>
            </Stat>
            <Stat>
              <StatLabel>Total Expense</StatLabel>
              <StatNumber>£0.00</StatNumber>
            </Stat>
          </StatGroup>
        </Box>
        <Box>
            Testing
        </Box>
      </HStack>
    </Box>
  );
};

export default Dashboard;
