import Months from "../models/Months";
import Transaction from "../models/Transaction";
import TransactionType from "../models/TransactionType";

export type UserTransactionType = Partial<Record<Months, Transaction[]>>;
export const UserTransactions: UserTransactionType = {
  January: [
    {
      id: "1",
      title: "Bought groceries",
      type: TransactionType.Expense,
      amount: 400,
      date: new Date(),
      isRecurring: false,
    },
    {
      id: "2",
      title: "Salary",
      type: TransactionType.Income,
      amount: 1400,
      date: new Date(),
      isRecurring: true,
    },
    {
      id: "3",
      title: "Tithe",
      type: TransactionType.Expense,
      amount: 100,
      date: new Date(),
      isRecurring: false,
    },
    {
      id: "4",
      title: "Miscellaneaous",
      type: TransactionType.Expense,
      amount: 400,
      date: new Date(),
      isRecurring: false,
    },
    {
      id: "5",
      title: "Television Purchase",
      type: TransactionType.Expense,
      amount: 700,
      date: new Date(),
      isRecurring: false,
    },
  ],
  February: [],
};
