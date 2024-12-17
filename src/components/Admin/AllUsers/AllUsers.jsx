const AllUsers = () => {
  // Sample user data
  const users = [
    { id: 1, name: "John Doe", number: "1234567890" },
    { id: 2, name: "Jane Smith", number: "0987654321" },
  ];

  return (
    <div className="p-2 w-full overflow-x-scroll md:overflow-x-hidden">
      <h1 className="text-2xl font-bold mb-4">All Users</h1>
      <table className="min-w-full border-collapse shadow-md dark:bg-slate-700 bg-zinc-100">
        <thead className="font-extrabold">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Number
            </th>
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
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600">
                    Approve
                  </button>
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

export default AllUsers;
