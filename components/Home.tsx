import React from "react";
import Header from "./Header";
import Dashboard from "./Dashboard";
import DataTable from "./DataTable";
import Navbar from "./Navbar";
import { useQuery } from "react-query";
import { Transaction } from "../db/Transaction";
import { Progress, Skeleton, Stack } from "@chakra-ui/react";
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
      <Dashboard transactions={data} />
      <h2 className="max-w-6xl mx-auto mt-8 px-4 text-lg leading-6 font-medium text-gray-900 sm:px-6 lg:px-8">
        Recent transactions
      </h2>
      {isLoading ? (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
          <Stack>
            <Skeleton height="40px" />
            <Skeleton height="40px" />
            <Skeleton height="40px" />
            <Skeleton height="40px" />
            <Skeleton height="40px" />
            <Skeleton height="40px" />
            <Skeleton height="40px" />
          </Stack>
        </div>
      ) : (
        <DataTable transactions={data} />
      )}
    </>
  );
};

export default Home;
