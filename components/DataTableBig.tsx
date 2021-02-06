import React from "react";
import CashSVG from "./svgs/CashSVG";
import { DataTableProps } from "./DataTableSmall";
import { formatDate, formatNumberToCurrency } from "../utils";
import TransactionType from "../models/TransactionType";
import { CategoryIcon } from "./CategoryIcon";
import { de } from "date-fns/locale"; 
import {format  } from "date-fns";

const DataTableBig: React.FC<DataTableProps> = ({
  data,
  currency,
  setPage,
  page,
}) => {
  return (
    <div className="">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col mt-2">
          {data.payload&&data.payload.trxList.length > 0 ? (
            <div className="align-middle min-w-full overflow-x-auto shadow overflow-hidden sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Transaction
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {data.payload.trxList.map(
                    ({ _id, title, amount, date, type, category }) => (
                      <tr className="bg-white" key={_id}>
                        <td className="max-w-0 w-full px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          <div className="flex ">
                            <a
                              href="#"
                              className="group inline-flex space-x-2 truncate text-sm items-center justify-items-center"
                            >
                              {type == TransactionType.Expense ? (
                                <CategoryIcon category={category} />
                              ) : (
                                <CashSVG />
                              )}
                              <p className="text-gray-500 truncate group-hover:text-gray-900">
                                {title}
                              </p>
                            </a>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right whitespace-nowrap text-sm">
                          <span
                            className={`${
                              type == TransactionType.Income
                                ? "text-green-500"
                                : "text-red-500"
                            } font-medium`}
                          >
                            {type == TransactionType.Income ? "+" : "-"}
                            {formatNumberToCurrency(amount, currency)}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                          {format(new Date(date),"do LLL yyyy",{locale:de})}
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>

              <nav
                className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
                aria-label="Pagination"
              >
                <div className="hidden sm:block ">
                  <p className="text-sm text-gray-700">
                    Showing Page
                    <span className="font-medium px-1">{page+1}</span>
                    {/* to
                    <span className="font-medium px-1">
                      {data.numOfResults}
                    </span> */}
                    of
                    <span className="font-medium px-1">
                      {data.totalResults}
                    </span>
                    results
                  </p>
                </div>
                <div className="flex-1 flex justify-between sm:justify-end mr-5">
                  <button
                    onClick={() => setPage((old) => Math.max(old - 1, 0))}
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    disabled={page === 0}
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => {
                      data.hasMore ? setPage((old) => old + 1) : null;
                    }}
                    disabled={!data.hasMore}
                    className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                  >
                    Next
                  </button>
                </div>
              </nav>
            </div>
          ) : (
            <div className="mt-2">
          <p>No transactions yet to display</p>
        </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DataTableBig;
