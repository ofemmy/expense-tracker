import  {AppNextApiRequest}  from './../../types/AppNextApiRequest';
import { NextApiResponse } from "next";
import handler from "../../middlewares"
import User from "../../db/User";
import mongoose from "mongoose";




const BASE_URL = "localhost:3000/api/transactions";
export default handler.get(async (req: AppNextApiRequest, res: NextApiResponse)=> {
  const month = parseInt(req.query.month as string);
  let result;
  let page = +req.query.page;
  const limit = +req.query.limit || 5;
  const skip = (page) * limit;

  try {
    const user = req.session.get<User>("user");
    if (!user) {
      throw new Error("No user");
    }
    //const { models } = await connectDB();
    const ObjectId = mongoose.Types.ObjectId;
    const filter = { owner: ObjectId(user._id),month};
    const TransactionModel = req.Transaction
    const totalNumOfDocs = await TransactionModel.countDocuments(filter);
    const trxList = await TransactionModel.find(filter, "-__v", {
      limit: limit,
      skip: skip,
      sort: { $natural: -1 },
    }).lean();
    const summary = await TransactionModel.aggregate([
      { $match: filter },
     { $group: { _id: "$type", total: { $sum: "$amount" } } },
    ]);
    let totalIncome=0;let totalExpense=0;
    if (summary.length>0) {
      for (const obj of summary) {
        if (obj._id==="INCOME") {
          totalIncome=obj.total
        }
        if(obj._id==="EXPENSE"){
            totalExpense=obj.total
        }
      }}
    const hasMore = totalNumOfDocs - skip <= limit;
    result = {
      msg: "success",
      totalResults: totalNumOfDocs,
      numOfResults: trxList.length,
      hasMore:!hasMore,
      payload: {trxList,totalIncome,totalExpense},
    };
    //console.log("I ran again",result)
    res.status(200).send(result);
  } catch (error) {
    res.status(404).send({ msg: "error", result: null });
  }
})
