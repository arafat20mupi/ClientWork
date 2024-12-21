const AdminIdPdf = () => {
    // Sample user data
    const users = [
      {
        id: 1,
        name: "Server Copy",
        number: "1234567890",
        amount: "$100",
        date: "12-12-24",
      },
      {
        id: 2,
        name: "NID Copy",
        number: "0987654321",
        amount: "$150",
        date: "12-12-24",
      },
    ];
  
    return (
      <div className="p-2 w-full overflow-x-scroll md:overflow-x-hidden">
        <h1 className="text-2xl font-bold mb-4">Admin Id Pdf</h1>
        <table className="min-w-full border-collapse shadow-md dark:bg-slate-700 bg-zinc-100">
          <thead className="font-extrabold">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Select Method
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                id Number
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Date of Birth
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
                <td className="border border-gray-300 px-4 py-2">{user.date}</td>
  
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
  
  
export default AdminIdPdf;
