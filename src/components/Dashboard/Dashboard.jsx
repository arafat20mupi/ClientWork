import React from "react";
import { FaArrowTrendUp, FaFilePdf } from "react-icons/fa6";
import { FaServer } from "react-icons/fa";
import { RiFileDownloadFill } from "react-icons/ri";
import { IoPricetags } from "react-icons/io5";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="px-5">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Link to="/reacharge">
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
        <div className="cursor-pointer rounded-md px-6 py-5 md:py-10 dark:bg-slate-700 bg-white">
          <div className="text-2xl p-3 w-[50px] rounded-md text-pink-600 text-center bg-pink-200">
            <h2 className="">
              <FaServer />
            </h2>
          </div>
          <br />
          <h1 className="md:text-xl">Server copy</h1>
        </div>
        <Link to="/sign-copy-to-nid-pdf">
          <div className="cursor-pointer rounded-md px-6 py-5 md:py-10 dark:bg-slate-700 bg-white">
            <div className="text-2xl p-3 w-[50px] rounded-md text-yellow-600 text-center bg-yellow-200">
              <h2 className="">
                <RiFileDownloadFill />
              </h2>
            </div>
            <br />
            <h1 className="md:text-xl">Sign copy to NID</h1>
          </div>
        </Link>
        <div className="cursor-pointer rounded-md px-6 py-5 md:py-10 dark:bg-slate-700 bg-white">
          <div className="text-2xl p-3 w-[50px] rounded-md text-red-600 text-center bg-red-200">
            <h2 className="">
              <FaFilePdf />
            </h2>
          </div>
          <br />
          <h1 className="md:text-xl">ID PDF</h1>
        </div>
        <Link to="/PriceList">
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
        <div className="cursor-pointer rounded-md px-6 py-5 md:py-10 dark:bg-slate-700 bg-white">
          <div className="text-2xl p-3 w-[50px] rounded-md text-purple-600 text-center bg-purple-200">
            <h2 className="">
              <FaServer />
            </h2>
          </div>
          <br />
          <h1 className="md:text-xl">Sign copy</h1>
        </div>
        <Link to="/order/pending">
          <div className="cursor-pointer rounded-md px-6 py-5 md:py-10 dark:bg-slate-700 bg-white">
            <div className="text-2xl p-3 w-[50px] rounded-md text-orange-600 text-center bg-orange-200">
              <h2 className="">
                <MdOutlineAccessTimeFilled />
              </h2>
            </div>
            <br />
            <h1 className="md:text-xl">Pending Order</h1>
          </div>
        </Link>
        <Link to="/order/success">
          <div className="cursor-pointer rounded-md px-6 py-5 md:py-10 dark:bg-slate-700 bg-white">
            <div className="text-2xl p-3 w-[50px] rounded-md text-green-600 text-center bg-green-200">
              <h2 className="">
                <TiTick />
              </h2>
            </div>
            <br />
            <h1 className="md:text-xl">Success Order</h1>
          </div>
        </Link>
        <Link to="/order/cancel">
          <div className="cursor-pointer rounded-md px-6 py-5 md:py-10 dark:bg-slate-700 bg-white">
            <div className="text-2xl p-3 w-[50px] rounded-md text-cyan-600 text-center bg-cyan-200">
              <h2 className="">
                <ImCross />
              </h2>
            </div>
            <br />
            <h1 className="md:text-xl">Cancel Order</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
