import mongoose from "mongoose";
import nextConnect from 'next-connect';
import { ironSession } from "next-iron-session";
import { NextApiRequest, NextApiResponse } from "next";
import handler from "../../middlewares"
import {AppNextApiRequest} from "../../types/AppNextApiRequest"
import { connectDB } from "../../db";
import User from "../../db/User";



export default handler.get(async (req: AppNextApiRequest, res: NextApiResponse) =>{
    const month = parseInt(req.query.month as string);
    console.log(month)
  let result={month,totalIncome:0,totalExpense:0}; //default response returned
  try {
    const user = req.session.get<User>("user");
    if (!user) {
      throw new Error("No user");
    }
    //const { models } = await connectDB();
    const ObjectId = mongoose.Types.ObjectId;
    const TransactionModel = req.Transaction
    const summary = await TransactionModel.aggregate([
      { $match: { owner: ObjectId(user._id), month } },
     { $group: { _id: "$type", total: { $sum: "$amount" } } },
    ]);
    //console.log(summary)
    if (summary.length>0) {
      for (const obj of summary) {
        if (obj._id==="INCOME") {
          result.totalIncome=obj.total
        }
        if(obj._id==="EXPENSE"){
            result.totalExpense=obj.total
        }
      }
      //console.log(result)
        // let res2 = summary.map(x=>({[x._id]:x.total}))
        // result={
        //     month,
        //     //data:res2
        // }
    }
 
    res.status(200).send(result);
  } catch (error) {
    res.status(404).send({ msg: "error", result: null });
  }
})

