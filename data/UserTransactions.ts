import { ExpenseCategory } from './../models/ExpenseCategory';
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
      category:ExpenseCategory.Food
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
      category:ExpenseCategory.Personal
    },
    {
      id: "4",
      title: "Miscellaneaous",
      type: TransactionType.Expense,
      amount: 400,
      date: new Date(),
      isRecurring: false,
      category:ExpenseCategory.Miscellaneous
    },
    {
      id: "5",
      title: "Television Purchase",
      type: TransactionType.Expense,
      amount: 200,
      date: new Date(),
      isRecurring: false,
      category:ExpenseCategory.Entertainment
    },
  ],
  February: [],
};
