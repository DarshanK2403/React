/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Home, BarChart, DollarSign, Settings, Menu } from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside
      className={`bg-[#D2E0FB] text-[#161D6F] shadow-lg h-screen p-5 transition-all duration-300 sticky top-0 left-0 pt-20 ${
        isOpen ? "w-64" : "w-16"
      }`}
    >
      {/* Sidebar Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mb-4 focus:outline-none hover:cursor-pointer rounded-md transition w-full flex items-center"
      >
        <Menu className="w-6 h-6" />
        {/* {isOpen && <span className="ml-2">Menu</span>} */}
      </button>

      {/* Navigation Menu */}
      <nav>
        <ul className="space-y-4">
          <li>
            <Link
              to="/dashboard"
              className="flex items-center hover:text-[#1679AB]"
            >
              <Home className="w-5 h-5" />
              {isOpen && <span className="ml-2">Dashboard</span>}
            </Link>
          </li>
          <li>
            <Link
              to="/expenses"
              className="flex items-center hover:text-[#1679AB]"
            >
              <DollarSign className="w-5 h-5" />
              {isOpen && <span className="ml-2">Expenses</span>}
            </Link>
          </li>
          <li>
            <Link
              to="/reports"
              className="flex items-center hover:text-[#1679AB]"
            >
              <BarChart className="w-5 h-5" />
              {isOpen && <span className="ml-2">Reports</span>}
            </Link>
          </li>
          <li>
            <Link
              to="/settings"
              className="flex items-center hover:text-[#1679AB]"
            >
              <Settings className="w-5 h-5" />
              {isOpen && <span className="ml-2">Settings</span>}
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
