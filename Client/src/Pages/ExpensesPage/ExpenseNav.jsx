/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom';

const ExpenseNav = () => {
  return (
    <div className=' w-full flex justify-between bg-[#A7E6FF] text-black p-4 shadow-2xl'>
      <label htmlFor="allExpense" className='font-semibold' >Expenses</label>
      <Link to='add' className='text-blue-600'>All</Link>
    </div>
  )
}

export default ExpenseNav;
