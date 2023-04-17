import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";


const Expenses = props => {
  let expensesContent = <p>No Expense Found</p>;

  if (props.expenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>
  }

  return <ul className="expenses-list">
    {props.expenses.map((element) => (
      <ExpenseItem
        key={Math.random()}
        date={element.date}
        title={element.title}
        amount={element.amount}
      />
    ))}
  </ul>
};

export default Expenses;
