import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import toast from "react-hot-toast";

const AdminRecharge = () => {
  const axios = useAxiosPublic();
  const [recharges, setRecharge] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await axios.get('/api/recharge');
        setRecharge(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, [axios]);

  const handleRechargeStatus = async (trxId, amount) => {
    try {
      await axios.put(`/api/recharge/${trxId}`, { amount });
      // Update the recharges state
      setRecharge((prevRecharges) =>
        prevRecharges.map((recharge) =>
          recharge.trxId === trxId ? { ...recharge, status: 'approved' } : recharge
        )
      );
      toast.success('Recharge Approved');
    } catch (error) {
      toast.error('Error approving recharge', error);
    }
  };

  const handleCancelRecharge = async (trxId) => {
    try {
      await axios.post('/api/recharge/cancel', { trxId });
      // Remove the canceled recharge from the state
      setRecharge((prevRecharges) =>
        prevRecharges.filter((recharge) => recharge.trxId !== trxId)
      );
      toast.success('Recharge canceled');
    } catch (error) {
      console.error('Error canceling recharge:', error);
      toast.error('Error canceling recharge');
    }
  };

  return (
    <div className="p-4 w-full overflow-x-scroll md:overflow-x-hidden">
      <h1 className="text-3xl font-semibold mb-6 text-center">Recharge Management</h1>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg p-4">
        {loading ? (
          <div className="text-center text-lg">Loading...</div>
        ) : (
          <table className="min-w-full border-collapse text-gray-700">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-300 px-6 py-3 text-left">Name</th>
                <th className="border border-gray-300 px-6 py-3 text-left">Number</th>
                <th className="border border-gray-300 px-6 py-3 text-left">Amount</th>
                <th className="border border-gray-300 px-6 py-3 text-left">TrxId</th>
                <th className="border border-gray-300 px-6 py-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {recharges.map((recharge) => (
                <tr key={recharge.trxId} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-6 py-4">{recharge.name}</td>
                  <td className="border border-gray-300 px-6 py-4">{recharge.number}</td>
                  <td className="border border-gray-300 px-6 py-4">${recharge.amount}</td>
                  <td className="border border-gray-300 px-6 py-4">{recharge.trxId}</td>
                  <td className="border border-gray-300 px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => handleRechargeStatus(recharge.trxId, recharge.amount)}
                        disabled={recharge.status === 'success'} // Disable button if already approved
                        className={`px-4 py-2 text-white rounded-md ${recharge.status === 'pending' ? 'bg-green-500' : 'bg-gray-400 cursor-not-allowed'
                          }`}
                      >
                        {recharge.status === 'pending' ? 'Approve' : 'Approved'}
                      </button>
                      <button
                        disabled={recharge.status === 'cancel' || recharge.status === 'success'}
                        onClick={() => handleCancelRecharge(recharge.trxId)}
                        className={`px-4 py-2 text-white rounded-md ${recharge.status === 'cancel' || recharge.status === 'success'
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-red-500'
                          }`}
                      >
                        Cancel
                      </button>

                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminRecharge;
