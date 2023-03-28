import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [entredTitle, setEntredTitle] = useState("");
  const [entredAmount, setEntredAmount] = useState("");
  const [entredDate, setEntredDate] = useState("");

  const titleHandler = function (e) {
    setEntredTitle(e.target.value);
  };

  const amountHandler = (e) => {
    setEntredAmount(e.target.value);
  };

  const dateHandler = (e) => {
    setEntredDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: entredTitle,
      amount: entredAmount,
      date: new Date(entredDate),
    };

    props.onAddExpense(expenseData);
    setEntredTitle("");
    setEntredAmount("");
    setEntredDate("");
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={entredTitle} onChange={titleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={entredAmount}
            onChange={amountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={entredDate}
            onChange={dateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit" onClick={submitHandler}>
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
