import { ExpenseCategory } from "./../models/ExpenseCategory";
import TransactionType from "../models/TransactionType";

export class Transaction {
  title: string;
  amount: number;
  isRecurring: boolean;
  date: Date;
  month: number;
  year: number;
  type: TransactionType;
  category: ExpenseCategory;
  id?: string;
  owner?:string
  constructor(
    title: string,
    amount: number,
    isRecurring: boolean,
    date: Date,
    type: TransactionType,
    category: ExpenseCategory,
    ownerId:string
  ) {
    this.title = title;
    this.amount = amount;
    this.isRecurring = isRecurring;
    this.type = type;
    this.category =
      type == TransactionType.Income ? ExpenseCategory.Income : category;
    this.month = date.getMonth();
    this.year = date.getFullYear();
    this.date=date;
    this.owner=ownerId;
  }
}
