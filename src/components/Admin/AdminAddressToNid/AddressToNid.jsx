import { useState } from "react";

const AdminAddressToNid = () => {
  const users = [
    {
      id: 1,
      name: "Server Copy",
      number: "1234567890",
      whatsapp: "01817871273",
      details: {
        division: "Rangpur",
        upazila: "Baliadangi",
        union: "Vanor",
        ward: "4 No.",
        village: "Bishrampur",
        voterArea: "Munsipara",
        fatherName: "Md Samsul Haque",
        motherName: "Hazera Khatun",
        spouseName: "N/A",
        nidNumber: "5223453435",
      },
    },
    {
      id: 2,
      name: "NID Copy",
      number: "0987654321",
      whatsapp: "01817871273",
      details: {
        division: "Dhaka",
        upazila: "Mirpur",
        union: "Gulshan",
        ward: "3 No.",
        village: "Kalyanpur",
        voterArea: "Sector 10",
        fatherName: "Md Shah Alam",
        motherName: "Fatema Begum",
        spouseName: "N/A",
        nidNumber: "7896543210",
      },
    },
  ];

  const [selectedUser, setSelectedUser] = useState(null);

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
                <td className="border border-gray-300 px-4 py-2">{user.name}</td>
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
            <h3 className="font-bold text-lg text-red-600">
              Details Information
            </h3>
            <ul className="font-semibold text-green-400 gap-2">
              <li>Name: {selectedUser.name}</li>
              <li>Division: {selectedUser.details.division}</li>
              <li>Upazila: {selectedUser.details.upazila}</li>
              <li>Union: {selectedUser.details.union}</li>
              <li>Ward: {selectedUser.details.ward}</li>
              <li>Village: {selectedUser.details.village}</li>
              <li>Voter Area Name: {selectedUser.details.voterArea}</li>
              <li>Fathers Name: {selectedUser.details.fatherName}</li>
              <li>Mothers Name: {selectedUser.details.motherName}</li>
              <li>
                Spouse (Optional):{" "}
                {selectedUser.details.spouseName || "Not Available"}
              </li>
              <li>WhatsApp Number: {selectedUser.whatsapp}</li>
              <li>NID Number: {selectedUser.details.nidNumber}</li>
              <li className="flex items-center gap-4 mt-4">
                <label className="block">
                  <span className="text-gray-700">Upload Document:</span>
                  <input type="file" className="block w-full mt-1" />
                </label>
                
              </li>
            </ul>
            <div className="flex items-center gap-3 my-2">
            <button className="btn btn-success">Confirm</button>
            <button className="btn btn-error">Cancel</button>
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
