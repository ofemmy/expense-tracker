import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../db";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { month } = req.query;
  const { models } = await connectDB();
  //const trxList = (await models.Transaction.find({ month: +month }).lean()) || [];
  const trxList=await models.Transaction.find().sort({$natural:-1}).lean()
  res.statusCode = 200;
  res.json(trxList);
};
