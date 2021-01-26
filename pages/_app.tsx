import "../styles/globals.css";
import React, { createContext, useReducer } from "react";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
// import { ChakraProvider } from "@chakra-ui/react";
// import { theme } from "../styles/AppTheme";
// import Layout from "../components/Layout";
// import { Fonts } from "../styles/Fonts";
// import AppState from "../models/AppState";
// import { UserTransactions } from "../data/UserTransactions";
// import Months from "../models/Months";
// import Currency from "../models/Currency";
// import {reducer,Action} from "../store/AppStore";

// const initialState: AppState = {
//   transactions: UserTransactions,
//   selectedMonth: Months.January,
//   currency: Currency.EUR,
// };
// type MyAppContext ={
//   state:AppState,
//   dispatch: React.Dispatch<Action>
// }
//export const AppContext = createContext<MyAppContext>(null);
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
