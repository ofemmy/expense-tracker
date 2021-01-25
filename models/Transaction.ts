import TransactionType from "./TransactionType";

interface Transaction {
  id: string;
  title: string;
  type: TransactionType;
  amount: number;
  isRecurring: boolean;
  date: Date;
}
export default Transaction;
