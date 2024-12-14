import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PendingOrders from "../components/orders/PendingOrders/PendingOrders";
import Dashboard from "../components/Dashboard/Dashboard";
import SuccessTable from "../components/orders/SuccessTable/SuccessTable";
import CanceledOrders from "../components/orders/CanceledOrders/CanceledOrders";
import Reacharge from "../components/reacharge/Reacharge";
import PriceList from "../components/PriceList/PriceList";
// import SignCopyToNidPdf from "../components/SignCopyToNidPdf/SignCopyToNidPdf";
// import NidCopy from "../components/NidCopy/NidCopy";
import SignUp from "../components/Signup/Signup";
import SignIn from "../components/SignIn/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/order/pending",
        element: <PendingOrders></PendingOrders>,
      },
      {
        path: "/order/success",
        element: <SuccessTable />,
      },
      {
        path: "/order/cancel",
        element: <CanceledOrders />,
      },

      {
        path: "/reacharge",
        element: <Reacharge />,
      },

      {
        path: "/PriceList",
        element: <PriceList />,
      },
      // {
      //   path: "/sign-copy-to-nid-pdf",
      //   element: <SignCopyToNidPdf />,
      // },
      // {
      //   path: "/nid",
      //   element: <NidCopy />,
      // },
     
    ],
  },
  {
    path: 'signUp',
    element: <SignUp/>,
  },
  {
    path: 'signIn',
    element: <SignIn/>,
  }
]);

export default router;
