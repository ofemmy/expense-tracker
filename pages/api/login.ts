import { connectDB } from "./../../db/index";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import { withIronSession } from "next-iron-session";
import User from "../../db/User";
async function handler(req, res: NextApiResponse) {
  if (req.method == "POST") {
    const { email, password } = JSON.parse(req.body);
    const { models } = await connectDB();
    const user: any = await models.User.findOne({ email });
    if (user) {
      const matched = await bcrypt.compare(password, user.password);
      if (matched) {
        req.session.set("user", {
          _id: user._id,
          name: user.name,
          email: user.email,
        });
        await req.session.save();
        return res.status(201).send({ msg: "Logged in" });
      }
      return res.status(403).send({ msg: "Invalid login credentials" });
    }
    return res.status(404).send({ msg: "User does not exist" });
  }
}

export default withIronSession(handler, {
  cookieName: "APPCOOKIE",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
  password: process.env.APP_PASSWORD,
});

