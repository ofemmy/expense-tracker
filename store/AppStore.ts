import { ExpenseCategory } from './../models/ExpenseCategory';
import create, { SetState, GetState } from "zustand";
import { UserTransactionType } from "./../data/UserTransactions";
import Currency from "../models/Currency";
import Months from "../models/Months";
import { UserTransactions } from "../data/UserTransactions";
import Transaction from "../models/Transaction";
type AppState = {
  transactions?: Transaction[];
  selectedMonth: Months;
  currency: Currency;
  setMonth: (mnt) => void;
  setTransactions: (trxList: Transaction[]) => void;
};

const useAppStore = create<AppState>(
  (set: SetState<AppState>, get: GetState<AppState>) => ({
    transactions: [],
    selectedMonth: Months.January,
    currency: Currency.EUR,
    setMonth: (mnt) => set({ selectedMonth: mnt }),
    setTransactions: (trxList) => {
      set({transactions:trxList})
    },
  })
);
export default useAppStore;
