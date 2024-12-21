import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { SidebarProvider } from "./Context/SidebarConext/SidebarContext.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./router/router.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SidebarProvider>
      <RouterProvider router={router} />
    </SidebarProvider>
    <Toaster/>
  </StrictMode>
);
