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
      <table className="min-w-full border-collapse shadow-md text-white bg-slate-700">
        <thead className=" font-extrabold">
          <tr>
            <th className="border border-gray-300 px-6 py-6 text-left">
              Id
            </th>
            <th className="border border-gray-300 px-6 py-6 text-left">
              Name
            </th>
            <th className="border border-gray-300 px-6 py-6 text-left">
              Price
            </th>
            <th className="border border-gray-300 px-6 py-6 text-left">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
        {prices && prices.map((price, index) => (
            <tr key={price._id} className="">
              {/* Order Column */}
              <td className="border border-gray-300 px-6 py-6">
                <p>{index + 1}</p>
              </td>

              {/* Details Column */}
              <td className="border border-gray-300 px-6 py-6">
                {price.name}
              </td>

              {/* Price Column */}
              <td className="border border-gray-300 px-6 py-6">
                {price.price}
              </td>
              <td className="border border-gray-300 px-6 py-6">
                {price.status}
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PriceList;
