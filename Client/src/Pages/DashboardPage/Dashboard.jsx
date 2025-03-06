// import React from "react";

const Dashboard = () => {
  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 shadow rounded-lg">
          <h3 className="text-gray-600 text-lg">Total Income</h3>
          <p className="text-2xl font-bold text-green-600">$5,000</p>
        </div>
        <div className="bg-white p-6 shadow rounded-lg">
          <h3 className="text-gray-600 text-lg">Total Expenses</h3>
          <p className="text-2xl font-bold text-red-600">$2,000</p>
        </div>
        <div className="bg-white p-6 shadow rounded-lg">
          <h3 className="text-gray-600 text-lg">Balance</h3>
          <p className="text-2xl font-bold text-blue-600">$3,000</p>
        </div>
      </div>
      <div className="bg-white p-6 shadow rounded-lg mt-6">
        <h3 className="text-gray-600 text-lg mb-4">Recent Transactions</h3>
        <ul>
          <li className="flex justify-between py-2 border-b border-gray-400">
            <span>Electric Bill</span>
            <span className="text-red-600">- $100</span>
          </li>
          <li className="flex justify-between py-2 border-b border-gray-400">
            <span>Freelance Income</span>
            <span className="text-green-600">+ $500</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
