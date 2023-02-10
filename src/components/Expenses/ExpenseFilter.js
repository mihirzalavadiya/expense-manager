import React from 'react';
import './ExpenseFilter.css';

const ExpenseFilter = (props) => {
  const dropDownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropDownChangeHandler}>
          {props?.items?.map((expense) => (
            <option value={`${expense?.date?.getFullYear()?.toString()}`}>
              {expense?.date?.getFullYear()?.toString()}
            </option>
          ))}
          <option value="all">All</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
