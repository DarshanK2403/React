/* eslint-disable no-unused-vars */
import React from "react";
import { useForm } from "react-hook-form";

const AddExpenseForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-2xl m-auto">
        <div className="flex flex-col mt-4">
          <label htmlFor="date">Title</label>
          <input
            type="Text"
            className="border border-gray-400 p-2 mt-2 focus:outline-none"
            {...register("title")}
          />
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="description">Description</label>
          <textarea
            className="border border-gray-400 p-2 mt-2 focus:outline-none resize-none"
            {...register("description")}
          />
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            className="border border-gray-400 p-2 mt-2 focus:outline-none"
            {...register("amount")}
          />
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="date">Expense Date</label>
          <input
            type="date"
            className="border border-gray-400 p-2 mt-2 focus:outline-none"
            {...register("expenseDate")}
          />
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="category">Category</label>
          <select
            className="border border-gray-400 p-2 mt-2 focus:outline-none"
            {...register("category")}
          >
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Rent">Rent</option>
            <option value="Utilities">Utilities</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="account">Account</label>
          <select
            className="border border-gray-400 p-2 mt-2 focus:outline-none"
            {...register("account")}
          >
            <option value="Cash">Cash</option>
            <option value="Bank">Bank</option>
            <option value="UPI">UPI</option>
          </select>
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="account">Account</label>
          <select
            className="border border-gray-400 p-2 mt-2 focus:outline-none"
            {...register("paymentMethod")}
          >
            <option value="creditCard">Creadit Card</option>
            <option value="debitCard">Debit Card</option>
            <option value="wallet">Wallet</option>
          </select>
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="vendor">Vendor</label>
          <input
            type="Text"
            className="border border-gray-400 p-2 mt-2 focus:outline-none"
            {...register("vendor")}
          />
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="receipt">Receipt</label>
          <input
            type="file"
            className="border border-gray-400 p-2 mt-2 focus:outline-none"
            {...register("receipt")}
          />
        </div>
        <button
          type="submit"
          className="mt-4 border border-black px-4 py-2 bg-[#3572EF] text-white rounded-sm font-bold hover:bg-[#161D6F] hover:cursor-pointer transition-colors"
        >
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default AddExpenseForm;
