import './Expenses.css';
import ExpenseFilter from "./ExpenseFilter";
import {useState} from 'react';
import Card from '../UI/Card';
import ExpensesList from "./ExpensesList";
import ExpensesChart from './ExpensesChart';
function Expenses({expenses}){
      const [filteredYear,setfilteredYear]=useState('2020');
    const filterChangeHandler =(selectedYear)=>{
         setfilteredYear(selectedYear);
    }

     const filteredExpenses=expenses.filter((expense)=>{
      return expense.date.getFullYear().toString()===filteredYear
    }
    )

    return(
        <div>
        <Card className="expenses">
           <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
           <ExpensesChart  expenses={filteredExpenses}/>
           <ExpensesList items={filteredExpenses}/>

            {/* {filteredExpenses.map((expense)=>
              <ExpenseItem
               key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              />
           )} */}


            {/* <ExpenseItem 
              title={expenses[0].title}
              amount={expenses[0].amount}
              date={expenses[0].date}
            />

            <ExpenseItem
              title={expenses[1].title}
              amount={expenses[1].amount}
              date={expenses[1].date}
            />
            */}

        </Card>
        </div>
    );
}
export default Expenses;