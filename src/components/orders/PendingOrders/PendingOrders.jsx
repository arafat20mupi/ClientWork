import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import useAuth from "../../../Hook/useAuth";

const PendingOrders = () => {
  const [orders, setOrders] = useState([])
  const axios = useAxiosPublic();
  const { user } = useAuth();
  const id = user?.user?._id;

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`/api/getOrder/${id}/Pending`);
        setOrders(response?.data);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchOrders();
  }, [axios, id]);
  return (
    <div className="p-2 w-full overflow-x-scroll md:overflow-x-hidden">
      <h1 className="text-2xl font-bold mb-4">Panding Order</h1>
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
              Price
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {orders &&  orders.map((order) => (
            <tr key={order.id} className="">
              {/* Order Column */}
              <td className="border border-gray-300 px-4 py-2">
                <p>{order.order}</p>
                <p>অর্ডারের সময়: {order.orderTime}</p>
                <p>ডাউনলোডের সর্বশেষ সময়: {order.downloadDeadline}</p>
              </td>

              {/* Details Column */}
              <td className="border border-gray-300 px-4 py-2">
                <p>Phone: {order.details.phone}</p>
                {order.details.date && <p>Date: {order.details.date}</p>}
              </td>

              {/* Price Column */}
              <td className="border border-gray-300 px-4 py-2">
                {order.price}
              </td>

              {/* Action Column */}
              <td className="border border-gray-300 px-4 py-2">
                <button className="flex items-center space-x-2 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 mr-2">
                  <div>Proccessing..</div>
                 
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PendingOrders;
