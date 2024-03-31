import React from "react";

import Header from "../components/Header";
import FooterOrganism from "../components/organisms/FooterOrganism";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex-auto h-screen py-20">
      <Header />
      <main className="mt-10">
        <Outlet />
      </main>
      <FooterOrganism />
    </div>
  );
};

export default Dashboard;
