import mongoose from "mongoose";

import { UserSchema } from "../db/Userschema";
import { TransactionSchema } from "../db/Transactionschema";

async function databaseMiddleware(req, res, next) {
  try {
    if (!global.mongoose) {
      global.mongoose = await mongoose.connect(
        `mongodb+srv://Oladayo:${process.env.DB_PASSWORD}@cluster0.ygnwi.mongodb.net/expense-tracker?retryWrites=true&w=majority`,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: false,
        }
      );
      if (global.mongoose) {
        console.log("Successfully connected to db");
      }
    }
  } catch (error) {
    console.log(error);
  }

  if (!global.TransactionSchema) {
    global.TransactionSchema = global.mongoose.model(
      "Transaction",
      TransactionSchema
    );
  }
  if (!global.UserSchema) {
   
    global.UserSchema = global.mongoose.model("User", UserSchema);
  }
  req.mongoose = global.mongoose;
  req.User = global.UserSchema;
  req.Transaction = global.TransactionSchema;
  return next();
}
// const middleware = nextConnect();
// middleware.use(database);
export default databaseMiddleware;
