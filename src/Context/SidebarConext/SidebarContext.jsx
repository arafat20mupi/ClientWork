/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const SidebarContext = createContext();
export const SidebarProvider = ({ children }) => {
  const [OpenSide, setOpenSide] = useState(false);

  return (
    <SidebarContext.Provider value={{ OpenSide, setOpenSide }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarContext;
