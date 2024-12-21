import { useEffect, useState } from "react";
import useAuth from "../../../Hook/useAuth";
import useAxiosPublic from "../../../Hook/useAxiosPublic";

const CanceledOrders = () => {
  const [orders, setOrders] = useState([])
  const axios = useAxiosPublic();
  const { user } = useAuth();
  const id = user?.user?._id;

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`/api/getOrder/${id}/Cancelled`);
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
      <h1 className="text-2xl font-bold mb-4">Cancel Orders</h1>
      <table className="min-w-full dark:bg-slate-700 bg-zinc-100 shadow-sm">
        <thead>
          <tr>
            <th className="border px-4 py-2 text-left">Order</th>
            <th className="border px-4 py-2 text-left">Details</th>
            <th className="border px-4 py-2 text-left">FeedBack</th>
            <th className="border px-4 py-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {orders && orders.map((order) => (
            <tr key={order._id} className="">
              <td className="border px-4 py-2">{order.serviceType}</td>
              <td className="border px-4 py-2">{order.details}</td>
              <td className="border px-4 py-2">{order.price}</td>
              <td className="border px-4 py-2">
                <button className="px-4 py-2 bg-red-500 text-white rounded">
                  Canceled
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CanceledOrders;
