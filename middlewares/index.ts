import nextConnect from "next-connect";
import authMiddleware from "./auth";
import databaseMiddleware from "./database"
const handler= nextConnect();
export default handler.use(authMiddleware,databaseMiddleware)