/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  const Logout = async () => {
    alert("Btn Click");
  };

  return (
    <nav className="bg-[#161D6F] text-white shadow-md fixed top-0 left-0 right-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <h1 className="text-xl font-bold hover:cursor-pointer">
            Expense Manager
          </h1>
          <div>
            <a className=" hover:text-gray-200 hover:cursor-pointer font-medium">
              Logout
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
