import React from "react";
import './ExpenseDate.css'

const ExpenseDate = (props) => {

    const { month, day, year } = props;

  return (
    <div className="expense-date">
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year ">{year}</div>
    </div>
  );
};

export default ExpenseDate;
