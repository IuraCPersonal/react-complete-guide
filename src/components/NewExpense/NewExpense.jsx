import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [formVisibility, setFormVisibility] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };

    props.onAddExpense(expenseData);
  };

  const setFormVisibilityHandler = () => {
    setFormVisibility(true);
  }

  const cancelFormHandler = () => {
    setFormVisibility(false);
  }

  return (
    <div className="new-expense">
      {!formVisibility && <button onClick={setFormVisibilityHandler}>Add New Expense</button>}
      {formVisibility && <ExpenseForm onCancelForm={cancelFormHandler} onSaveExpenseData={saveExpenseDataHandler} />}
    </div>
  )
};

export default NewExpense;
