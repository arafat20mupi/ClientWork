const AdminAddressToNid = () => {
  const users = [
    {
      id: 1,
      name: "Server Copy",
      number: "1234567890",
      whatapp: "01817871273",
    },
    {
      id: 2,
      name: "NID Copy",
      number: "0987654321",
      whatapp: "01817871273",
    },
  ];

  /*   name
nid number
what"s app number
details */
  return (
    <div>
      <div className="p-2 w-full overflow-x-scroll md:overflow-x-hidden">
        <h1 className="text-2xl font-bold mb-4">Admin Address To Nid Number</h1>
        <table className="min-w-full border-collapse shadow-md dark:bg-slate-700 bg-zinc-100">
          <thead className="font-extrabold">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Name
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Nid Number
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                what"s app number
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                details
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="border border-gray-300 px-4 py-2">
                  {user.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.number}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.whatapp}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    className="btn"
                    onClick={() =>
                      document.getElementById("my_modal_5").showModal()
                    }
                  >
                    See More
                  </button>
                  <dialog
                    id="my_modal_5"
                    className="modal modal-bottom sm:modal-middle"
                  >
                    <div className="modal-box">
                      <h3 className="font-bold text-lg">Hello!</h3>
                      <p className="py-4">
                        Press ESC key or click the button below to close
                      </p>
                      <div className="modal-action">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn">Close</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminAddressToNid;
