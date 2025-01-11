import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import useAuth from "../../../Hook/useAuth";

const PendingOrders = () => {
  const [SignCopy, setPendingSignCopyOrders] = useState([]);
  const [Servercopy, setPendingServercopyOrders] = useState([]);
  const [UserPassSet, setUserPassSet] = useState([]);
  const [AddressToNID, setPendingAddressToNIDOrders] = useState([]);
  const [IdPdf, setPendingIdPdfOrders] = useState([]);

  const axios = useAxiosPublic();
  const { user } = useAuth();
  const id = user?.user?._id;

  useEffect(() => {
    if (!id) return; // Wait until `id` is available

    const fetchOrders = async (endpoint, setOrders) => {
      try {
        const response = await axios.get(`/api/${endpoint}/${id}`);
        console.log(response)
        const orders = response.data?.server || [];
        const filteredOrders = orders.filter(order => order.status === "Pending");
        setOrders(filteredOrders);
      } catch (error) {
        console.error(`Error fetching ${endpoint} orders:`, error);
      }
    };

    // Fetch all pending orders
    fetchOrders("SignCopy", setPendingSignCopyOrders);
    fetchOrders("ServerCopy", setPendingServercopyOrders);
    fetchOrders("UserPassSet", setUserPassSet);
    fetchOrders("AddressToNID", setPendingAddressToNIDOrders);
    fetchOrders("IdPdf", setPendingIdPdfOrders);
  }, [axios, id]);

  if (!id) {
    return <div>Loading user data...</div>; // Show a loading message until the `id` is available
  }

  return (
    <div className="p-2 w-full overflow-x-scroll md:overflow-x-hidden">
      <h1 className="text-2xl font-bold mb-4">Pending Orders</h1>

      {[
        { title: "Sign Copy", orders: SignCopy, price: "50 Tk" },
        { title: "Server Copy", orders: Servercopy, price: "35 Tk" },
        { title: "NID User Password Set", orders: UserPassSet, price: "35 Tk" },
        { title: "Address to NID", orders: AddressToNID, price: "40 Tk" },
        { title: "ID PDF", orders: IdPdf, price: "45 Tk" },
      ].map(({ title, orders, price }) => (
        <div key={title}>
          <h1 className="text-3xl text-center py-3">{title}</h1>
          <table className="min-w-full border-collapse shadow-md dark:bg-slate-700 bg-zinc-100">
            <thead className="font-extrabold">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Order</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Price</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Action</th>

              </tr>
            </thead>
            <tbody>
              {orders.length > 0 ? (
                orders.map(order => (
                  <tr key={order._id} className="hover:bg-gray-100">
                    <td className="border border-gray-300 px-4 py-2">{order.method}</td>
                    <td className="border border-gray-300 px-4 py-2">{price}</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <button className="flex items-center space-x-2 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600">
                        <div>Processing...</div>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="text-center py-4">
                    No pending orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default PendingOrders;
