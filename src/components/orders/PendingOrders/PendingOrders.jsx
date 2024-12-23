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
    const fetchOrders = async () => {
      if (!id) {
        console.error("User ID is undefined");
        return;
      }
      try {
        const response = await axios.get(`/api/SignCopy/${id}`);
        console.log(response);
        const orders = response.data?.server || [];
        const filteredOrders = orders.filter(order => order.status === "Pending");
        setPendingSignCopyOrders(filteredOrders);
        console.log(filteredOrders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
    fetchOrders();
  }, [axios, id]);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!id) {
        console.error("User ID is undefined");
        return;
      }
      try {
        const response = await axios.get(`/api/ServerCopy/${id}`);
        console.log(response);
        const orders = response.data?.server || [];
        const filteredOrders = orders.filter(order => order.status === "Pending");
        setPendingServercopyOrders(filteredOrders);
        console.log(filteredOrders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
    fetchOrders();
  }, [axios, id]);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!id) {
        console.error("User ID is undefined");
        return;
      }
      try {
        const response = await axios.get(`/api/UserPassSet/${id}`);
        console.log(response);
        const orders = response.data?.server || [];
        const filteredOrders = orders.filter(order => order.status === "Pending");
        setUserPassSet(filteredOrders);
        console.log(filteredOrders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
    fetchOrders();
  }, [axios, id]);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!id) {
        console.error("User ID is undefined");
        return;
      }
      try {
        const response = await axios.get(`/api/AddressToNID/${id}`);
        console.log(response);
        const orders = response.data?.server || [];
        const filteredOrders = orders.filter(order => order.status === "Pending");
        setPendingAddressToNIDOrders(filteredOrders);
        console.log(filteredOrders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
    fetchOrders();
  }, [axios, id]);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!id) {
        console.error("User ID is undefined");
        return;
      }
      try {
        const response = await axios.get(`/api/IdPdf/${id}`);
        console.log(response);
        const orders = response.data?.server || [];
        const filteredOrders = orders.filter(order => order.status === "Pending");
        setPendingIdPdfOrders(filteredOrders);
        console.log(filteredOrders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
    fetchOrders();
  }, [axios, id]);

  return (
    <div className="p-2 w-full overflow-x-scroll md:overflow-x-hidden">
      <h1 className="text-2xl font-bold mb-4">Pending Orders</h1>

      {/* Sign Copy */}
      <h1 className="text-3xl text-center py-3">Sign Copy</h1>
      <table className="min-w-full border-collapse shadow-md dark:bg-slate-700 bg-zinc-100">
        <thead className="font-extrabold">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Order</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Price</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {SignCopy.length > 0 ? (
            SignCopy.map(order => (
              <tr key={order._id} className="hover:bg-gray-100">
                {/* Order Column */}
                <td className="border border-gray-300 px-4 py-2">{order.method}</td>

                {/* Price Column */}
                <td className="border border-gray-300 px-4 py-2">
                  50 Tk
                </td>

                {/* Action Column */}
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

      {/* Server Copy */}
      <h1 className="text-3xl text-center py-3">Server Copy</h1>
      <table className="min-w-full border-collapse shadow-md dark:bg-slate-700 bg-zinc-100">
        <thead className="font-extrabold">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Order</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Price</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {Servercopy.length > 0 ? (
            Servercopy.map(order => (
              <tr key={order._id} className="hover:bg-gray-100">
                {/* Order Column */}
                <td className="border border-gray-300 px-4 py-2">{order.method}</td>

                {/* Price Column */}
                <td className="border border-gray-300 px-4 py-2">
                  35 Tk
                </td>

                {/* Action Column */}
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

      {/* NID User Password Set */}
      <h1 className="text-3xl text-center py-3">NID User Password Set</h1>
      <table className="min-w-full border-collapse shadow-md dark:bg-slate-700 bg-zinc-100">
        <thead className="font-extrabold">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Order</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Price</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {UserPassSet.length > 0 ? (
            UserPassSet.map(order => (
              <tr key={order._id} className="hover:bg-gray-100">
                {/* Order Column */}
                <td className="border border-gray-300 px-4 py-2">{order.method}</td>

                {/* Price Column */}
                <td className="border border-gray-300 px-4 py-2">
                  35 Tk
                </td>

                {/* Action Column */}
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

      {/* Address to NID */}
      <h1 className="text-3xl text-center py-3">Address to NID</h1>
      <table className="min-w-full border-collapse shadow-md dark:bg-slate-700 bg-zinc-100">
        <thead className="font-extrabold">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Order</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Price</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {AddressToNID.length > 0 ? (
            AddressToNID.map(order => (
              <tr key={order._id} className="hover:bg-gray-100">
                {/* Order Column */}
                <td className="border border-gray-300 px-4 py-2">{order.method}</td>

                {/* Price Column */}
                <td className="border border-gray-300 px-4 py-2">
                  40 Tk
                </td>

                {/* Action Column */}
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

      {/* ID PDF */}
      <h1 className="text-3xl text-center py-3">ID PDF</h1>
      <table className="min-w-full border-collapse shadow-md dark:bg-slate-700 bg-zinc-100">
        <thead className="font-extrabold">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Order</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Price</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {IdPdf.length > 0 ? (
            IdPdf.map(order => (
              <tr key={order._id} className="hover:bg-gray-100">
                {/* Order Column */}
                <td className="border border-gray-300 px-4 py-2">{order.method}</td>

                {/* Price Column */}
                <td className="border border-gray-300 px-4 py-2">
                  45 Tk
                </td>

                {/* Action Column */}
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
  );
};

export default PendingOrders;
