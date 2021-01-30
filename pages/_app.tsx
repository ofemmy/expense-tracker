import "../styles/globals.css";
import React, { useEffect, useReducer } from "react";
import type { AppProps } from "next/app";
import db from "../utils/firebase"
import Layout from "../components/Layout";
import {insertIntoDB} from "../data/UserTransactions"
//insertIntoDB()
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
