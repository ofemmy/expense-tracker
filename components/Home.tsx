import React from "react";
import Header from "./Header";
import Dashboard from "./Dashboard";
import DataTable from "./DataTable";
import Navbar from "./Navbar";
import { useQuery } from "react-query";
import { Transaction } from "../db/Transaction";
async function fetchTransactions() {
  const trxList = await (await fetch("/api/transactions")).json();
  return trxList as Transaction[];
}
const Home = () => {
  const { data, isLoading } = useQuery("transactions", fetchTransactions);
  return (
    <>
      <Navbar />
      <Header />
      <Dashboard />
      <h2 className="max-w-6xl mx-auto mt-8 px-4 text-lg leading-6 font-medium text-gray-900 sm:px-6 lg:px-8">
        Recent transactions
      </h2>
      {isLoading ? <div>....Loading</div> : <DataTable transactions={data} />}
    </>
  );
};

export default Home;
