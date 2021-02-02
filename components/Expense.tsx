import React from 'react'
import Navbar from "../components/Navbar"
import Header from "../components/Header"
const Expense = () => {
    return (
    <>
      <Navbar />
      <main
        className="flex-1 relative z-0 overflow-y-auto focus:outline-none"
        tabIndex={0}
      >
        <Header />
        <div className="mt-6">{JSON.stringify({}, null, " ")}</div>
      </main>
    </>
  );
}

export default Expense
