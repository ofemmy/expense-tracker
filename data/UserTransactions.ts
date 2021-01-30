import { ExpenseCategory } from "./../models/ExpenseCategory";
import Months from "../models/Months";
import Transaction from "../models/Transaction";
import TransactionType from "../models/TransactionType";
import db from "../utils/firebase";
export type UserTransactionType = Partial<Record<Months, Transaction[]>>;

export const UserTransactions: UserTransactionType = {
  January: [
    {
      id: 1,
      title: "Bought groceries",
      type: TransactionType.Expense,
      amount: 400,
      date: new Date(),
      isRecurring: false,
      category: ExpenseCategory.Food,
      month:Months.February
    },
    {
      id: 2,
      title: "Salary",
      type: TransactionType.Income,
      amount: 1400,
      date: new Date(),
      isRecurring: true,
      month:Months.February
    },
    {
      id: 3,
      title: "Tithe",
      type: TransactionType.Expense,
      amount: 100,
      date: new Date(),
      isRecurring: false,
      category: ExpenseCategory.Personal,
      month:Months.January
    },
    {
      id: 4,
      title: "Miscellaneaous",
      type: TransactionType.Expense,
      amount: 400,
      date: new Date(),
      isRecurring: false,
      category: ExpenseCategory.Miscellaneous,
      month:Months.January
    },
    {
      id: 5,
      title: "Television Purchase",
      type: TransactionType.Expense,
      amount: 200,
      date: new Date(),
      isRecurring: false,
      category: ExpenseCategory.Entertainment,
      month:Months.January
    },
  ],
};

const data:Transaction[] = [
  {
    
    title: "Bought groceries",
    type: TransactionType.Expense,
    amount: 400,
    date: new Date(),
    isRecurring: false,
    category: ExpenseCategory.Food,
    month:Months.February
  },
  {

    title: "Salary",
    type: TransactionType.Income,
    amount: 1400,
    date: new Date(),
    isRecurring: true,
    month:Months.February
  },
  {
    
    title: "Tithe",
    type: TransactionType.Expense,
    amount: 100,
    date: new Date(),
    isRecurring: false,
    category: ExpenseCategory.Personal,
    month:Months.January
  },
  {
    
    title: "Miscellaneaous",
    type: TransactionType.Expense,
    amount: 400,
    date: new Date(),
    isRecurring: false,
    category: ExpenseCategory.Miscellaneous,
    month:Months.January
  },
  {
 
    title: "Television Purchase",
    type: TransactionType.Expense,
    amount: 200,
    date: new Date(),
    isRecurring: false,
    category: ExpenseCategory.Entertainment,
    month:Months.January
  },
]

export function insertIntoDB() {
  const trxCollection = db.collection("transactions");
  for (const trx of data) {
    trxCollection.add(trx)
  }
}
