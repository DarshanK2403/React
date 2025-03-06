/* eslint-disable no-unused-vars */
import Navbar from "./Components/common/Navbar";
import Home from "./Components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import axios from "axios";
import SigninPage from "./Components/SigninPage";
import SignupPage from "./Components/SignupPage";
import Dashboard from "./Components/DashboardPage/Dashboard";
import DashboardLayout from "./Components/common/MainLayout";
import ExpensesPage from "./Components/ExpensesPage/ExpensesPage";
import ReportsPage from "./Components/ReportsPage/ReportsPage";
import SettingsPage from "./Components/SettingsPage/SettingsPage";
import AddExpenseForm from "./Components/ExpensesPage/AddExpenseForm";
import ExpenseLayout from "./Components/ExpensesPage/ExpenseLayout";
import PrivateRoute from "./Components/hooks/PrivateRoute";

function App() {
  axios.defaults.baseURL = "http://localhost:3000/";

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />

          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<Dashboard />} />
            </Route>

            <Route path="auth" element={<h1>Welcome</h1>} />

            {/* Settings Route */}
            <Route path="settings" element={<SettingsPage />} />
            {/* Report Route */}
            <Route path="reports" element={<ReportsPage />} />

            {/* Expense Route */}
            <Route path="/expenses" element={<ExpenseLayout />}>
              <Route index element={<ExpensesPage />} />
              <Route path="add" element={<AddExpenseForm />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
