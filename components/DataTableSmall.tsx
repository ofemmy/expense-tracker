import React from 'react'
import Currency from '../models/Currency';
import {Transaction} from '../db/Transaction';
import TransactionType from "../models/TransactionType";
import { formatDate, formatNumberToCurrency } from "../utils";
import CashSVG from "./svgs/CashSVG";
import ChevRightSVG from "./svgs/ChevRightSVG";
export type DataTableProps = {
   trxList:Transaction[],
   currency?:Currency 
}
const DataTableSmall:React.FC<DataTableProps> = ({trxList,currency}) => {
    return (
        <div className="shadow sm:hidden">
          <ul className="mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden">
            {trxList
              ? trxList.map(({ _id, title, amount, date,type }) => (
                  <li key={_id}>
                    <a
                      href="#"
                      className="block px-4 py-4 bg-white hover:bg-gray-50"
                    >
                      <span className="flex items-center space-x-4">
                        <span className="flex-1 flex space-x-4 truncate">
                          <CashSVG />
                          <span className="flex flex-col text-gray-500 text-sm truncate">
                            <span className="truncate">{title}</span>
                            <span className={`${type==TransactionType.Income?'text-green-500':'text-red-500'} font-medium`}>
                        {type == TransactionType.Income ? "+" : "-"}
                        {formatNumberToCurrency(amount, currency)}
                      </span>
                            <span>{formatDate(date)}</span>
                          </span>
                        </span>
                        <ChevRightSVG test={(e) => console.log(e)} />
                      </span>
                    </a>
                  </li>
                ))
              : null}
          </ul>
          <nav
            className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200"
            aria-label="Pagination"
          >
            <div className="flex-1 flex justify-between">
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500"
              >
                Previous
              </a>
              <a
                href="#"
                className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500"
              >
                Next
              </a>
            </div>
          </nav>
        </div>
      );
}

export default DataTableSmall
