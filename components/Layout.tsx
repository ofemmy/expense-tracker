import Sidebar from "./Sidebar";
import {MenuItem} from "../components/Sidebar";
import HomeSVG from "./svgs/HomeSVG";
import ScaleSVG from "./svgs/ScaleSVG";
import CardSVG from "./svgs/CardSVG";
import DocumentSVG from "./svgs/DocumentSVG";
type LayoutProps = {};
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const links:MenuItem[] = [
    {href:"/",name:"Home",icon:HomeSVG },
    {href:"/income",name:"Balances",icon:ScaleSVG},
    {href:"/expense",name:"Expenses",icon:CardSVG},
    {href:"/report",name:"Reports",icon:DocumentSVG}

  ]
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64">
          <Sidebar links={links}/>
        </div>
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
};
export default Layout;

/**
 * 
 * 
 * <>
     <Navbar/>
     <Flex>
     <Sidebar/>
     <Box margin={5} flex={1}>
      {children}
     </Box>
    </Flex> 
     
    </>
 * 
 */
