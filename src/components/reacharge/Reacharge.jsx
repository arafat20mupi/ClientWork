import { useState } from "react";
import axios from "axios";

const Recharge = () => {
  const [formData, setFormData] = useState({
    paymentMethod: "",
    number: "",
    amount: "",
    trxId: "",
    name: "",
  });

  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/recharge",
        formData
      );
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-gray-700 mb-6 text-center">
        Recharge
      </h1>
      <div className="m-4 font-semibold text-pink-600">
        <h2>নিচের দেওয়া নাম্বার গুলোতে রিচারজ করুন-</h2>
        <h3>বিকাশ ঃ ০১৮১৭৮৭১২৭৩</h3>
        <h3>নগদ ঃ ০১৮১৭৮৭১২৭৩</h3>
      </div>
      {message && (
        <div className="mb-4 text-center text-green-600">{message}</div>
      )}
      <form onSubmit={handleSubmit}>
        {/* Payment Method Dropdown */}
        <div className="mb-4">
          <select
            id="paymentMethod"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.paymentMethod}
            onChange={handleInputChange}
          >
            <option value="">Select Payment Method</option>
            <option value="bkash">Bkash</option>
            <option value="nogod">Nogod</option>
          </select>
        </div>

        {/* Payment Number */}
        <div className="mb-4">
          <label htmlFor="number" className="block text-gray-600 mb-1">
            Payment Number
          </label>
          <input
            type="text"
            id="number"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter payment number"
            value={formData.number}
            onChange={handleInputChange}
          />
        </div>

        {/* Amount */}
        <div className="mb-4">
          <label htmlFor="amount" className="block text-gray-600 mb-1">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter amount"
            value={formData.amount}
            onChange={handleInputChange}
          />
        </div>

        {/* TrxId */}
        <div className="mb-4">
          <label htmlFor="trxId" className="block text-gray-600 mb-1">
            Transaction ID (TrxId)
          </label>
          <input
            type="text"
            id="trxId"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter TrxId"
            value={formData.trxId}
            onChange={handleInputChange}
          />
        </div>

        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>

        {/* Submit Button */}
        <div className="mt-4">
          <button
            type="submit"
            className="w-full px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
          >
            Proceed to Payment
          </button>
        </div>
      </form>
    </div>
  );
};

export default Recharge;
