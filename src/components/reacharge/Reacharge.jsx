import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import useAuth from "../../Hook/useAuth";
import {toast} from 'react-hot-toast';
import useAxiosPublic from "../../Hook/useAxiosPublic";
const Recharge = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const axios = useAxiosPublic();
  const [userId, setUserId] = useState();
  const [name, setName] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    if (user) {
      setUserId(user.user._id);
      setName(user.user.name);
    }
  }, [user]);

  const onSubmit = async (data) => {
    try {
      setLoading(true); // Start loading
      await axios.post("/api/recharge", {
        ...data,
        userId,
        name
      });
      toast.success('Recharge successful!');
      setLoading(false);
      reset();
    } catch (error) {
      setLoading(false);
      const errorMessage = error.response?.data?.message || error.message || "An error occurred";
      toast.error(errorMessage);
    };
  };

  return (
    <div className="px-5">
      <div className="max-w-lg mx-auto mt-10 p-8 bg-white rounded-xl shadow-xl">
        <h1 className="text-3xl font-semibold text-gray-700 mb-6 text-center">রিচার্জ</h1>
        <div className="mb-6 text-center font-semibold text-blue-600">
          <h2>নিচের নাম্বার গুলোতে Send Money করেন:</h2>
          <h3 >bKash: 01817871273</h3>
          <h3>Nagad: 01817871273</h3>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Payment Method */}
          <div className="mb-4">
            <label htmlFor="paymentMethod" className="block text-gray-600 mb-2 font-medium">
              পেমেন্ট মেথড
            </label>
            <select
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("paymentMethod", { required: "Payment method is required" })}
            >
              <option value="">পেমেন্ট মেথড সিলেক্ট করুন</option>
              <option value="bkash">bKash</option>
              <option value="nogod">Nagad</option>
            </select>
            {errors.paymentMethod && <p className="text-red-500 text-sm mt-1">{errors.paymentMethod.message}</p>}
          </div>

          {/* Payment Number */}
          <div className="mb-4">
            <label htmlFor="number" className="block text-gray-600 mb-2 font-medium">
              পেমেন্ট নাম্বার
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="পেমেন্ট নাম্বার লিখুন"
              {...register("number", { required: "Payment number is required" })}
            />
            {errors.number && <p className="text-red-500 text-sm mt-1">{errors.number.message}</p>}
          </div>

          {/* Amount */}
          <div className="mb-4">
            <label htmlFor="amount" className="block text-gray-600 mb-2 font-medium">
              পরিমাণ
            </label>
            <input
              type="number"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="পরিমাণ লিখুন"
              {...register("amount", {
                required: "Amount is required",
                min: {
                  value: 20,
                  message: "কমপক্ষে ২০ টাকা রিচার্জ করতে হবে",
                },
              })}
            />
            {errors.amount && <p className="text-red-500 text-sm mt-1">{errors.amount.message}</p>}
          </div>

          {/* Transaction ID */}
          <div className="mb-4">
            <label htmlFor="trxId" className="block text-gray-600 mb-2 font-medium">
              লেনদেন আইডি (TrxId)
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="লেনদেন আইডি (TrxId) লিখুন"
              {...register("trxId", { required: "Transaction ID is required" })}
            />
            {errors.trxId && <p className="text-red-500 text-sm mt-1">{errors.trxId.message}</p>}
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
              disabled={loading}
            >
              {loading ? (
                <span className="loader spinner-border text-white" role="status" aria-hidden="true"></span>
              ) : (
                "পেমেন্ট প্রক্রিয়া করুন"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Recharge;
