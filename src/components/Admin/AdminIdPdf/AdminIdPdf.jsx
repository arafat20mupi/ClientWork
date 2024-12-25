import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import toast from "react-hot-toast";

const AdminIdPdf = () => {
  const [idPdf, setIdPdf] = useState([]);
  const [error, setError] = useState(null);
  const axios = useAxiosPublic();

  // Fetch the list of users on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/api/idPdf");
        setIdPdf(response.data.servers);
      } catch (error) {
        setError("Failed to load data.");
        console.error(error);
      }
    };
    fetchUsers();
  }, [axios]);

  // Handle file submission with Base64 encoding
  const handleFileSubmit = async (id) => {
    const fileInput = document.querySelector(`#file-input-${id}`);
    if (fileInput && fileInput.files.length > 0) {
      const reader = new FileReader();

      reader.onloadend = async () => {
        const base64File = reader.result;

        try {
          const response = await axios.put(`/api/IdPdf/${id}`, { base64File });
          console.log("Update success:", response.data);
          toast.success("ID PDF uploaded successfully");
        } catch (error) {
          console.error("Update failed:", error);
          toast.error(error.response?.data?.message || "Failed to upload ID PDF.");
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
      const response = await axios.put(`/api/IdPdfCancel/${id}`, { feedback });
      console.log("Cancel success:", response.data);

      // Clear the feedback field and close the modal
      feedbackInput.value = "";
      const modal = document.getElementById(`cancel-modal-${id}`);
      if (modal) modal.close();

      toast.success("ID PDF cancelled successfully");
    } catch (error) {
      console.error("Cancel failed:", error.response?.data || error);
      toast.error("Failed to cancel ID PDF");
    }
  };

  return (
    <div className="p-2 w-full overflow-x-scroll md:overflow-x-hidden">
      <h1 className="text-2xl font-bold mb-4">Id Pdf</h1>
      {error && <p className="text-red-500">{error}</p>}
      <table className="min-w-full border-collapse shadow-md dark:bg-slate-700 bg-zinc-100">
        <thead className="font-extrabold">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Select Method
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              ID Number
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
          {idPdf &&
            idPdf.map((user) => (
              <tr key={user.id}>
                <td className="border border-gray-300 px-4 py-2">
                  {user.method}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.idNumber}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.name}
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

export default AdminIdPdf;
