import { Divider,Heading } from "@chakra-ui/react";
import Head from "next/head";
import Actionbar from "../components/Actionbar";
import Dashboard from "../components/Dashboard";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Expense Tracker Application</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Dashboard />
      <Actionbar/>
      <Divider/>
      <Heading my={4} size="lg">Transaction History</Heading>
    </div>
  );
}
