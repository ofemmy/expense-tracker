import { loadData } from "../../db";

export default async (req, res) => {
  const response = await loadData();
  res.json({ msg: "Success", data: response });
};
