import React, { useEffect } from "react";
import ScaleSVG from "./svgs/ScaleSVG";
import useAppStore from "../store/AppStore";
import TransactionType from "../models/TransactionType";
import { Transaction } from "../db/Transaction";
import { formatNumberToCurrency } from "../utils";
import { Doughnut } from "react-chartjs-2";
import { useQuery } from "react-query";
type DashboardPropTypes = {
  summary: {month:number, totalIncome:number,totalExpense:number };
};

const Dashboard: React.FC<DashboardPropTypes> = ({ summary }) => {
 
  const currency = useAppStore((state) => state.currency);
  const selectedMonth = useAppStore((state) => state.selectedMonth);

  const graphData = {
    labels: [
      "Income",
      "Expenses",
      //'Yellow',
      //'Test','Another'
    ],
    datasets: [
      {
        data: [summary.totalIncome, summary.totalExpense],
        backgroundColor: [
          "#10a335",
          "#ec0b3c",
          //'#36A2EB',
          //'#e4af2a',

          // '#58197c3'
        ],
        hoverBackgroundColor: [
          "#10a335",
          "#ec0b3c",
          //'#36A2EB',
          //'#FFCE56',

          //'#58197c3'
        ],
      },
    ],
  };
  return (
    <div className="max-w-6xl px-4 sm:px-6 mt-6 lg:px-8">
      <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
        {selectedMonth.name}
      </h2>

      <div className="mt-4 grid lg:h-40 grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {/* Card component */}
        <div className="bg-white overflow-hidden shadow rounded-lg relative">
          <div className="p-5">
            <div className="flex items-center lg:mt-4">
              <div className="flex-shrink-0">
                <ScaleSVG />
              </div>
              <div className="ml-1 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Total Income
                  </dt>
                  <dd>
                    <div className="text-lg font-medium text-gray-800">
                      {formatNumberToCurrency(summary.totalIncome, currency)}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="bg-green-400 px-5 py-3 lg:absolute bottom-0 left-0 right-0">
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-white hover:text-gray-900"
              >
                View all
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg relative">
          <div className="p-5">
            <div className="flex items-center lg:mt-4">
              <div className="flex-shrink-0">
                <ScaleSVG />
              </div>
              <div className="ml-1 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Total Expenses
                  </dt>
                  <dd>
                    <div className="text-lg font-medium text-gray-900">
                      {formatNumberToCurrency(summary.totalExpense, currency)}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="bg-red-400 px-5 py-3 lg:absolute bottom-0 left-0 right-0">
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-white hover:text-gray-900"
              >
                View all
              </a>
            </div>
          </div>
        </div>
        {
          summary?
        <div className="bg-white overflow-hidden shadow rounded-lg lg:py-4 py-2">
          
             <Doughnut
            data={graphData}
            options={{
              maintainAspectRatio: false,
              legend: {
                position: "right",
                align: "center",
                labels: { usePointStyle: true },
              },
              layout: { padding: { right: 10, left: 10 } },
            }}
          />
         
         
        </div>:null}
      </div>
    </div>
  );
};
function calculateTotal(trxList: Transaction[] = []) {
  const result = {
    totalIncome: 0,
    totalExpenditure: 0,
  };
  if (trxList.length !== 0) {
    const incomes = trxList.filter(
      (trx) => trx.type === TransactionType.Income
    );
    const expenditures = trxList.filter(
      (trx) => trx.type === TransactionType.Expense
    );
    result.totalIncome = incomes.reduce((acc, trx) => acc + trx.amount, 0);
    result.totalExpenditure = expenditures.reduce(
      (acc, trx) => acc + trx.amount,
      0
    );
  }

  return result;
}
export default Dashboard;
