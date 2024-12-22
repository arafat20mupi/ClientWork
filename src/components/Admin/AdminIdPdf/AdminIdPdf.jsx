import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hook/useAxiosPublic";

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

  // Handle file submission with PUT request
  const handleFileSubmit = async (id) => {
    const fileInput = document.querySelector(`#file-input-${id}`);
    const feedbackInput = document.querySelector(`#feedback-${id}`);
    if (fileInput && fileInput.files.length > 0) {
      const formData = new FormData();
      formData.append("file", fileInput.files[0]);
      formData.append("id", id);

      // Append feedback if provided
      if (feedbackInput && feedbackInput.value) {
        formData.append("feedback", feedbackInput.value);
      }

      try {
        const response = await axios.put(`/api/IdPdf/${id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log("Update success:", response.data);
        // Optionally refresh the data or update the UI here
      } catch (error) {
        console.error("Update failed:", error);
      }
    } else {
      console.warn("No file selected for upload.");
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
                  <input type="file" id={`file-input-${user.userId}`} />
                  <button
                    className="btn btn-success"
                    onClick={() => handleFileSubmit(user.userId)}
                  >
                    Confirm
                  </button>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    className="btn"
                    onClick={() =>
                      document.getElementById(`cancel-modal-${user.id}`).showModal()
                    }
                  >
                    Cancel
                  </button>
                  <dialog id={`cancel-modal-${user.id}`} className="modal">
                    <div className="modal-box">
                      <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                          ✕
                        </button>
                        <label
                          htmlFor={`feedback-${user.id}`}
                          className="block text-lg font-bold mb-2"
                        >
                          Admin Feedback:
                        </label>
                        <textarea
                          id={`feedback-${user.id}`}
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

export default AdminIdPdf;
