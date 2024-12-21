import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import { toast } from "react-hot-toast";

const AdminServerCopy = () => {
  const [users, setUsers] = useState();
  const axios = useAxiosPublic();



  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/api/serverCopy");
        setUsers(response.data.servers);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsers();
  }, [axios]);
  console.log(users);
  const handleFileSubmit = async (file, userId, status, method) => {


    const formData = new FormData();
    if (file) formData.append('file', file);
    formData.append('userId', userId);
    formData.append('status', status);
    formData.append('serviceType', method);

    try {
      const response = await axios.post('/api/updateFileAndStatus', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      toast.success(response.data.message);
    } catch (error) {
      console.error(error);
      toast.error('Failed to upload file');
    }
  };

  const handleStatusCencel = async (id) => {
    try {
      const response = await axios.patch(`/api/cancel/${id}`);
      console.log(response.data);
    } catch (error) {
      console.error(error);
      toast.error('Failed to cancel');
    };
  }
  return (
    <div className="p-2 w-full overflow-x-scroll md:overflow-x-hidden">
      <h1 className="text-2xl font-bold mb-4">Server Copy</h1>
      <table className="min-w-full border-collapse shadow-md dark:bg-slate-700 bg-zinc-100">
        <thead className="font-extrabold">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Select Method</th>
            <th className="border border-gray-300 px-4 py-2 text-left">id Number</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Date of Birth</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Upload</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Cancel</th>
          </tr>
        </thead>
        <tbody>

          {users &&
            users.map((user) => (
              <tr key={user._id}>
                <td className="border border-gray-300 px-4 py-2">{user.method} Number</td>
                <td className="border border-gray-300 px-4 py-2">{user.idNumber}</td>
                <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                <td className="border border-gray-300 px-4 py-2">{user.birthday}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <input
                    type="file"
                    name="file"
                    accept="application/pdf"
                    onChange={(e) => handleFileSubmit(e.target.files[0], user.userId, 'Approved', user.method)}
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button onClick={handleStatusCencel(user._id)} className="btn btn-error">Cancel</button>
                </td>
              </tr>
            ))}

        </tbody>
      </table>
    </div>
  );
};

export default AdminServerCopy;
