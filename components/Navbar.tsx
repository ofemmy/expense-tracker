import { Avatar, Select, Center, Flex, Heading, Spacer } from "@chakra-ui/react";
type NavbarProps ={}
const Navbar:React.FC<NavbarProps> = (props)=> {
    return (
        <Flex bgColor="white" py="4" px="5" color="blue.700">
            <Center ml="90px">
                <Heading size="xl">WISE</Heading>
            </Center>
            <Spacer/>
            <Center>
              <Avatar name="Test User"/>  
            </Center>
        </Flex>
    )
}
export default Navbar;