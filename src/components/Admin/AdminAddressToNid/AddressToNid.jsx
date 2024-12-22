import { useState } from "react";

const AdminAddressToNid = () => {
  const handleFeedback = () => {
    alert("Feedback Send Successfully");
  };

  const users = [
    {
      id: 1,
      name: "সার্ভার কপি",
      number: "১২৩৪৫৬৭৮৯০",
      whatsapp: "০১৮১৭৮৭১২৭৩",
      details: {
        division: "রংপুর",
        upazila: "বালিয়াডাঙ্গী",
        union: "ভানোর",
        ward: "৪ নম্বর",
        village: "বিশ্রামপুর",
        voterArea: "মুনসীপাড়া",
        fatherName: "মোঃ সামসুল হক",
        motherName: "হাজেরা খাতুন",
        spouseName: "প্রযোজ্য নয়",
        nidNumber: "৫২২৩৪৫৩৪৩৫",
      },
    },
    {
      id: 2,
      name: "এনআইডি কপি",
      number: "০৯৮৭৬৫৪৩২১",
      whatsapp: "০১৮১৭৮৭১২৭৩",
      details: {
        division: "ঢাকা",
        upazila: "মিরপুর",
        union: "গুলশান",
        ward: "৩ নম্বর",
        village: "কল্যাণপুর",
        voterArea: "সেক্টর ১০",
        fatherName: "মোঃ শাহ আলম",
        motherName: "ফাতেমা বেগম",
        spouseName: "প্রযোজ্য নয়",
        nidNumber: "৭৮৯৬৫৪৩২১০",
      },
    },
  ];

  const [selectedUser, setSelectedUser] = useState(null);

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
                NID Number
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                WhatsApp Number
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Details
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
                  {user.whatsapp}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    className="btn btn-primary"
                    onClick={() => setSelectedUser(user)}
                  >
                    See More
                  </button>
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
              <li>বিভাগ: {selectedUser.details.division}</li>
              <li>উপজেলা: {selectedUser.details.upazila}</li>
              <li>ইউনিয়ন: {selectedUser.details.union}</li>
              <li>ওয়ার্ড: {selectedUser.details.ward}</li>
              <li>গ্রাম: {selectedUser.details.village}</li>
              <li>ভোটার এলাকা নাম: {selectedUser.details.voterArea}</li>
              <li>পিতার নাম: {selectedUser.details.fatherName}</li>
              <li>মাতার নাম: {selectedUser.details.motherName}</li>
              <li>
                স্বামী/স্ত্রী (ঐচ্ছিক):{" "}
                {selectedUser.details.spouseName || "প্রাপ্য নয়"}
              </li>
              <li>হোয়াটসঅ্যাপ নম্বর: {selectedUser.whatsapp}</li>
              <li>এনআইডি নম্বর: {selectedUser.details.nidNumber}</li>

              <li className="flex items-center gap-4 mt-4">
                <label className="block">
                  <span className="text-gray-700">Upload Document:</span>
                  <input type="file" className="block w-full mt-1" />
                </label>
              </li>
            </ul>
            <div className="flex items-center gap-4 my-4">
              <button className="btn btn-success ">Confirm</button>
              {/* Open the modal using document.getElementById('ID').showModal() method */}
              <button
                className="btn btn-error"
                onClick={() =>
                  document.getElementById("my_modal_2").showModal()
                }
              >
                Cancel
              </button>
              <dialog id="my_modal_2" className="modal py-6">
                <div className="modal-box">
                  <input
                    type="text"
                    placeholder="Add Feedback here"
                    className="input input-bordered w-full max-w-xs"
                  />
                  <div className="mt-5">
                    <button
                      className="btn btn-success"
                      onClick={handleFeedback}
                    >
                      Submit
                    </button>
                  </div>
                </div>

                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
            </div>

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
