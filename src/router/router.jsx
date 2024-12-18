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
import ServerCopy from "../components/ServerCopy/ServerCopy";
import SignCopy from "../components/SignCopy/SignCopy";
import NidUserPassSet from "../components/NidUserPassSet/NidUserPassSet";
import AddressToNid from "../components/AddressToNid/AddressToNid";
import AllUsers from "../components/Admin/AllUsers/AllUsers";
import AdminServerCopy from "../components/Admin/AdminServerCopy/AdminServerCopy";
import AdminDashboard from "../components/Admin/AdminDashboard/AdminDashboard";
import AdminPriceList from "../components/Admin/AdminPriceList/AdminPriceList";
import AdminRecharge from "../components/Admin/AdminRecharge/AdminRecharge";
import AdminSignCopy from "../components/Admin/AdminSignCopy/AdminSignCopy";
import IdPdf from "../components/IdPdf/IdPdf";
import NidUserPasswordSet from "../components/Admin/NidUserPasswordSet/NidUserPasswordSet";
import AdminAddressToNid from "../components/Admin/AdminAddressToNid/AddressToNid";
import AdminIdPdf from "../components/Admin/AdminIdPdf/AdminIdPdf";

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
        path: "/AddressToNid",
        element: <AddressToNid />,
      },

      {
        path: "/reacharge",
        element: <Reacharge />,
      },

      {
        path: "/PriceList",
        element: <PriceList />,
      },
      {
        path: "/servercopy",
        element: <ServerCopy />,
      },
      {
        path: "/signcopy",
        element: <SignCopy />,
      },

      {
        path: "/idpdf",
        element: <IdPdf />,
      },
      {
        path: "/NidUserPassSet",
        element: <NidUserPassSet />,
      },
      {
        path: "/Admin/dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "/Admin/NidUserPasswordSet",
        element: <NidUserPasswordSet />,
      },

      {
        path: "/Admin/adminAddressToNid",
        element: <AdminAddressToNid />,
      },

      {
        path: "/Admin/AllUsers",
        element: <AllUsers />,
      },

      {
        path: "/Admin/idPdf",
        element: <AdminIdPdf />,
      },

      {
        path: "/Admin/recharge",
        element: <AdminRecharge />,
      },

      {
        path: "/Admin/serverCopy",
        element: <AdminServerCopy />,
      },

      {
        path: "/Admin/signCopy",
        element: <AdminSignCopy />,
      },

      {
        path: "/Admin/priceList",
        element: <AdminPriceList />,
      },
    ],
  },
  {
    path: "signUp",
    element: <SignUp />,
  },
  {
    path: "signIn",
    element: <SignIn />,
  },
]);

export default router;
