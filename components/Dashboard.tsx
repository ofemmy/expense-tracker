import React,{useEffect} from "react";
import ScaleSVG from "./svgs/ScaleSVG";
import  useAppStore  from "../store/AppStore";
import TransactionType from "../models/TransactionType";
import Transaction from "../models/Transaction";
import {formatNumberToCurrency } from "../utils";
import { Doughnut } from "react-chartjs-2";

const Dashboard = () => {
   const currency = useAppStore(state=>state.currency)
   const transactions = useAppStore(state=>state.transactions)
   const selectedMonth = useAppStore(state=>state.selectedMonth)
   const { totalIncome, totalExpenditure } = calculateTotal(
    transactions[selectedMonth] || []
  );
 
  const data = {
    labels: [
      'Red',
      'Green',
      'Yellow',
      'Test','Another'
    ],
    datasets: [{
      data: [300, 50, 100,75,34],
      backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#e4af2a',
      '#1f7033',
      '#58197c3'
      ],
      hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56',
      '#1f7033',
      '#58197c3'
      ]
    }]
  };
  return (
    <div className="max-w-6xl px-4 sm:px-6 mt-6 lg:px-8">
      <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
        {selectedMonth}
      </h2>
     
      <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
                      {formatNumberToCurrency(totalIncome,currency)}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="bg-green-400 px-5 py-3 lg:absolute bottom-0 left-0 right-0">
              <div className="text-sm">
                  <a href="#" className="font-medium text-white hover:text-gray-900">View all</a>
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
                    {formatNumberToCurrency(totalExpenditure,currency)}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="bg-red-400 px-5 py-3 lg:absolute bottom-0 left-0 right-0">
              <div className="text-sm">
                  <a href="#" className="font-medium text-white hover:text-gray-900">View all</a>
              </div>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg lg:py-4 py-2">
          <Doughnut
          data={data}
          options={{ maintainAspectRatio: false,legend:{position:"right",align:"center",
          labels:{usePointStyle:true} },layout:{padding:{right:10,left:10}}}}
          />
        </div>
      </div>
    </div>
  );
};
function calculateTotal(trxList: Transaction[]) {
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
