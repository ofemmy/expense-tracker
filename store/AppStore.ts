import create, { SetState, GetState } from "zustand";
import { UserTransactionType } from "./../data/UserTransactions";
import Currency from "../models/Currency";
import Months from "../models/Months";
import {UserTransactions} from "../data/UserTransactions"
type AppState = {
  transactions?: UserTransactionType;
  selectedMonth: string;
  currency: Currency;
  setMonth:(mnt)=>void
};

const useAppStore = create<AppState>(
  (set: SetState<AppState>, get: GetState<AppState>) => ({
    transactions:UserTransactions,
    selectedMonth: "January",
    currency: Currency.EUR,
    setMonth:mnt=>set({selectedMonth:mnt})
  })
);
export default useAppStore;
