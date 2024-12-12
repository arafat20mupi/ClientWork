import { FaUnlock } from "react-icons/fa";

const PriceList = () => {
  const prices = [
    {
      id: 1,
      name: "	Auto Server Copy Type 1",
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
      <h1 className="text-2xl font-bold mb-4">Services</h1>
      <table className="min-w-full border-collapse shadow-md dark:bg-slate-700 bg-zinc-100">
        <thead className=" font-extrabold">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Id
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
            Name
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Price
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {prices.map((price) => (
            <tr key={price.id} className="">
              {/* Order Column */}
              <td className="border border-gray-300 px-4 py-2">
                <p>{price.price}</p>
              </td>

              {/* Details Column */}
              <td className="border border-gray-300 px-4 py-2">
                <p>Phone: {price.details.phone}</p>
                {price.details.date && <p>Date: {price.details.date}</p>}
              </td>

              {/* Price Column */}
              <td className="border border-gray-300 px-4 py-2">
                {price.price}
              </td>

              {/* Action Column */}
              <td className="border border-gray-300 px-4 py-2">
                <button className="flex items-center space-x-2 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 mr-2">
                  <div><FaUnlock /></div>
                  
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PriceList;
