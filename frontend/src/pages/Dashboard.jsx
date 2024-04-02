import React from "react";

import FooterOrganism from "../components/organisms/FooterOrganism";
import { Outlet } from "react-router-dom";
import HeaderOrganism from "../components/organisms/HeaderOrganism";

const Dashboard = () => {
  return (
    <div className="flex-auto h-screen py-6">
      <HeaderOrganism />
      <main className="mt-8">
        <Outlet />
      </main>
      <FooterOrganism />
    </div>
  );
};

export default Dashboard;
