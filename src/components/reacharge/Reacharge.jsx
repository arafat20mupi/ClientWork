const Recharge = () => {
  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-gray-700 mb-6 text-center">
        Recharge
      </h1>
      <h2>
      নিচের দেওয়া নম্বরগুলোতে Send Money Korben </h2>
      <p className="font-extrabold text-pink-500">বিকাশ Personal: 01738485576</p>
      <p className="font-extrabold text-red-500">নগদ Personal: 01738485576</p>
      
      {/* Dropdown for Payment Method */}
      <div className="mb-4">
        <select
          id="paymentMethod"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Payment Method</option>
          <option value="bkash">Bkash</option>
          <option value="nogod">Nogod</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="amount" className="block text-gray-600 mb-1">
          Amount
        </label>
        <input
          type="text"
          id="amount"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter amount"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="trxId" className="block text-gray-600 mb-1">
          TrxId
        </label>
        <input
          type="text"
          id="trxId"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter TrxId"
        />
      </div>
      <div className="flex items-center font-extrabold text-red-500">
        সর্বনিম্ন রিচার্জ: 20 টাকা
      </div>
      <div className="mt-4">
        <button className="w-full px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition">
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default Recharge;
