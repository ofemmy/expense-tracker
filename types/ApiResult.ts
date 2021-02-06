import {Transaction} from "../db/Transaction"
export type apiResult = {
    msg: "success" | "error";
    data: {
      payload: {
        trxList: Transaction[];
        totalIncome: number;
        totalExpense: number;
      };
    };
    hasMore: boolean;
    totalResults: number;
    numOfResults: number;
  };