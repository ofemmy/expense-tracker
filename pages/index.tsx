
import { Switch, Route, Routes, BrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import AddTransactionForm from "../components/AddTransactionForm";
import Expense from "../components/Expense";
import Home from "../components/Home";


import Layout from "../components/Layout";
import Income from "../components/income";



function SafeHydrate({ children }) {
  return (
    <div suppressHydrationWarning={true}> 
      {typeof window === 'undefined' ? null : children}
    </div>
  )
}
export const queryClient = new QueryClient();

export default function Index() { 
  return (
    <SafeHydrate>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/expense" component={Expense} />
          <Route path="/income" component={Income} />
          <Route path="/new" component={AddTransactionForm} />
          <Route path="/" component={Home} exact />
        </Switch>
      </Layout>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
    </SafeHydrate>
  );
}
