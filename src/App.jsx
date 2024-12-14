import { useContext, useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import SidebarContext from "./Context/SidebarConext/SidebarContext";
import useAxiosPublic from "./Hook/useAxiosPublic";
import SignIn from "./components/SignIn/SignIn";

const App = () => {
  const axios = useAxiosPublic();
  const { OpenSide } = useContext(SidebarContext);
  const [user, setUser] = useState(null);  
  const token = localStorage.getItem("token"); 

  useEffect(() => {
    const authenticateUser = async () => {
      if (token) {
       setUser(token);
      }
    };
    
    authenticateUser();
  }, [token, axios]);

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <>
      {
        user ? (
          <div className="py-10 overflow-x-hidden">
            <Navbar onLogout={logout} />
            <Sidebar />
            <div className={`pt-16 ${OpenSide ? "md:pl-0 duration-300" : "md:pl-72 duration-300"}`}>
              <Outlet />
            </div>
          </div>
        ) : (
          <SignIn />
        )
      }
    </>
  );
};

export default App;
