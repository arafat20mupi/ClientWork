import { useContext } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import SidebarContext from "./Context/SidebarConext/SidebarContext";
import SignIn from "./components/SignIn/SignIn";
import useAuth from "./Hook/useAuth";
import StickyIcon from "./StricyIcons/StricyIcons";

const App = () => {
  const { OpenSide } = useContext(SidebarContext);
  const { user } = useAuth();

  const isAdmin = user?.user?.role === "admin";

  return (
    <>


      {user ? (
        isAdmin ? (
          <div className="py-10 text-white overflow-x-hidden">
            <Navbar />
            <Sidebar />
            <div
              className={`pt-16 ${OpenSide ? "md:pl-0 duration-300" : "md:pl-72 duration-300"}`}
            >
              <Outlet />
            </div>
          </div>
        ) : (
          // Show normal user content
          <div className="py-10 text-white overflow-x-hidden">
            <Navbar />
            <Sidebar />
            <div
              className={`pt-16 ${OpenSide ? "md:pl-0 duration-300" : "md:pl-72 duration-300"}`}
            >
              <Outlet />
            </div>
          </div>
        )
      ) : (
        // If user is not authenticated, show the SignIn page
        <SignIn />
      )}
      <StickyIcon />
    </>
  );
};

export default App;
