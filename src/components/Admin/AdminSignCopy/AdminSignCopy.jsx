const AdminSignCopy = () => {
  const users = [
    {
      id: 1,
      name: "Server Copy",
      number: "1234567890",
      amount: "$100",
      date: "21-12-2024",
    },
    {
      id: 2,
      name: "NID Copy",
      number: "0987654321",
      amount: "$150",
      date: "21-12-2024",
    },
  ];

  return (
    <div className="p-2 w-full overflow-x-scroll md:overflow-x-hidden">
      <h1 className="text-2xl font-bold mb-4">Sign Copy</h1>
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
                <button
                  className="btn"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Cancel
                </button>
                <dialog id="my_modal_3" className="modal">
                  <div className="modal-box">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>

                      <label
                        htmlFor="feedback"
                        className="block text-lg font-bold mb-2"
                      >
                        Admin Feedback:
                      </label>
                      <textarea
                        id="feedback"
                        rows="5"
                        className="border rounded w-full p-2"
                        placeholder="Write your feedback here..."
                      />
                      <button
                        type="submit"
                        className="mt-3 bg-blue-500 text-white py-2 px-4 rounded"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </dialog>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminSignCopy;
