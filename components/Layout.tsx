import { Box, Flex } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

type LayoutProps = {

}
const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <>
     <Navbar/>
     <Flex>
     <Sidebar/>
     <Box margin={5} flex={1}>
      {children}
     </Box>
    </Flex> 
     
    </>
  );
}
export default Layout