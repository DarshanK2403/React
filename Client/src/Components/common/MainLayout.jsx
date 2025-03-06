/* eslint-disable no-unused-vars */
// src/components/DashboardLayout.jsx
import "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useState } from "react";

const MainLayout = () => {
  const [isOpen, setIsOpen] = useState(true); // Track sidebar state

  return (
    <div className="flex flex-col h-screen">
      {/* Main Navbar */}
      <Navbar />

      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="w-full bg-gray-100 p-5 overflow-auto mt-16 ">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
