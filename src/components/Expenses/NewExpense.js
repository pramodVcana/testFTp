import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const addExpense = (expenseData) => {
    const newExpense = { ...expenseData, id: Math.random().toString() };
    props.onAddExpense(newExpense);
  };

  const btnHandler = () => {
    setShowForm(true);
  };

  const btnCancelHandler = () => {
    setShowForm(false);
  };

  return (
    <div className="new-expense">
      {!showForm && <button onClick={btnHandler}> Add New Expense </button>}
      {showForm && (
        <ExpenseForm onAddExpense={addExpense} onCancel={btnCancelHandler} />
      )}
    </div>
  );
};

export default NewExpense;
