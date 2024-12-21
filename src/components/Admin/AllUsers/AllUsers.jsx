import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hook/useAxiosPublic";

const AllUsers = () => {
  const axios  = useAxiosPublic();
  const [users , setUsers] = useState([])

  useEffect(() => {
    axios.get("/users")
     .then((response) => {
        setUsers(response.data);
      })
     .catch((error) => {
        console.error("Error fetching users:", error);
      });
  } , [axios] );

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
                  <td className="border-gray-300 px-4 py-2">
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
