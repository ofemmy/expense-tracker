import { NextApiResponse } from "next";
import handler from "../../middlewares"
import {AppNextApiRequest} from "../../types/AppNextApiRequest"
import { Transaction } from "../../db/Transaction";

export default  handler.post(async (req: AppNextApiRequest, res: NextApiResponse) => {
  //const { models } = await connectDB();
  if (req.method === "POST") {
    const {
      title,
      amount,
      isRecurring,
      category,
      date,
      type,
      owner,
    }: Transaction = JSON.parse(req.body);

    try {
      const TransactionModel = req.Transaction
        const newTrx = await TransactionModel.create(
          new Transaction(
            title,
            amount,
            isRecurring,
            new Date(date),
            type,
            category,
            owner
          )
        );
      res.statusCode = 200;
      return res.json({ msg: "success", data: newTrx });
    } catch (error) {
      res.statusCode = 500;
      return res.json({ msg: "error", data: null });
    }
  } else {
    res.statusCode = 405;
    return res.json({ msg: "Invalid HTTP method", data: null });
  }
});
