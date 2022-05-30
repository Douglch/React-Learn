import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);
  const onNewExpenseAddedHandler = (prevExpenseAdded) => {
    const expenseData = {
      ...prevExpenseAdded,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const isEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing ? (
        <button onClick={isEditingHandler}>Add Expenses</button>
      ) : (
        <ExpenseForm
          stopEditing={stopEditHandler}
          onNewExpenseAdded={onNewExpenseAddedHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
