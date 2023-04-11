import React from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";

import "./ExpenseList.css";

const ExpenseList = (props) => {
  return (
    <Card className="expenses">
      <div>
        {props.expenses.map((element) => (
          <ExpenseItem
            date={element.date}
            title={element.title}
            amount={element.amount}
          />
        ))}
      </div>
    </Card>
  );
};

export default ExpenseList;
