import React, { useState } from "react";
import Header from "./Header";
import axios from "axios";
import Dashboard from "./Dashboard";
import DataTable from "./DataTable";
import Navbar from "./Navbar";
import { useQuery } from "react-query";
import { Transaction } from "../db/Transaction";
import useAppStore from "../store/AppStore";
import { Progress, Skeleton, Stack } from "@chakra-ui/react";
import {apiResult} from "../types/ApiResult"
async function fetchTransactions(
  month,
  page = 0,
  limit = 5
): Promise<apiResult> {
  return await axios.get(
    `/api/transactions?month=${month}&page=${page}&limit=${limit}`
  );
}
async function fetchSummary(
  month: number
): Promise<{
  month: number;
  totalIncome: number;
  totalExpense: number;
}> {
  return await (await axios.get(`/api/summary?month=${month}`)).data;
}

const Home = () => {
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(5);
  const selectedMonth = useAppStore((state) => state.selectedMonth);
  const { data, isLoading, isError, isFetched } = useQuery(
    ["transactions", selectedMonth.code, page, limit],
    () => fetchTransactions(selectedMonth.code, page, limit),
    { keepPreviousData: true } //refetchInterval:3000000}
  );
  // const summaryQuery = useQuery(
  //   ["summary",selectedMonth.code],
  //   () => fetchSummary(selectedMonth.code),
  // );

  // let summary = {
  //   totalIncome: data.totalIncome,
  //   totalExpense: data.totalExpense,
  //   month: selectedMonth.code,
  // };
  //if (isFetched) console.log(data.data.payload);
  return (
    <>
      <Navbar />
      <Header />
      {isLoading ? (
        <div className="max-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
          <Skeleton height="250px" />
        </div>
      ) : isError ? (
        <div>Error</div>
      ) : (
        <Dashboard
          summary={{
            totalIncome: data.data.payload.totalIncome,
            totalExpense: data.data.payload.totalExpense,
            month: selectedMonth.code,
          }}
        />
      )}
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
      ) : isError ? (
        <div>Error</div>
      ) : 
       <DataTable data={data} setPage={setPage} page={page} />
      }
    </>
  );
};

export default Home;
