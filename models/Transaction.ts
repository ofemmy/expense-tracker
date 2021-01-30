import { ExpenseCategory } from "./ExpenseCategory";
import TransactionType from "./TransactionType";

type Transaction  = {
  type: TransactionType.Income;
  id: string;
  title: string;
  amount: number;
  isRecurring: boolean;
  date: Date;
  category?:ExpenseCategory
} | {
  type:TransactionType.Expense
  id: string;
  title: string;
  amount: number;
  isRecurring: boolean;
  date: Date;
  category:ExpenseCategory
}
export default Transaction;
