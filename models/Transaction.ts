import { ExpenseCategory } from "./ExpenseCategory";
import TransactionType from "./TransactionType";

type Transaction  ={
  type: TransactionType;
  id?: string;
  title: string;
  amount: number;
  isRecurring: boolean;
  month:string;
  date: Date;
  category?:ExpenseCategory}
// } | {
//   type:TransactionType.Expense
//   id?: string;
//   title: string;
//   amount: number;
//   isRecurring: boolean;
//   date: Date;
//   month:string;
//   category:ExpenseCategory
// }
export default Transaction;
