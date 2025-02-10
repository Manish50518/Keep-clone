/* eslint-disable react/prop-types */
import { useState } from "react";
import Sidebar from "../siderbar/Sidebar";
import Header from "../Header/Header";

function Layout({ children }) {
  const [openSidebar, setOpenSidebar] = useState(true);

  return (
    <div className="flex flex-col">
      <Header setOpenSidebar={setOpenSidebar} />
      <Sidebar openSidebar={openSidebar} />
      <div className="flex-1">
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}

export default Layout;
