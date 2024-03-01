import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useState } from "react";
import Dashboard from "../pages/Dashboard";

function Layout({ children }) {
  const [isAuthenticated] = useState(false);
  return (
    <>
      {isAuthenticated ? (
        <div className="flex flex-auto h-screen">
          <Sidebar />
          <div className="grow">
            <Navbar />
            <div className="m-5">{children}</div>
          </div>
        </div>
      ) : (
        <div className="flex-auto h-screen">
          <Navbar />
          <div className="m-5">{children}</div>
        </div>
      )}
    </>
  );
}

export default Layout;
