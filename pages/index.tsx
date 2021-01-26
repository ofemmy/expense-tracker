import Head from "next/head";
import useAppStore from "../store/AppStore";
import TransactionList from "../components/TransactionList";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

export default function Home() {
  const transactions = useAppStore((state) => state.transactions);
  const selectedMonth = useAppStore((state) => state.selectedMonth);
  const trxList = transactions[selectedMonth] || [];
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
      </main>
    </div>
  );
}
