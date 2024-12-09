import React, { useContext } from "react";
import { MdDashboard } from "react-icons/md";
import { BsFillBucketFill } from "react-icons/bs";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { IoMdKey } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import SidebarContext from "../../Context/SidebarConext/SidebarContext";
const Sidebar = () => {
  const { OpenSide, setOpenSide } = useContext(SidebarContext);
  return (
    <div
      className={`duration-300 fixed z-50 top-20 py-10 px-1 h-screen bg-zinc-100 shadow-lg w-1/2 md:w-1/5 ${
        OpenSide ? "-left-0 md:-left-96" : "-left-96 md:-left-0"
      }`}
    >
      <div>
        <ul className="space-y-1">
          <li className="flex items-center space-x-2 hover:bg-blue-500 hover:text-white cursor-pointer px-3 md:px-7 py-3 m-1">
            <div className="p-2 bg-teal-200 rounded-full">
              <MdDashboard className="text-xl text-teal-600" />
            </div>
            <div>Dashboard</div>
          </li>
          <li className="flex items-center space-x-2 hover:bg-blue-500 hover:text-white cursor-pointer px-3 md:px-7 py-3 m-1">
            <div className="p-2 bg-green-200 rounded-full">
              <BsFillBucketFill className="text-xl text-green-600" />
            </div>
            <div>Order</div>
          </li>
          <li className="flex items-center space-x-2 hover:bg-blue-500 hover:text-white cursor-pointer px-3 md:px-7 py-3 m-1">
            <div className="p-2 bg-yellow-200 rounded-full">
              <RiMoneyDollarCircleFill className="text-xl text-yellow-600" />
            </div>
            <div>Recharge</div>
          </li>
          <li className="flex items-center space-x-2 hover:bg-blue-500 hover:text-white cursor-pointer px-3 md:px-7 py-3 m-1">
            <div className="p-2 bg-red-200 rounded-full">
              <FaServer className="text-xl text-red-600" />
            </div>
            <div>Server Copy</div>
          </li>
          <li className="flex items-center space-x-2 hover:bg-blue-500 hover:text-white cursor-pointer px-3 md:px-7 py-3 m-1">
            <div className="p-2 bg-purple-200 rounded-full">
              <FaServer className="text-xl text-purple-600" />
            </div>
            <div>Sign copy to NID PDF</div>
          </li>
          <li className="flex items-center space-x-2 hover:bg-blue-500 hover:text-white cursor-pointer px-3 md:px-7 py-3 m-1">
            <div className="p-2 bg-pink-200 rounded-full">
              <IoMdKey className="text-xl text-pink-600" />
            </div>
            <div>Change Password</div>
          </li>
          <li className="flex items-center space-x-2 hover:bg-blue-500 hover:text-white cursor-pointer px-3 md:px-7 py-3 m-1">
            <div className="p-2 bg-orange-200 rounded-full">
              <MdLogout className="text-xl text-orange-600" />
            </div>
            <div>Logout</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
