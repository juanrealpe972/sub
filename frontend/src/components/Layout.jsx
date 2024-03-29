import Sidebar from "./Sidebar";
import Header from "./Header";
import { useState } from "react";

function Layout({ children }) {
  const [isAuthenticated] = useState(true);
  return (
    <>
      {isAuthenticated ? (
        <div className="flex flex-auto h-auto">
          <Sidebar />
          <div className="grow">
            <Header />
            <div>{children}</div>
          </div>
        </div>
      ) : (
        <div className="flex-auto h-screen py-20">
          <Header />
          <div>{children}</div>
        </div>
      )}
    </>
  );
}

export default Layout;
