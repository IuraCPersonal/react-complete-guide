import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";

import "./ExpenseList.css";

const ExpenseList = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filteredYearChangeHandler = (newFilteredYear) => {
    setFilteredYear(newFilteredYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onFilteredYearChange={filteredYearChangeHandler} />
        <p>{filteredYear}</p>
        <div>
          {props.expenses.map((element) => (
            <ExpenseItem
              key={Math.random()}
              date={element.date}
              title={element.title}
              amount={element.amount}
            />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default ExpenseList;
