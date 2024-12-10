import React from "react";
import { FaArrowTrendUp, FaFilePdf } from "react-icons/fa6";
import { FaServer } from "react-icons/fa";
import { RiFileDownloadFill } from "react-icons/ri";
import { IoPricetags } from "react-icons/io5";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";

const services = [
  {
    name: "Recharge",
    icons: <FaArrowTrendUp />,
  },
  {
    name: "Server copy",
    icons: <FaServer />,
  },
  {
    name: "Sign copy to NID",
    icons: <RiFileDownloadFill />,
  },
  {
    name: "Price List",
    icons: <IoPricetags />,
  },
  {
    name: "Pending Order",
    icons: <MdOutlineAccessTimeFilled />,
  },
  {
    name: "Success Order",
    icons: <TiTick />,
  },
  {
    name: "Cancel Order",
    icons: <ImCross />,
  },
  {
    name: "ID PDF",
    icons: <FaFilePdf />,
  },
];
const Dashboard = () => {
  return (
    <div className="px-5">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {services.map((Sname, key) => {
          return (
            <div
              key={key}
              className="rounded-md px-6 py-5 md:py-10 dark:bg-slate-700 bg-white"
            >
              <div className="text-2xl p-3 w-[50px] rounded-md text-green-600 text-center bg-green-200">
                <h2 className="">{Sname.icons}</h2>
              </div>
              <br />
              <h1 className="md:text-xl">{Sname.name}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
