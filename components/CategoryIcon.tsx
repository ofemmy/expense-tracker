import React from "react";
import { ExpenseCategory } from "../models/ExpenseCategory";
import {Colorcodes} from '../data/Colorcodes'
type CategoryIconPropType = {
  category: ExpenseCategory;
};
export const CategoryIcon: React.FC<CategoryIconPropType> = ({ category }) => {
  return (
    <div 
    className="w-3 h-3 rounded-full flex items-center justify-items-center bg-blue-900"
    style={{ backgroundColor:`${Colorcodes[category]}` }}
    ></div>
  );
};
