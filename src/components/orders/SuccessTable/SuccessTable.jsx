import { useEffect, useState } from "react";
import { IoMdDownload } from "react-icons/io";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import useAuth from "../../../Hook/useAuth";

const SuccessTable = () => {
  const [orders, setOrders] = useState([])
  const axios = useAxiosPublic();
  const { user } = useAuth();
  const id = user?.user?._id;
  const [disabledButtons, setDisabledButtons] = useState({});

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`/api/getOrder/${id}`);
        setOrders(response?.data);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchOrders();
  }, [axios, id]);

  useEffect(() => {
    const disabled = {};
    orders.forEach(order => {
      const orderTime = new Date(order.createdAt).getTime();
      const currentTime = new Date().getTime();
      if (currentTime - orderTime > 24 * 60 * 60 * 1000) {
        disabled[order.id] = true;
      }
    });
    setDisabledButtons(disabled);
  }, [orders]);

  const handleDownload = async (fileUrl) => {
    try {
      const response = await fetch(fileUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileUrl.split('/').pop();
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed', error);
    }
  }

  return (
    <div className="p-2 w-full overflow-x-scroll md:overflow-x-hidden">
      <h1 className="text-2xl font-bold mb-4">Success Orders</h1>
      <table className="min-w-full border-collapse shadow-md dark:bg-slate-700 bg-zinc-100">
        <thead className=" font-extrabold">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Order
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Details
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          { orders && orders.map((order) => (
            <tr key={order.id} className="">
              {/* Order Column */}
              <td className="border border-gray-300 px-4 py-2">
                {order.serviceType}
              </td>

              {/* Details Column */}
              <td className="border border-gray-300 px-4 py-2">
                {order.fileName}
              </td>


              {/* Action Column */}
              <td className="border border-gray-300 px-4 py-2">
                <button 
                  onClick={() => handleDownload(order.fileUrl)}  
                  className="flex items-center space-x-2 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 mr-2"
                  disabled={disabledButtons[order.id]}
                >
                  <div>Download</div>
                  <div>
                    <IoMdDownload />
                  </div>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SuccessTable;
