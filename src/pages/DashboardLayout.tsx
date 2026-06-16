import React from "react";
import AdminSidebar from "../components/AdminSidebar";
import { Outlet } from "react-router";

function DashboardLayout() {
  return (
    <div className="adminContainer">
      <AdminSidebar />

      <Outlet />
    </div>
  );
}

export default DashboardLayout;
