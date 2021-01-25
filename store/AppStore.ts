import create, { SetState, GetState } from "zustand";
import { UserTransactionType } from "./../data/UserTransactions";
import Currency from "../models/Currency";
import Months from "../models/Months";
import {UserTransactions} from "../data/UserTransactions"
type AppState = {
  transactions?: UserTransactionType;
  selectedMonth: Months;
  currency: Currency;
};

const useAppStore = create<AppState>(
  (set: SetState<AppState>, get: GetState<AppState>) => ({
    transactions:UserTransactions,
    selectedMonth: Months.January,
    currency: Currency.EUR,
  })
);
export default useAppStore;
/*import AppState from "../models/AppState";
export type Action =
  | { type: "changeMonth"; payload: any }
  | { type: "changeCurrency"; payload: any };
export function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case "changeMonth":
      return { ...state, selectedMonth: action.payload };
    case "changeCurrency":
      return {...state,currency:action.payload};
    default:
      return state;
  }
}

*/
