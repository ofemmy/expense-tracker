import { ironSession } from "next-iron-session";
const session = ironSession({
    password: process.env.APP_PASSWORD,
    cookieName: process.env.APP_COOKIENAME,
    cookieOptions: {
      secure: process.env.NODE_ENV == "production",
    }})
export default session;