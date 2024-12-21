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
    <div className="px-2 w-full overflow-x-scroll md:overflow-x-hidden">
      <h1 className="text-2xl font-bold mb-4">Pending Orders</h1>
      <table className="min-w-full dark:bg-slate-700 bg-zinc-100 shadow-sm">
        <thead>
          <tr>
            <th className="border px-4 py-2 text-left">Order</th>
            <th className="border px-4 py-2 text-left">Price</th>
            <th className="border px-4 py-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {orders &&  orders.map((order) => (
            <tr key={order.id} className="">
              <td className="border px-4 py-2">{order.order}</td>
              <td className="border px-4 py-2">{order.price}</td>
              <td className="border px-4 py-2">
                <button className="px-4 py-2 bg-blue-500 text-white rounded">
                  Proccessing.....
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
