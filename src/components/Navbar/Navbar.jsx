import  { useContext, useState } from "react";
import { IoMdKey } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import SidebarContext from "../../Context/SidebarConext/SidebarContext";
import useAuth from "../../Hook/useAuth";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { logout } = useAuth();
  const { OpenSide, setOpenSide } = useContext(SidebarContext);
  const [UserDorpDpwn, setUserDorpDpwn] = useState(false);

  const navigate = useNavigate(); 
  const handleClick = () => {
    setUserDorpDpwn(!UserDorpDpwn);
  };
  const handleSidebar = () => {
    setOpenSide(!OpenSide);
  };
  const handleLogout = () => {
    logout(); 
    navigate("/signIn"); 
  };
  return (
    <div>
      <nav className="h-[80px] z-40 fixed top-0 left-0 right-0 bg-zinc-100 dark:bg-slate-700  shadow-md px-5 md:px-20 flex items-center justify-between">
        <div className="flex items-center space-x-2 cursor-pointer">
          <div onClick={handleSidebar}>
            <GiHamburgerMenu className="text-2xl md:mr-5" />
          </div>
          <h1 className="dark:text-white text-black md:text-xl">
            {"Abdullah"}
          </h1>
          <div className="w-8" onClick={handleClick}>
            <FaUserCircle className="md:text-2xl" />
          </div>
          {UserDorpDpwn && (
            <div className={`fixed top-16  z-50`}>
              <ul className="py-2 px-1 shadow-xl space-y-2 ring-1 dark:ring-gray-600 ring-gray-200 rounded dark:bg-slate-700 bg-white">
                <li className="hover:bg-blue-500 flex items-center space-x-1 hover:text-white py-2 px-3">
                  <IoMdKey className="text-xl" />
                  <div>Change Password</div>
                </li>
                <button onClick={handleLogout} className="hover:bg-blue-500 w-full flex items-center space-x-1 hover:text-white py-2 px-3">
                  <MdLogout className="text-xl" />
                  <div>Log out</div>
                </button>
              </ul>
            </div>
          )}
        </div>
        <div className="flex items-center space-x-6">
          <h1 className="dark:text-white text-black">Balace :{20}K BDT</h1>
          <div className="w-20 h-20">
            <img src={`logo.png`} alt="" />
          </div>
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" className="theme-controller" value="light" />

            {/* sun icon */}
            <svg
              className="swap-off h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
