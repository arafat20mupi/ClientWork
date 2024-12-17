const NidUserPasswordSet = () => {
  // Sample user data
  const users = [
    {
      id: 1,
      name: "Server Copy",
      number: "1234567890",
      amount: "01817871273",
    },
    {
      id: 2,
      name: "NID Copy",
      number: "0987654321",
      amount: "01817871273",
    },
  ];

  return (
    <div className="p-2 w-full overflow-x-scroll md:overflow-x-hidden">
      <h1 className="text-2xl font-bold mb-4">Nid User Password Set</h1>
      <table className="min-w-full border-collapse shadow-md dark:bg-slate-700 bg-zinc-100">
        <thead className="font-extrabold">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Select Method
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              id Number
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              what&apos;s app number
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Upload
            </th>

            <th className="border border-gray-300 px-4 py-2 text-left">
              Cancel
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

              <td className=" flex items-center space-x-1 border border-gray-300 px-4 py-2">
                <input type="file" />
                <button className="btn btn-success">Confirm</button>
              </td>

              <td className="border border-gray-300 px-4 py-2">
                <button className="btn btn-error">Cancel</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NidUserPasswordSet;
