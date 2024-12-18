import React from "react";
import Chart from "../Chart/Chart";
import { FaArrowTrendUp, FaUser } from "react-icons/fa6";
import { FaAddressCard, FaFilePdf, FaServer } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoPricetags } from "react-icons/io5";
const AdminDashboard = () => {
  return (
    <div>
      <div className="">
        <Chart />
      </div>
      <div className="px-5 grid grid-cols-2 text-white md:grid-cols-4 gap-4">
        <Link to="/admin/recharge">
          <div className="cursor-pointer rounded-md px-6 py-5 md:py-10 dark:bg-slate-700 bg-white">
            <div className="text-2xl p-3 w-[50px] rounded-md text-blue-600 text-center bg-blue-200">
              <h2 className="">
                <FaArrowTrendUp />
              </h2>
            </div>
            <br />
            <h1 className="md:text-xl">Recharge</h1>
          </div>
        </Link>

        <Link to="/admin/priceList">
          <div className="cursor-pointer rounded-md px-6 py-5 md:py-10 dark:bg-slate-700 bg-white">
            <div className="text-2xl p-3 w-[50px] rounded-md text-slate-600 text-center bg-slate-200">
              <h2 className="">
                <IoPricetags />
              </h2>
            </div>
            <br />
            <h1 className="md:text-xl">Price List</h1>
          </div>
        </Link>
        <Link to="/admin/AllUsers">
          <div className="cursor-pointer rounded-md px-6 py-5 md:py-10 dark:bg-slate-700 bg-white">
            <div className="text-2xl p-3 w-[50px] rounded-md text-yellow-600 text-center bg-yellow-200">
              <h2 className="">
                <FaUser />
              </h2>
            </div>
            <br />
            <h1 className="md:text-xl">All Users</h1>
          </div>
        </Link>
        <Link
          to="/admin/serverCopy"
          className="cursor-pointer rounded-md px-6 py-5 md:py-10 dark:bg-slate-700 bg-white"
        >
          <div className="text-2xl p-3 w-[50px] rounded-md text-pink-600 text-center bg-pink-200">
            <h2 className="">
              <FaServer />
            </h2>
          </div>
          <br />
          <h1 className="md:text-xl">Server copy</h1>
        </Link>
        <Link
          to="/admin/signCopy"
          className="cursor-pointer rounded-md px-6 py-5 md:py-10 dark:bg-slate-700 bg-white"
        >
          <div className="text-2xl p-3 w-[50px] rounded-md text-purple-600 text-center bg-purple-200">
            <h2 className="">
              <FaServer />
            </h2>
          </div>
          <br />
          <h1 className="md:text-xl">Sign copy</h1>
        </Link>
        <Link to="/Admin/AddressToNid">
          <div className="cursor-pointer rounded-md px-6 py-5 md:py-10 dark:bg-slate-700 bg-white">
            <div className="text-2xl p-3 w-[50px] rounded-md text-red-600 text-center bg-red-200">
              <h2 className="">
                <FaAddressCard />
              </h2>
            </div>
            <br />
            <h1 className="md:text-xl">Address To Nid</h1>
          </div>
        </Link>
        <Link
          to="/admin/NidUserPasswordSet"
          className="cursor-pointer rounded-md px-6 py-5 md:py-10 dark:bg-slate-700 bg-white"
        >
          <div className="text-2xl p-3 w-[50px] rounded-md text-purple-600 text-center bg-purple-200">
            <h2 className="">
              <FaServer />
            </h2>
          </div>
          <br />
          <h1 className="md:text-xl">Nid User Password Set</h1>
        </Link>
        <Link to="/admin/idPdf">
          <div className="cursor-pointer rounded-md px-6 py-5 md:py-10 dark:bg-slate-700 bg-white">
            <div className="text-2xl p-3 w-[50px] rounded-md text-lime-600 text-center bg-lime-200">
              <h2 className="">
                <FaFilePdf />
              </h2>
            </div>
            <br />
            <h1 className="md:text-xl">ID Pdf</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
