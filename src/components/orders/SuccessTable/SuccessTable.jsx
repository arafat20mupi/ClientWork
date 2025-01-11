import { useEffect, useState } from "react";
import { IoMdDownload } from "react-icons/io";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import useAuth from "../../../Hook/useAuth";

const SuccessTable = () => {
  const [SignCopy, setSignCopyOrders] = useState([]);
  const [Servercopy, setServercopyOrders] = useState([]);
  const [UserPassSet, setUserPassSetOrders] = useState([]);
  const [AddressToNID, setAddressToNIDOrders] = useState([]);
  const [IdPdf, setIdPdfOrders] = useState([]);
  const [disabledButtons, setDisabledButtons] = useState({});

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
        const filteredOrders = orders.filter(order => order.status === "Approved");
        setState(filteredOrders);
        console.log(filteredOrders);
      } catch (error) {
        console.error(`Error fetching ${endpoint} orders:`, error);
      }
    };

    fetchOrders("ServerCopy", setServercopyOrders);
    fetchOrders("SignCopy", setSignCopyOrders);
    fetchOrders("UserPassSet", setUserPassSetOrders);
    fetchOrders("AddressToNID", setAddressToNIDOrders);
    fetchOrders("IdPdf", setIdPdfOrders);
  }, [axios, id]);

  useEffect(() => {
    const disabled = {};
    const allOrders = [...SignCopy, ...Servercopy, ...UserPassSet, ...AddressToNID, ...IdPdf];
    allOrders.forEach(order => {
      const orderTime = new Date(order.createdAt).getTime();
      const currentTime = new Date().getTime();
      if (currentTime - orderTime > 24 * 60 * 60 * 1000) {
        disabled[order.id] = true;
      }
    });
    setDisabledButtons(disabled);
  }, [SignCopy, Servercopy, UserPassSet, AddressToNID, IdPdf]);

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

  const renderTable = (orders, title, price) => (
    <>
      <h1 className="text-3xl text-center py-3">{title}</h1>
      <table className="min-w-full border-collapse shadow-md bg-slate-700">
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
                  <button
                    onClick={() => handleDownload(order.file)}
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
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center py-4">
                No approved orders found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );

  return (
    <div className="p-2 w-full overflow-x-scroll md:overflow-x-hidden">
      <h1 className="text-2xl font-bold mb-4">Success Orders</h1>
      {renderTable(SignCopy, "Sign Copy", "50 Tk")}
      {renderTable(Servercopy, "Server Copy", "35 Tk")}
      {renderTable(UserPassSet, "NID User Password Set", "35 Tk")}
      {renderTable(AddressToNID, "Address to NID", "40 Tk")}
      {renderTable(IdPdf, "ID PDF", "45 Tk")}
    </div>
  );
};

export default SuccessTable;
