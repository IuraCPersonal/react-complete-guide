import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import Expenses from "./Expenses";
import ExpensesChart from "./ExpensesChart";

import "./ExpenseList.css";

const ExpenseList = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filteredYearChangeHandler = (newFilteredYear) => {
    setFilteredYear(newFilteredYear);
  };

  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() == filteredYear;
  })

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onFilteredYearChange={filteredYearChangeHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <Expenses expenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default ExpenseList;
