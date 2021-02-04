import { ExpenseCategory } from "./../models/ExpenseCategory";
import create, { SetState, GetState } from "zustand";
import { UserTransactionType } from "./../data/UserTransactions";
import Currency from "../models/Currency";
import Months from "../models/Months";
import { UserTransactions } from "../data/UserTransactions";
import Transaction from "../models/Transaction";
type User = {
  _id: string; name: string; email: string
}
type AppState = {
  selectedMonth: Months;
  currency: Currency;
  setMonth: (mnt) => void;
  user?: User;
  setUser:(user:User)=>void;
};

const useAppStore = create<AppState>(
  (set: SetState<AppState>, get: GetState<AppState>) => ({
    user:undefined,
    selectedMonth: Months.January,
    currency: Currency.EUR,
    setMonth: (mnt) => set({ selectedMonth: mnt }),
    setUser:(user)=>set({user})
   
  })
);
export default useAppStore;
