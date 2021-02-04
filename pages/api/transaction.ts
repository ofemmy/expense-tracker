import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../db";
import { Transaction } from "../../db/Transaction";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { models } = await connectDB();
  if (req.method === "POST") {
    const {
      title,
      amount,
      isRecurring,
      category,
      date,
      type,
    }: Transaction = JSON.parse(req.body);

    try {
        const newTrx = await models.Transaction.create(
          new Transaction(
            title,
            amount,
            isRecurring,
            new Date(date),
            type,
            category,
            "60175b5a9964f0ca42a82c01"
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
};
