// import { FaLock, FaUnlock } from "react-icons/fa";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import { useEffect, useState } from "react";

const PriceList = () => {
  const axios = useAxiosPublic()
  const [ prices, setPrices] = useState()

  useEffect(() => {
    axios.get('/api/getPrice')
      .then(response => {
        console.log(response.data); 
        setPrices(response.data);
      })
      .catch(error => {
        console.error('Error fetching prices:', error);
      });
  },[axios])

  return (
    <div className="p-2 w-full overflow-x-scroll md:overflow-x-hidden">
      <h1 className="text-2xl font-bold mb-4">Price List</h1>
      <table className="min-w-full border-collapse shadow-md text-white dark:bg-slate-700 bg-zinc-100">
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
            {/* <th className="border border-gray-300 px-4 py-2 text-left">
              Status
            </th> */}
          </tr>
        </thead>
        <tbody>
        {prices && prices.map((price, index) => (
            <tr key={price.id} className="">
              {/* Order Column */}
              <td className="border border-gray-300 px-4 py-2">
                <p>{index + 1}</p>
              </td>

              {/* Details Column */}
              <td className="border border-gray-300 px-4 py-2">
                {price.name}
              </td>

              {/* Price Column */}
              <td className="border border-gray-300 px-4 py-2">
                {price.price}
              </td>

              {/* Action Column
              <td className="border border-gray-300 px-4 py-2">
                <button >
                  {
                    price.status === 'Active' ? <div className="bg-green-500  text-white rounded hover:bg-green-700 px-3 py-1"><FaUnlock /></div> : <div className="px-3 py-1 bg-red-500 text-white hover:bg-red-700 rounded"> <FaLock/> </div>
                  }

                </button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PriceList;
