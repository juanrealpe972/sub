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
            <div className="">{children}</div>
          </div>
        </div>
      ) : (
        <div className="flex-auto h-screen">
          <Header />
          <div className="">{children}</div>
        </div>
      )}
    </>
  );
}

export default Layout;
