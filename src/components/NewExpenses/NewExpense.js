import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';
const NewExpense=(props)=>{
    const [isEditing,setIsEditing] =useState(false);
    const saveExpenseHandler =(enteredExpenseData)=>{
        const expenseData={
             ...enteredExpenseData,
              id : Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };
    const startEditingHandler =()=>{
        setIsEditing(true);
    }
   return (
            <div className="new-expense">
                {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
                {isEditing && <ExpenseForm onCancel={setIsEditing} onSaveExpenseData={saveExpenseHandler}/>}
            </div>
   );
}
export default NewExpense;