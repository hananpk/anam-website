import React, { useState } from "react";
import Header from "./Header";
import SideDrawer from "./SideDrawer";

const Layout = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <Header onOpenDrawer={() => setIsDrawerOpen(true)} />
      {children}
      <SideDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </>
  );
};

export default Layout;
