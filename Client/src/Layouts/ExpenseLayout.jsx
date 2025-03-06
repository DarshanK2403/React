/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ExpenseNav from "../Pages/ExpensesPage/ExpenseNav";
import MainLayout from "../common/MainLayout";
import { Outlet } from "react-router-dom";

const ExpenseLayout = () => {
  const [isOpen, setIsOpen] = useState(true); // Track sidebar state

  return (
    <div>
      <MainLayout />
      <div>
        <ExpenseNav />
        <main
          className={`bg-gray-100 overflow-auto transition-all duration-300 mt-16 ${
            isOpen ? "ml-64" : "ml-16"
          }`}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default ExpenseLayout;
