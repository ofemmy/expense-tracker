import { useRouter } from "next/dist/client/router";
import React from "react";
type HeaderProps = {};
const Header: React.FC<HeaderProps> = (props) => {
  const router = useRouter();
  const pageTitle =
    router.pathname == "/" ? "Home" : formatRouteName(router.pathname);
  const actionButtons = ["Add New Item"];
  return (
    <div className="border-t border-gray-200 px-4 py-4 flex items-center justify-between px-6 lg:px-8 bg-white">
      <div className="flex-1 min-w-0">
        <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">
          {pageTitle}
        </h1>
      </div>
      <div className="mt-1 flex sm:mt-0 sm:ml-4">
        {actionButtons.map((btn) => (
          <button
          key={btn}
            type="button"
            className="order-0 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-1 sm:ml-3"
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};
function formatRouteName(routeName: string) {
  //route name is like "/expense"
  const route = routeName.split("/")[1];
  return route.charAt(0).toUpperCase() + route.slice(1);
}
export default Header;
