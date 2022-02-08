import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {

    const { expenseTitle, expenseAmount, expenseDate } = props.expense;

  const month = expenseDate.toLocaleString("en-US", { month: "long" });
  const day = expenseDate.toLocaleString("en-US", { day: "2-digit" });
  const year = expenseDate.getFullYear();

  const [title, setTitle] = React.useState(expenseTitle);

  const clickHandler = () => {
    setTitle("Macbook Pro");
  };


  return (
    <Card className="expense-item">
      <ExpenseDate month={month} day={day} year={year} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
      <button onClick={clickHandler}>
        Change Title
      </button>
    </Card>
  );
};

export default ExpenseItem;
