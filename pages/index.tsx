import Head from "next/head";
import useAppStore from "../store/AppStore"
import TransactionList from "../components/TransactionList";
export default function Home() {
 const transactions = useAppStore(state=>state.transactions);
 const selectedMonth = useAppStore(state=>state.selectedMonth)
  const trxList = transactions[selectedMonth] || []
  return (
    <div>
      <Head>
        <title>Expense Tracker Application</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>
      </Head>
      <TransactionList trxList={trxList}/>
    </div>
  );
}
