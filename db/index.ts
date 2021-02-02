import { transactionSchema } from "./Transactionschema";
import { userSchema } from "./Userschema";
import mongoose from "mongoose";
import { Transaction } from "./Transaction";
import TransactionType from "../models/TransactionType";
import { ExpenseCategory } from "../models/ExpenseCategory";

export const connectDB = async function () {
  const connection = await mongoose.createConnection(
    `mongodb+srv://Oladayo:${process.env.DB_PASSWORD}@cluster0.ygnwi.mongodb.net/expense-tracker?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  const User = connection.model("User", userSchema);
  const Transaction = connection.model("Transaction", transactionSchema);
  return {
    connection,
    models: {
      User,
      Transaction,
    },
  };
};

export async function loadData() {
  const res = { err: null, count: null };
  const users = [
    { name: "John Doe", email: "johndoe@gmail.com", password: "123454567" },
    { name: "Lisa Tor", email: "lisator@gmail.com", password: "ritapoll" },
    {
      name: "Mark Hankins",
      email: "markhankins@gmail.com",
      password: "kfkffo99r9r",
    },
  ];
  const { models } = await connectDB();
  models.User.collection.insertMany(users, (err, docs) => {
    if (err) {
      res.err = err;
    } else {
      console.log(docs.insertedCount);
      res.count = docs.insertedCount;
    }
  });
  return res;
}
export async function loadTransactions() {
  const { models } = await connectDB();
  try {
    const res = models.Transaction.create([
      new Transaction(
        "Test transaction",
        2000,
        false,
        new Date("12/01/2020"),
        TransactionType.Expense,
        ExpenseCategory.Debt,
        "60175b5a9964f0ca42a82c01"
      ),
      new Transaction(
        "Test transaction 2",
        2000,
        false,
        new Date("12/05/2022"),
        TransactionType.Expense,
        ExpenseCategory.Personal,
        "60175b5a9964f0ca42a82c01"
      ),
      new Transaction(
        "Test transaction 3",
        2000,
        false,
        new Date("12/11/2021"),
        TransactionType.Expense,
        ExpenseCategory.Clothing,
        "60175b5a9964f0ca42a82c01"
      ),
    ]);
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
}
