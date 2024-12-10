import { IoMdDownload } from "react-icons/io";

const SuccessTable = () => {
  const orders = [
    {
      id: 1,
      order: "Auto Server Copy Type 1",
      orderTime: "08-12-2024 ; 12:04 pm",
      downloadDeadline: "09-12-2024 ; 12:00 pm",
      details: {
        phone: "9164709595",
        date: "18-12-2002",
      },
      price: "8 BDT",
    },
    {
      id: 2,
      order: "Sign2NID",
      orderTime: "07-12-2024 ; 8:25 pm",
      downloadDeadline: "08-12-2024 ; 8:21 pm",
      details: {
        phone: "7774287127",
      },
      price: "4 BDT",
    },
    {
      id: 3,
      order: "Auto Server Copy Type 1",
      orderTime: "03-12-2024 ; 1:07 pm",
      downloadDeadline: "04-12-2024 ; 1:04 pm",
      details: {
        phone: "9164709595",
        date: "18-12-2002",
      },
      price: "8 BDT",
    },

    {
      id: 2,
      order: "Sign2NID",
      orderTime: "07-12-2024 ; 8:25 pm",
      downloadDeadline: "08-12-2024 ; 8:21 pm",
      details: {
        phone: "7774287127",
      },
      price: "4 BDT",
    },

    {
      id: 2,
      order: "Sign2NID",
      orderTime: "07-12-2024 ; 8:25 pm",
      downloadDeadline: "08-12-2024 ; 8:21 pm",
      details: {
        phone: "7774287127",
      },
      price: "4 BDT",
    },

    {
      id: 2,
      order: "Sign2NID",
      orderTime: "07-12-2024 ; 8:25 pm",
      downloadDeadline: "08-12-2024 ; 8:21 pm",
      details: {
        phone: "7774287127",
      },
      price: "4 BDT",
    },
  ];

  return (
    <div className="p-2 w-full overflow-x-scroll md:overflow-x-hidden">
      <h1 className="text-2xl font-bold mb-4">Success Orders</h1>
      <table className="min-w-full border-collapse shadow-md dark:bg-slate-700 bg-zinc-100">
        <thead className=" font-extrabold">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Order
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Details
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Price
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="">
              {/* Order Column */}
              <td className="border border-gray-300 px-4 py-2">
                <p>{order.order}</p>
                <p>অর্ডারের সময়: {order.orderTime}</p>
                <p>ডাউনলোডের সর্বশেষ সময়: {order.downloadDeadline}</p>
              </td>

              {/* Details Column */}
              <td className="border border-gray-300 px-4 py-2">
                <p>Phone: {order.details.phone}</p>
                {order.details.date && <p>Date: {order.details.date}</p>}
              </td>

              {/* Price Column */}
              <td className="border border-gray-300 px-4 py-2">
                {order.price}
              </td>

              {/* Action Column */}
              <td className="border border-gray-300 px-4 py-2">
                <button className="flex items-center space-x-2 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 mr-2">
                  <div>Download</div>
                  <div>
                    <IoMdDownload />
                  </div>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SuccessTable;
