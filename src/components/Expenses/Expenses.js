import React, { useState } from "react";

import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filterExpenses = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          onFilterChange={filterChangeHandler}
          filterYear={filterYear}
        />
        <ExpensesChart expenses={filterExpenses} />
        <ExpensesList expenses={filterExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
