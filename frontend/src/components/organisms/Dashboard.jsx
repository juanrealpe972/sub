<<<<<<< HEAD
import React, { useEffect } from "react";
=======
import React, { useContext, useEffect } from "react";
>>>>>>> 6a995bdc65b3e7472963d69ab005d8d423b4cb55
import { Outlet, useNavigate } from "react-router-dom";

import HeaderOrganism from "./HeaderOrganism";
import FooterOrganism from "./FooterOrganism";
import SidebarOrganims from  "./SidebarOrganims"
<<<<<<< HEAD
import { useAuthContext } from "../../context/AuthContext";
=======
import AuthContext from "../../context/AuthContext";
>>>>>>> 6a995bdc65b3e7472963d69ab005d8d423b4cb55

const Dashboard = () => {
  const auth = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
<<<<<<< HEAD
  const { isAuthenticated } = useAuthContext()
=======
  const { isAuthenticated } = useContext(AuthContext)
>>>>>>> 6a995bdc65b3e7472963d69ab005d8d423b4cb55
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) return navigate("/subcoffee")
  }, [isAuthenticated])

  return auth && user ? (
    <div className="flex flex-auto h-auto bg-gray-50">
      <SidebarOrganims />
      <div className="grow">
        <HeaderOrganism />
        <Outlet />
      </div>
    </div>
  ) : (
    <div className="flex-auto h-auto bg-gray-50">
      <HeaderOrganism />
<<<<<<< HEAD
      <div className="grow">
        <Outlet />
      </div>
=======
      <main className="">
        <Outlet />
      </main>
>>>>>>> 6a995bdc65b3e7472963d69ab005d8d423b4cb55
      <FooterOrganism />
    </div>
  );
};

export default Dashboard;
