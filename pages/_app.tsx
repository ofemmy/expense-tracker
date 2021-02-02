import "../styles/globals.css";
import React, { useEffect, useReducer } from "react";
import { AppProps } from "next/app";
import db from "../utils/firebase";
import Layout from "../components/Layout";
import { insertIntoDB } from "../data/UserTransactions";
import useAppStore from "../store/AppStore";
import { ExpenseCategory } from "../models/ExpenseCategory";
import TransactionType from "../models/TransactionType";
import Transaction from "../models/Transaction";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
