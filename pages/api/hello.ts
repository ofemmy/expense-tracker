import { connectDB, loadTransactions } from "./../../db/index";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  const result = await loadTransactions();
  res.statusCode = 200;
  res.json(result);
};
