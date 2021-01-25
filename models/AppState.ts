import { UserTransactionType } from './../data/UserTransactions';
import Currency from "./Currency";
import Months from "./Months";
import Transaction from "./Transaction";

type AppState = {
  transactions: UserTransactionType;
  selectedMonth: Months;
  currency: Currency;
};
export default AppState;
