import React from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';


const Expenses = (props) => {
    const { items } = props;
  return (
    <Card className="expenses">
      <ExpenseItem expense={items[0]} />
      <ExpenseItem expense={items[1]} />
      <ExpenseItem expense={items[2]} />
    </Card>
  );
};

export default Expenses;
