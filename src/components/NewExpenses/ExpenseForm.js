import './ExpenseForm.css';
import {useState} from 'react';
const ExpenseForm = (props)=>{
         const [enteredTitle,setEnteredTitle]=useState('');
         const [enteredAmount, setEnteredAmount] = useState('');
         const [enteredDate,setEnteredDate] = useState('');


/****************************using single state instead of multiple****************************/ 
// using single useState instead of multiple : any
//  we can pass all values together as an object to useState and only update the necessary one on    an event.
/* const [userInput,setUserInput] = useState({
    enteredTitle : '',
    enteredAmount : '',
    enteredDate : ''
});
   const titleChangeHandler = (prevState)=>{
     //// we passed function to the state function because this state depends upon previous state

       setEnteredTitle((prevState)=>{
            return {...userInput,enteredTitle : event.target.value};
       });
   }
*/



    //    const titleChangeHandler =(event)=>{
    //        setEnteredTitle(event.target.value);
    //    }
       
    //    const amountChangeHandler =(event)=>{
    //      setEnteredAmount(event.target.value);
    //    }

    //    const dateChangeHandler =(event)=>{
    //     setEnteredDate(event.target.value);
    //    }
    
///////////// we can use below single change Handler instead of above multiple change handlers///////

// since it is working with two arguments we can't use it with onChange directly since it only passes one argument called event object. Hence we will use a wrapper arrow function which will call it.

    
       const inputChangeHandler =(identifier,value)=>{
          if(identifier==='title') setEnteredTitle(value);
          else if(identifier==='amount') setEnteredAmount(value);
          else setEnteredDate(value);
       }
       
       const submitHandler=(event)=>{
         event.preventDefault();
            const expenseData={
                title : enteredTitle,
                amount : enteredAmount,
                date : new Date(enteredDate)
            };
            
            setEnteredDate('');
            setEnteredTitle('');
            setEnteredAmount('');
          props.onSaveExpenseData(expenseData);
          props.onCancel(false);
       }
       
    const cancelHandler=()=>{
        props.onCancel(false);
    }
        return(
          
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type="text" onChange={(event)=>{inputChangeHandler('title',event.target.value)}}
                        value={enteredTitle}/>
                    </div>

                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type="number" min="0.01" step="0.01" onChange={(event)=>{inputChangeHandler('amount',event.target.value)}}
                        value={enteredAmount}
                        />
                    </div>

                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type="date" min="2020-01-01" max="2023-06-30" onChange={(event)=>{inputChangeHandler('date',event.target.value)}}
                        value={enteredDate}/>
                    </div>

                </div>
                <div className="new-expense__actions">
                    <button type='button' onClick={cancelHandler}>Cancel</button>
                    <button type="submit" >Add Expense</button>
                </div>
            </form> 
        );
}
export default ExpenseForm;