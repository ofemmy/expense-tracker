import Head from "next/head";
import useAppStore from "../store/AppStore";
import TransactionList from "../components/TransactionList";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";
import DataTable from "../components/DataTable";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Expense Tracker Application</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <Navbar/>
      <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none" tabIndex={0}>
        <Header/>
        <Dashboard/>
        <h2 className="max-w-6xl mx-auto mt-8 px-4 text-lg leading-6 font-medium text-gray-900 sm:px-6 lg:px-8">
          Recent transactions
        </h2>
        <DataTable/>
      </main>
    </div>
  );
}
