import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import db from "../utils/firebase";
export default function Expense(params) {
  const [trx, settrx] = useState({});
  useEffect(() => {
    (async () => {
      const res = await db
        .collection("transactions")
        .where("month","==","January")
    })();
  }, []);
  return (
    <div>
      <Navbar />
      <main
        className="flex-1 relative z-0 overflow-y-auto focus:outline-none"
        tabIndex={0}
      >
        <Header />
        <div className="mt-6">{JSON.stringify(trx, null, " ")}</div>
      </main>
    </div>
  );
}
