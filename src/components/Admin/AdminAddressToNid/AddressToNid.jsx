import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import toast from "react-hot-toast";

const AdminAddressToNid = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [addressToNID, setaddressToNID] = useState([]);
  const axios = useAxiosPublic();
  // Fetch the list of users on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/api/AddressToNID");
        setaddressToNID(response.data.servers);
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
        const response = await axios.put(`/api/AddressToNID/${id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log("Update success:", response.data);
        toast.success(" Address To NID uploaded successfully");
      } catch (error) {
        console.error("Update failed:", error);
        toast.error("Failed to upload Address To NID");
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
      const response = await axios.put(`/api/AddressToNIDCancel/${id}`, { feedback });
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
    <div>
      <div className="p-2 w-full overflow-x-scroll md:overflow-x-hidden">
        <h1 className="text-2xl font-bold mb-4">Address To Nid Number</h1>
        <table className="min-w-full border-collapse shadow-md dark:bg-slate-700 bg-zinc-100">
          <thead className="font-extrabold">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Name
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                WhatsApp Number
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Division
              </th>

              <th className="border border-gray-300 px-4 py-2 text-left">
                Details
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Cencal
              </th>
            </tr>
          </thead>
          <tbody>
            {addressToNID && addressToNID.map((user) => (
              <tr key={user.id}>
                <td className="border border-gray-300 px-4 py-2">
                  {user.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.whatsApp}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.selectedDivision}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    className="btn btn-primary"
                    onClick={() => setSelectedUser(user)}
                  >
                    See More
                  </button>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    disabled={user.status === "Cancel" || user.status === "Approved"}
                    className="btn btn-error"
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

      {selectedUser && (
        <dialog
          open
          className="modal modal-bottom sm:modal-middle"
          onClose={() => setSelectedUser(null)}
        >
          <div className="modal-box">
            <h3 className="font-bold text-3xl text-green-600">
              <u>Details Information</u>
            </h3>
            <ul className="font-semibold  gap-2 space-y-1">
              <li>নাম: {selectedUser.name}</li>
              <li>বিভাগ: {selectedUser.selectedDivision}</li>
              <li>জেলা: {selectedUser.selectedDistrict}</li>
              <li>উপজেলা: {selectedUser.selectedUpazila}</li>
              <li>ইউনিয়ন: {selectedUser.union}</li>
              <li>ওয়ার্ড: {selectedUser.ward}</li>
              <li>গ্রাম: {selectedUser.village}</li>
              <li>ভোটার এলাকা নাম: {selectedUser.areaName}</li>
              <li>পিতার নাম: {selectedUser.fatherName}</li>
              <li>মাতার নাম: {selectedUser.motherName}</li>
              <li>
                স্বামী/স্ত্রী (ঐচ্ছিক):{" "}
                {selectedUser.spouseName || "প্রাপ্য নয়"}
              </li>
              <li>হোয়াটসঅ্যাপ নম্বর: {selectedUser.whatsApp}</li>

              <td className="flex items-center space-x-1 border border-gray-300 px-4 py-2">
                <input type="file" id={`file-input-${selectedUser._id}`} />
                <button
                  disabled={selectedUser.status === "Cancel" || selectedUser.status === "Approved"}
                  className="btn btn-success"
                  onClick={() => handleFileSubmit(selectedUser._id)}
                >
                  Confirm
                </button>
              </td>
            </ul>
            <div className="modal-action">
              <button
                className="btn btn-error"
                onClick={() => setSelectedUser(null)}
              >
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default AdminAddressToNid;
