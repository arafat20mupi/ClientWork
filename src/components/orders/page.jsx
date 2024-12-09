import Cancel from "./cancel/cancel";
import Success from "./success/success";
import Pending from "./pending/pending";

const OrdersPage = () => {
  return (
    <div className="m-6">
      <Pending />
      <Success />
      <Cancel />
    </div>
  );
};

export default OrdersPage;
