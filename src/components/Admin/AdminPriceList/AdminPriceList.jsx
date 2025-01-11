import { FaToggleOn, FaToggleOff } from "react-icons/fa";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hook/useAxiosPublic";

const AdminPriceList = () => {
  const axios = useAxiosPublic();
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch all prices
  useEffect(() => {
    setLoading(true);
    axios
      .get("/api/getPrice")
      .then((response) => {
        setPrices(response.data);
      })
      .catch((err) => {
        setError("Failed to fetch prices");
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, [axios]);

  // Handle status toggle
  const handleStatus = async (id) => {
    try {
      const { data } = await axios.put(`/api/update/${id}`);
      setPrices((prevPrices) =>
        prevPrices.map((price) => (price._id === id ? data : price))
      );
    } catch (error) {
      console.error("Error toggling status:", error);
    }
  };

  // // Handle delete price
  // const handleDelete = async (id) => {
  //   try {
  //     await axios.delete(`/api/delete/${id}`);
  //     setPrices((prevPrices) => prevPrices.filter((price) => price._id !== id));
  //   } catch (error) {
  //     console.error("Error deleting price:", error);
  //   }
  // };

  // Render loading, error, or table
  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!prices.length) return <p>No prices available</p>;

  return (
    <div className="p-2 w-full overflow-x-scroll md:overflow-x-hidden">
      <h1 className="text-2xl font-bold mb-4">Price List</h1>
      <table className="min-w-full border-collapse shadow-md bg-slate-700">
        <thead className="font-extrabold">
          <tr>
            <th className="border border-gray-300 px-5 py-5 text-left">Id</th>
            <th className="border border-gray-300 px-5 py-5 text-left">Name</th>
            <th className="border border-gray-300 px-5 py-5 text-left">Price</th>
            <th className="border border-gray-300 px-5 py-5 text-left">Status</th>
            <th className="border border-gray-300 px-5 py-5 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {prices.map((price, index) => (
            <tr key={price._id}>
              <td className="border border-gray-300 px-5 py-5">{index + 1}</td>
              <td className="border border-gray-300 px-5 py-5">{price.name}</td>
              <td className="border border-gray-300 px-5 py-5">{price.price}</td>
              <td
                className={`border border-gray-300 px-5 py-5 font-bold ${
                  price.status === "Active" ? "text-green-600" : "text-red-600"
                }`}
              >
                {price.status}
              </td>
              <td className="border border-gray-300 px-5 py-5">
                <button
                  onClick={() => handleStatus(price._id)}
                  className="flex items-center space-x-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2"
                >
                  {price.status === "Active" ? <FaToggleOff /> : <FaToggleOn />}
                </button>
                {/* <button
                  onClick={() => handleDelete(price._id)}
                  className="flex items-center space-x-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  <span>Delete</span>
                </button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPriceList;
