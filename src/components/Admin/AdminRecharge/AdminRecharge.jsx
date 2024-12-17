const AdminRecharge = () => {
  // Sample user data
  const users = [
    { id: 1, name: "John Doe", number: "1234567890", amount: "$100" },
    { id: 2, name: "Jane Smith", number: "0987654321", amount: "$150" },
  ];

  return (
    <div className="p-2 w-full overflow-x-scroll md:overflow-x-hidden">
      <h1 className="text-2xl font-bold mb-4">Recharge</h1>
      <table className="min-w-full border-collapse shadow-md dark:bg-slate-700 bg-zinc-100">
        <thead className="font-extrabold">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Number
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Amount
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">Send</th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border border-gray-300 px-4 py-2">{user.name}</td>
              <td className="border border-gray-300 px-4 py-2">
                {user.number}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {user.amount}
              </td>
              <td className="flex items-center space-x-1 border border-gray-300 px-4 py-2">
                <input
                  type="number"
                  className="bg-slate-100 px-3 py-1 rounded w-[100px] text-black"
                />
                <button className="btn btn-secondary">Send</button>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                    Cancel
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminRecharge;
