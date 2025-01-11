import { FaArrowTrendUp } from "react-icons/fa6";
import { FaAddressCard, FaFilePdf, FaServer } from "react-icons/fa";
import { IoPricetags } from "react-icons/io5";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import AdminDashboard from "../Admin/AdminDashboard/AdminDashboard";

const Dashboard = () => {
  const { user } = useAuth();
  const isAdmin = user?.user?.role === "admin";
  return (
    <div className="px-5">
      {
        isAdmin ? (
          <AdminDashboard />
        ) : (
          <div>
            <div className="bg-green-400 my-6 text-xl p-6 rounded-lg shadow-md">
              <h1 className="text-white text-3xl font-bold mb-4 text-center">
                Welcome, {user?.user?.name}
              </h1>

              <p className="text-white text-lg text-center mb-4">
              জরুরী তথ্য ও প্রয়োজনীয় আপডেট পেতে চাইলে আমাদের WhatsApp গ্রুপে জয়েন করুন। জয়েন করতে নিচের Join Group  বাটনে ক্লিক করুন
              </p>

              <div className="flex justify-center">
                <a
                  href="https://chat.whatsapp.com/ICXNxyk0sfB6lwaxq3KjQJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-green-500 font-bold py-2 px-6 rounded-lg shadow hover:bg-green-500 hover:text-white transition-all duration-300"
                >
                  Join Group
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 text-white md:grid-cols-4 gap-4">
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
              <Link
                to="/servercopy"
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
                to="/signcopy"
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
              <Link to="/addressToNid">
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
                to="/NidUserPassSet"
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
              <Link to="/idpdf">
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
        )
      }
    </div>
  );
};

export default Dashboard;
