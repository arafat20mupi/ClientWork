import { useContext } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import SidebarContext from "./Context/SidebarConext/SidebarContext";
import { Outlet } from "react-router-dom";

const App = () => {
  const { OpenSide, setOpenSide } = useContext(SidebarContext);

  return (
    <div className="py-10 overflow-x-hidden">
      <Navbar />
      <Sidebar />
      <div
        className={`pt-16 ${
          OpenSide ? "md:pl-0 duration-300" : "md:pl-72 duration-300"
        }`}
      >
        <Outlet />
        {/* <OrdersPage /> */}
      </div>
    </div>
  );
};

export default App;
