import { useContext } from "react";
import { Divider, Heading } from "@chakra-ui/react";
import Head from "next/head";
import Actionbar from "../components/Actionbar";
import Dashboard from "../components/Dashboard";
import TransactionList from "../components/TransactionList";
import { AppContext } from "./_app";
export default function Home() {
  const {
    state: { transactions,selectedMonth },
  } = useContext(AppContext);
  const trxList = transactions[selectedMonth]
  return (
    <div>
      <Head>
        <title>Expense Tracker Application</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Dashboard />
      <Actionbar />
      <Heading my={4} size="lg">
        Transaction History
      </Heading>
      <Divider />
      <TransactionList trxList={trxList}/>
    </div>
  );
}
