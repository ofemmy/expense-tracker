import React from "react";
import Link from "next/link";
import { Box, Center, VStack } from "@chakra-ui/react";

type SidebarProps = {};
const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <Box width="300px" bgColor="blue.700" minH="100vh" color="white">
      <VStack pt="210px">
        <Center
          fontWeight="semibold"
          fontSize="md"
          letterSpacing="wide"
          textTransform="uppercase"
          py={4}
          width="100%"
        >
          <Link href="/">
          <a>Transactions</a>
          </Link>
        </Center>
        <Center
          fontWeight="semibold"
          fontSize="md"
          letterSpacing="wide"
          textTransform="uppercase"
          py={4}
          width="100%"
        >
         <Link href="/income">
          <a>Income</a>
          </Link>
        </Center>
        <Center
          fontWeight="semibold"
          fontSize="md"
          letterSpacing="wide"
          textTransform="uppercase"
          py={4}
          width="100%"
        >
         <Link href="/expense">
          <a>Expenses</a>
          </Link>
        </Center>
      </VStack>
    </Box>
  );
};

export default Sidebar;
