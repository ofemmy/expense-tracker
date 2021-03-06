import Footer from "./Footer";
import Sidebar from "./Sidebar";

type LayoutProps = {};
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen w-screen flex overflow-hidden bg-gray-100">
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64">
          <Sidebar />
        </div>
      </div>
      <div className="flex-1 overflow-auto focus:outline-none" tabIndex={0}>
        {children}
      </div>
    </div>
  );
};
export default Layout;
