import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import toast from "react-hot-toast";

const AllUsers = () => {
  const axios = useAxiosPublic();
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get("/api/getAllUsers")
      .then((response) => {
        console.log(response.data.users);
        setUsers(response.data.users);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, [axios]);

  const handleDeleteUser = (id) => {
    axios.delete(`/api/user/delete/${id}`)
      .then((response) => {
        console.log(response);
        toast.success("User deleted successfully");
        setUsers(users.filter(user => user._id !== id));
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  }

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
              Role
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td className="border border-gray-300 px-4 py-2">{user.name}</td>
              <td className="border border-gray-300 px-4 py-2">
                {user.phone}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {user.role}
              </td>

              <td className="border border-gray-300 px-4 py-2">
                <div className="flex items-center space-x-2">
                  {/* <button className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600">
                    Approve
                  </button> */}
                  <button
                    onClick={() => handleDeleteUser(user._id)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"

                  >
                    Delete
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
