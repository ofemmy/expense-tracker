import TransactionType from "./TransactionType";

interface Transaction {
  id: string;
  title: String;
  type: TransactionType;
  amount: Number;
  isRecurring: Boolean;
  date: Date;
}
export default Transaction;
