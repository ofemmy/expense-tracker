import mongoose from 'mongoose';
import { withIronSession } from "next-iron-session";
import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../db";
import User from "../../db/User";
import { match } from "assert";
type NextApiRequestWithSession = NextApiRequest & {
  session: {
    get: <T>(arg: string) => T;
  };
};
const BASE_URL = "localhost:3000/api/test";
async function handler(req: NextApiRequestWithSession, res: NextApiResponse) {
  let result;
  const month = req.query.month || new Date().getMonth();
  let page = +req.query.page;
  const limit = +req.query.limit || 3;
  const skip = (page - 1) * limit;

  try {
    const user = req.session.get<User>("user");
    if (!user) {
      throw new Error("No user");
    }
    const { models } = await connectDB();
    const ObjectId =  mongoose.Types.ObjectId;
    const result = await models.Transaction.aggregate([
      {$match:{owner: ObjectId ("601b83ede7e2300f53dbe73e"),month:0}},
     {$group:{ _id:"$type",total:{$sum:"$amount"}}}
    ]
    )
    let res2 = result.map(x=>({[x._id]:x.total}))
    console.log(res2)
    res.status(200).send(result);
  } catch (error) {
    res.status(404).send({ msg: "error", result: null });
  }
}
export default withIronSession(handler, {
  password: process.env.APP_PASSWORD,
  cookieName: process.env.APP_COOKIENAME,
  cookieOptions: {
    secure: process.env.NODE_ENV == "production",
  },
});
