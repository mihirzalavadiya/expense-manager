import React from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';


const Expenses = (props) => {
    const { items } = props;
  return (
    <Card className="expenses">
      {items.map((item) => (
        <ExpenseItem key={item.id} expense={item} />
      ))}
    </Card>
  );
};

export default Expenses;
