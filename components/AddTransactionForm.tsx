import React, { useState } from "react";
import { useForm,Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { date, number, object, string, mixed } from "yup";
import Navbar from "./Navbar";
import { Transaction } from "../db/Transaction";
import { ExpenseCategory } from "../models/ExpenseCategory";
import TransactionType from "../models/TransactionType";
import { useMutation } from "react-query";
import { queryClient } from "../pages/index";
import { useToast } from "@chakra-ui/react";
import useAppStore from "../store/AppStore";
import DatePicker, { registerLocale } from "react-datepicker";

import { de } from "date-fns/locale";
import CustomInput from "./CustomInput";
import "react-datepicker/dist/react-datepicker.css";
const schema = object().shape({
  title: string().required("Title is required"),
  type: mixed().required("A transaction type must be chosen"),
  amount: number()
    .integer()
    .positive("Invalid amount")
    .required("Amount is required"),
  category: string().required("Category is required"),
  date: date().required("Date is required"),
});
registerLocale("de", de);
export default function AddTransactionForm() {
  const categories = Object.keys(ExpenseCategory).sort((a, b) =>
    a.localeCompare(b)
  );
  const user = useAppStore((state) => state.user);
  const [isRecurring, setisRecurring] = useState(false);
  const [date, setDate] = useState(new Date());
  const { handleSubmit, register, reset, watch, errors,control } = useForm({
    resolver: yupResolver(schema),
  });
  const toast = useToast();
  const mutation = useMutation(
    (data: Transaction) =>
      fetch("/api/transaction", {
        method: "POST",
        body: JSON.stringify(data),
      }),
    {
      onSuccess: (responseData) => {
        reset(); //Reset form state
        toast({
          title: "Success.",
          description: "Transaction saved successfully.",
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top-right",
        });
        queryClient.invalidateQueries("transactions");
      },
    }
  );
  const onSubmit = (data: Transaction) => {
    data.isRecurring = isRecurring;
    data.owner = user._id;
    mutation.mutate(data);
  };
  return (
    <div>
      <Navbar />
      <main
        className="flex-1 relative z-0 overflow-y-auto focus:outline-none px-10 md:px-0"
        tabIndex={0}
      >
        <div className="max-w-xl mx-auto mt-16">
          <div className="flex flex-col bg-white shadow-xl overflow-y-scroll rounded-sm">
            <div className="px-4 py-6 bg-blue-500 sm:px-6 text-white">
              <div className="flex items-start justify-between space-x-3">
                <div className="space-y-1">
                  <h2 id="slide-over-heading" className="text-lg font-medium ">
                    New Transaction
                  </h2>
                  <p className="text-sm ">
                    Get started by filling in the information below to create a
                    new transaction.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-between">
              <div className="px-4 sm:px-6">
                <form
                  className="space-y-6 pt-6 pb-5"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="">
                    <div className="space-x-4 flex">
                      <div className="flex items-center">
                        <input
                          id="income"
                          name="type"
                          type="radio"
                          className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                          defaultValue={TransactionType.Income}
                          ref={register}
                        />
                        <label
                          htmlFor="income"
                          className="ml-3 block text-sm font-medium text-gray-700"
                        >
                          Income
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="expense"
                          name="type"
                          type="radio"
                          className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                          ref={register}
                          defaultValue={TransactionType.Expense}
                        />
                        <label
                          htmlFor="expense"
                          className="ml-3 block text-sm font-medium text-gray-700"
                        >
                          Expense
                        </label>
                      </div>
                    </div>
                    {errors.type && (
                      <p className="mt-2 text-sm text-red-600" id="email-error">
                        {errors.type.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Title
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="title"
                        id="title"
                        className={`${
                          errors.title ? "border-red-600" : "border-gray-300"
                        } block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500  rounded-sm`}
                        ref={register}
                      />
                    </div>
                    {errors.title && (
                      <p className="mt-2 text-sm text-red-600" id="email-error">
                        {errors.title.message}
                      </p>
                    )}
                  </div>
                  <div className="flex justify-between">
                    <div className="w-5/12">
                      <label
                        htmlFor="amount"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Amount
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-500 sm:text-sm">€</span>
                        </div>
                        <input
                          type="text"
                          name="amount"
                          id="amount"
                          className={`${
                            errors.amount ? "border-red-600" : "border-gray-300"
                          } focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 pr-12 sm:text-sm  rounded-sm`}
                          placeholder="0.00"
                          aria-describedby="transaction_amount-currency"
                          ref={register}
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <span
                            className="text-gray-500 sm:text-sm"
                            id="transaction_amount-currency"
                          >
                            EUR
                          </span>
                        </div>
                      </div>
                      {errors.amount && (
                        <p
                          className="mt-2 text-sm text-red-600"
                          id="email-error"
                        >
                          Please enter a valid amount
                        </p>
                      )}
                    </div>
                    <div className="w-5/12">
                      <label
                        htmlFor="date"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Date
                      </label>
                      <Controller
                      name="date"
                      control={control}
                      defaultValue=""
                      render={({onChange,value})=>(<DatePicker onChange={onChange} selected={value} customInput={<CustomInput/>} locale="de" closeOnScroll={true}/>)}
                      />
                      {/* <DatePicker
                      selected={date}
                      onChange={date=>setDate(date)}
                      customInput={<CustomInput/>}
                      closeOnScroll={true}
                      locale="de"
                      /> */}
                      {/* <div className="mt-1">
                        <input
                          type="text"
                          name="date"
                          id="date"
                          className={`${
                            errors.date ? "border-red-600" : "border-gray-300"
                          } block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 rounded-sm`}
                          placeholder="YYYY-MM-DD"
                          ref={register}
                        />
                      </div> */}
                      {errors.date && (
                        <p
                          className="mt-2 text-sm text-red-600"
                          id="email-error"
                        >
                          Please enter valid date
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center">
                      <button
                        type="button"
                        onClick={(e) => setisRecurring(!isRecurring)}
                        aria-pressed="false"
                        aria-labelledby="toggleLabel"
                        className={`${
                          isRecurring ? "bg-blue-900" : "bg-gray-200"
                        }  relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                      >
                        <span className="sr-only">isRecurring</span>

                        <span
                          aria-hidden="true"
                          className={`${
                            isRecurring ? "translate-x-5" : "translate-x-0"
                          } pointer-events-none  inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                        ></span>
                      </button>
                      <span className="ml-3" id="toggleLabel">
                        <span className="text-sm font-medium text-gray-700">
                          Recurring{" "}
                        </span>
                        <span className="text-sm text-gray-500">
                          (monthly recurring expense/income)
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="">
                    <label
                      htmlFor="category"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Category
                    </label>
                    <div className="mt-1">
                      <select
                        id="category"
                        name="category"
                        className={`${
                          errors.category ? "border-red-600" : "border-gray-300"
                        } mt-1 block w-full pl-3 pr-10 py-2 text-base focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-sm`}
                        ref={register}
                        defaultValue="default"
                      >
                        <option value="default" disabled>
                          Select Category
                        </option>
                        {categories.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.category && (
                      <p className="mt-2 text-sm text-red-600" id="email-error">
                        Please select a category
                      </p>
                    )}
                  </div>

                  {/* action buttons here */}
                  <div className="flex-shrink-0 px-4 py-4 flex justify-end">
                    <button
                      type="button"
                      className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className={`ml-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${
                        mutation.isLoading ? "bg-gray-500" : "bg-blue-600"
                      } hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                      disabled={mutation.isLoading}
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
