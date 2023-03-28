import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense";

const intialExpenses = [
  {
    id: "e1",
    title: "Grocery",
    amount: 94.12,
    date: new Date(2020, 9, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2022, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2022, 5, 12),
  },
  {
    id: "e5",
    title: "Book",
    amount: 50.12,
    date: new Date(2020, 2, 14),
  },
  {
    id: "e6",
    title: "Furniture",
    amount: 203.12,
    date: new Date(2021, 6, 14),
  },
  {
    id: "e7",
    title: "Electronic Item",
    amount: 150.12,
    date: new Date(2022, 1, 14),
  },
  {
    id: "e8",
    title: "Food",
    amount: 94.12,
    date: new Date(2020, 12, 14),
  },
  {
    id: "e9",
    title: "New Ac",
    amount: 150.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e10",
    title: "Construction",
    amount: 500,
    date: new Date(2021, 7, 14),
  },
  {
    id: "e11",
    title: "Electrical Bill",
    amount: 43.12,
    date: new Date(2021, 7, 14),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(intialExpenses);

  const addExpense = (newExpense) => {
    setExpenses((prevState) => {
      return [...prevState, newExpense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpense} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
