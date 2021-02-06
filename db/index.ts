import { TransactionSchema } from "./Transactionschema";
import { UserSchema } from "./Userschema";
import mongoose from "mongoose";
import { Transaction } from "./Transaction";
import TransactionType from "../models/TransactionType";
import { ExpenseCategory } from "../models/ExpenseCategory";
import bcrypt from "bcryptjs";
 const dbConnection:{isConnected:number}={isConnected:0}
export const connectDB = async function () {
  if (dbConnection.isConnected) {
    console.log(dbConnection.isConnected)
  }
  const connection = await mongoose.connect(
    `mongodb+srv://Oladayo:${process.env.DB_PASSWORD}@cluster0.ygnwi.mongodb.net/expense-tracker?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  console.log("Connecting to db")
  const User = connection.model("User", UserSchema);
  const Transaction = connection.model("Transaction", TransactionSchema);
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
  users.forEach(registerUser);

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

async function registerUser(user: {
  name: string;
  email: string;
  password: string;
}) {
  //hashPassword
  user.password = await bcrypt.hash(user.password, 10);
  const { models } = await connectDB();
  await models.User.create(user);
}
