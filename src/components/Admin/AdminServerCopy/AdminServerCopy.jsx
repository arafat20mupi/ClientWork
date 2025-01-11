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

  // Handle file submission with Base64 encoding
  const handleFileSubmit = async (id) => {
    const fileInput = document.querySelector(`#file-input-server-copy-${id}`);
    if (fileInput && fileInput.files.length > 0) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64File = reader.result;

        try {
          const response = await axios.put(`/api/ServerCopy/${id}`, {
            base64File,
          });
          console.log("Update success:", response.data);
          toast.success("Server Copy uploaded successfully");
        } catch (error) {
          console.error("Update failed:", error);
          toast.error(error.response?.data?.message || "Failed to upload Server Copy.");
        }
      };

      reader.readAsDataURL(fileInput.files[0]);
    } else {
      toast.error("No file selected for upload.");
    }
  };

  // Handle cancellation with feedback
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

      toast.success("Server Copy cancelled successfully");
    } catch (error) {
      console.error("Cancel failed:", error.response?.data || error);
      toast.error("Failed to cancel Server Copy");
    }
  };

  return (
    <div className="p-2 w-full overflow-x-scroll md:overflow-x-hidden">
      <h1 className="text-2xl font-bold mb-4">Server Copy</h1>
      <table className="min-w-full border-collapse shadow-md bg-slate-700">
        <thead className="font-extrabold">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Select Method</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
            <th className="border border-gray-300 px-4 py-2 text-left">ID Number</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Birthday</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Upload</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Cancel</th>
          </tr>
        </thead>
        <tbody>
          {userPass && userPass.map((user) => (
            <tr key={user._id}>
              <td className="border border-gray-300 px-4 py-2">{user.method}</td>
              <td className="border border-gray-300 px-4 py-2">{user.name}</td>
              <td className="border border-gray-300 px-4 py-2">{user.idNumber}</td>
              <td className="border border-gray-300 px-4 py-2">{user.birthday}</td>
              <td className="flex items-center space-x-1 border border-gray-300 px-4 py-2">
                <input type="file" id={`file-input-server-copy-${user._id}`} />
                <button
                  disabled={user.status === "Cancel" || user.status === "Approved"}
                  className="bg-green-500 duration-200 hover:bg-green-600 cursor-pointer rounded-md px-4 py-2 text-whit"
                  onClick={() => handleFileSubmit(user._id)}
                >
                  Confirm
                </button>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  disabled={user.status === "Cancel" || user.status === "Approved"}
                  className="bg-red-500 duration-200 cursor-pointer hover:bg-red-600 rounded-md px-4 py-2 text-white"
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
