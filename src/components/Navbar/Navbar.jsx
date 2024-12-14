import React, { useContext, useState } from "react";
import { IoMdKey } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import SidebarContext from "../../Context/SidebarConext/SidebarContext";
const Navbar = () => {
  const { OpenSide, setOpenSide } = useContext(SidebarContext);
  const [UserDorpDpwn, setUserDorpDpwn] = useState(false);
  const handleClick = () => {
    setUserDorpDpwn(!UserDorpDpwn);
  };
  const handleSidebar = () => {
    setOpenSide(!OpenSide);
  };
  return (
    <div>
      <nav className="h-[80px] z-40 fixed top-0 left-0 right-0 dark:bg-slate-700 bg-zinc-100 shadow-md px-5 md:px-20 flex items-center justify-between">
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
                <li className="hover:bg-blue-500 flex items-center space-x-1 hover:text-white py-2 px-3">
                  <MdLogout className="text-xl" />
                  <div>Log out</div>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="flex items-center space-x-6">
          <h1 className="dark:text-white text-black">Balace :{20} BDT</h1>
          <div className="w-20 h-20">
            <img src={`logo.png`} alt="" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
