import { NextApiRequest } from "next";
import mongoose from 'mongoose';
export type AppNextApiRequest = NextApiRequest & {
    session: {
      get: <T>(arg: string) => T;
    };
    mongoose: typeof mongoose;
    Transaction:typeof mongoose.Model;
    User:typeof mongoose.Model
  };