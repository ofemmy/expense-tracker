import { withIronSession } from "next-iron-session";

export default withIronSession(
  (req, res) => {
    if (req.method == "POST") {
      req.session.destroy();
      res.status(200).send("Logged out");
    }
  },
  {
    cookieName: "APPCOOKIE",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
    password: process.env.APP_PASSWORD,
  }
);
