import React,{useEffect} from "react";
import { Switch, Route, Routes, BrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import AddTransactionForm from "../components/AddTransactionForm";
import Expense from "../components/Expense";
import Home from "../components/Home";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import { withIronSession } from "next-iron-session";
import useAppStore from "../store/AppStore";


function SafeHydrate({ children }) {
  return (
    <div suppressHydrationWarning={true}>
      {typeof window === "undefined" ? null : children}
    </div>
  );
}
export const queryClient = new QueryClient();

export default function Index({ user }) {
  const setUser = useAppStore(state=>state.setUser)
    const appUser = useAppStore(state=>state.user)
    if (!appUser) {
      setUser(user)
    } 
  return (
    <SafeHydrate>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route path="/expense" component={Expense} />
              <Route path="/new" component={AddTransactionForm} />
              <Route path="/" component={Home} exact />
            </Switch>
          </Layout>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </SafeHydrate>
  );
}

export const getServerSideProps = withIronSession(
  async ({ req }) => {
    try {
      const user = req.session.get("user");
      if (!user) throw new Error("Unautorized");
      return {
        props: { user },
      };
    } catch (error) {
      return {
        redirect: {
          permanent: false,
          destination: "/login",
        },
      };
    }
  },
  {
    cookieName: "APPCOOKIE",
    cookieOptions: {
      secure: process.env.NODE_ENV == "production",
    },
    password: process.env.APP_PASSWORD,
  }
);
