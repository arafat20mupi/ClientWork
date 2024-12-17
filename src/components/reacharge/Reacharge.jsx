import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

const Recharge = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    const uid = "1"; // Example ID, replace as needed
    const name = "Al"; // Example Name, replace as needed

    try {
      const response = await axios.post("http://localhost:5000/api/recharge", {
        ...data,
        uid,
        name,
      });
      setMessage(response.data.message);
      reset(); // Reset form fields after successful submission
    } catch (error) {
      setMessage(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="px-5">
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-gray-700 mb-6 text-center">Recharge</h1>
      <div className="m-3 font-semibold text-pink-600">
        <h2>নিচের দেওয়া নাম্বার গুলোতে রিচারজ করুন-</h2>
        <h3>বিকাশ ঃ ০১৮১৭৮৭১২৭৩</h3>
        <h3>নগদ ঃ ০১৮১৭৮৭১২৭৩</h3>
      </div>

      {message && (
        <div className="mb-4 text-center text-green-600">{message}</div>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Payment Method Dropdown */}
        <div className="mb-4">
          <select
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("paymentMethod", { required: "Payment method is required" })}
          >
            <option value="">Select Payment Method</option>
            <option value="bkash">Bkash</option>
            <option value="nogod">Nogod</option>
          </select>
          {errors.paymentMethod && (
            <p className="text-red-500 text-sm mt-1">{errors.paymentMethod.message}</p>
          )}
        </div>

        {/* Payment Number */}
        <div className="mb-4">
          <label htmlFor="number" className="block text-gray-600 mb-1">
            Payment Number
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter payment number"
            {...register("number", { required: "Payment number is required" })}
          />
          {errors.number && (
            <p className="text-red-500 text-sm mt-1">{errors.number.message}</p>
          )}
        </div>

        {/* Amount */}
        <div className="mb-4">
          <label htmlFor="amount" className="block text-gray-600 mb-1">
            Amount
          </label>
          <input
            type="number"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter amount"
            {...register("amount", {
              required: "Amount is required",
              min: {
                value: 1,
                message: "Amount must be greater than 0",
              },
            })}
          />
          {errors.amount && (
            <p className="text-red-500 text-sm mt-1">{errors.amount.message}</p>
          )}
        </div>

        {/* TrxId */}
        <div className="mb-4">
          <label htmlFor="trxId" className="block text-gray-600 mb-1">
            Transaction ID (TrxId)
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter TrxId"
            {...register("trxId", { required: "Transaction ID is required" })}
          />
          {errors.trxId && (
            <p className="text-red-500 text-sm mt-1">{errors.trxId.message}</p>
          )}
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
    </div>
  );
};

export default Recharge;
