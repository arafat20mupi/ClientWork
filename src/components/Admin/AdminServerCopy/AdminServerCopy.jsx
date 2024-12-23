import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useAxiosPublic from "../../../Hook/useAxiosPublic";

const AdminServerCopy = () => {
  const [userPass, setUserPass] = useState([]);
  const axios = useAxiosPublic();
  console.log(userPass);
  // Fetch the list of users on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/api/ServerCopy");
        setUserPass(response.data.servers);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsers();
  }, [axios]);

  // Handle file submission with PUT request
  const handleFileSubmit = async (id) => {
    const fileInput = document.querySelector(`#file-input-${id}`);
    if (fileInput && fileInput.files.length > 0) {
      const formData = new FormData();
      formData.append("file", fileInput.files[0]);
      formData.append("id", id);

      try {
        const response = await axios.put(`/api/ServerCopy/${id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log("Update success:", response.data);
        toast.success("User Pass Set uploaded successfully");
      } catch (error) {
        console.error("Update failed:", error);
        toast.error("Failed to upload User Pass Set.");
      }
    } else {
      toast.error("No file selected for upload.");
    }
  };

  const handleCancel = async (id) => {
    const feedbackInput = document.querySelector(`#feedback-${id}`);
    const feedback = feedbackInput ? feedbackInput.value.trim() : "";

    if (!feedback) {
      toast.error("Feedback is required to cancel!");
      return;
    }

    try {
      const response = await axios.put(`/api/ServerCopyCancel/${id}`, { feedback });
      console.log("Cancel success:", response.data);

      // Clear the feedback field and close the modal
      feedbackInput.value = "";
      const modal = document.getElementById(`cancel-modal-${id}`);
      if (modal) modal.close();

      toast.success("User Pass Set cancelled successfully");
    } catch (error) {
      console.error("Cancel failed:", error.response?.data || error);
      toast.error("Failed to cancel User Pass Set");
    }
  };
  return (
    <div className="p-2 w-full overflow-x-scroll md:overflow-x-hidden">
      <h1 className="text-2xl font-bold mb-4">Server Copy</h1>
      <table className="min-w-full border-collapse shadow-md dark:bg-slate-700 bg-zinc-100">
        <thead className="font-extrabold">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Select Method
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Name
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              id Number
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Birthday
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
          {userPass && userPass.map((user) => (
            <tr key={user._id}>
              <td className="border border-gray-300 px-4 py-2">{user.method}</td>
              <td className="border border-gray-300 px-4 py-2">
                {user.name}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {user.idNumber}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {user.birthday}
              </td>

              <td className="flex items-center space-x-1 border border-gray-300 px-4 py-2">
                <input type="file" id={`file-input-${user._id}`} />
                <button
                  disabled={user.status === "Cancel" || user.status === "Approved"}
                  className="btn btn-success"
                  onClick={() => handleFileSubmit(user._id)}
                >
                  Confirm
                </button>
              </td>

              <td className="border border-gray-300 px-4 py-2">
                <button
                  disabled={user.status === "Cancel" || user.status === "Approved"}
                  className="btn btn-warning"
                  onClick={() =>
                    document.getElementById(`cancel-modal-${user._id}`).showModal()
                  }
                >
                  Cancel
                </button>
                <dialog id={`cancel-modal-${user._id}`} className="modal">
                  <div className="modal-box">
                    <form method="dialog">
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                      <label
                        htmlFor={`feedback-${user._id}`}
                        className="block text-lg font-bold mb-2"
                      >
                        Admin Feedback:
                      </label>
                      <textarea
                        id={`feedback-${user._id}`}
                        rows="5"
                        className="border rounded w-full p-2"
                        placeholder="Write your feedback here..."
                      ></textarea>
                      <button
                        type="button"
                        className="mt-3 bg-blue-500 text-white py-2 px-4 rounded"
                        onClick={() => handleCancel(user._id)}
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

export default AdminServerCopy;
