import { useEffect, useState } from "react";
import useAuth from "../../../Hook/useAuth";
import useAxiosPublic from "../../../Hook/useAxiosPublic";

const CanceledOrders = () => {
  const [SignCopy, setSignCopyOrders] = useState([]);
  const [Servercopy, setServercopyOrders] = useState([]);
  const [UserPassSet, setUserPassSetOrders] = useState([]);
  const [AddressToNID, setAddressToNIDOrders] = useState([]);
  const [IdPdf, setIdPdfOrders] = useState([]);

  const axios = useAxiosPublic();
  const { user } = useAuth();
  const id = user?.user?._id;

  useEffect(() => {
    const fetchOrders = async (endpoint, setState) => {
      if (!id) {
        console.error("User ID is undefined");
        return;
      }
      try {
        const response = await axios.get(`/api/${endpoint}/${id}`);
        console.log(response);
        const orders = response.data?.server || [];
        const filteredOrders = orders.filter(order => order.status === "Canceled");
        setState(filteredOrders);
        console.log(filteredOrders);
      } catch (error) {
        console.error(`Error fetching ${endpoint} orders:`, error);
      }
    };

    fetchOrders("SignCopy", setSignCopyOrders);
    fetchOrders("ServerCopy", setServercopyOrders);
    fetchOrders("UserPassSet", setUserPassSetOrders);
    fetchOrders("AddressToNID", setAddressToNIDOrders);
    fetchOrders("IdPdf", setIdPdfOrders);
  }, [axios, id]);

  const renderTable = (orders, title, price) => (
    <>
      <h1 className="text-3xl text-center py-3">{title}</h1>
      <table className="min-w-full border-collapse shadow-md dark:bg-slate-700 bg-zinc-100">
        <thead className="font-extrabold">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Order</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Price</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Feedback</th>
          </tr>
        </thead>
        <tbody>
          {orders.length > 0 ? (
            orders.map(order => (
              <tr key={order._id} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{order.method}</td>
                <td className="border border-gray-300 px-4 py-2">{price}</td>
                <td className="border border-gray-300 px-4 py-2">{order.feedback || "No feedback provided"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center py-4">
                No canceled orders found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );

  return (
    <div className="p-2 w-full overflow-x-scroll md:overflow-x-hidden">
      <h1 className="text-2xl font-bold mb-4">Canceled Orders</h1>
      {renderTable(SignCopy, "Sign Copy", "50 Tk")}
      {renderTable(Servercopy, "Server Copy", "35 Tk")}
      {renderTable(UserPassSet, "NID User Password Set", "35 Tk")}
      {renderTable(AddressToNID, "Address to NID", "40 Tk")}
      {renderTable(IdPdf, "ID PDF", "45 Tk")}
    </div>
  );
};

export default CanceledOrders;
