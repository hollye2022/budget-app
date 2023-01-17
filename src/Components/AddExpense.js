import React,{ useState } from 'react'
import ExpenseList from './ExpenseList'


function AddExpense({expense, toSubmitExpense}) {

    
    const [formDta, setFormdata] = useState({
        date:"",
        amount:"",
        category:"",
        notes:""
    })

    function handleChange(e){
      const {name,value} =e
      setFormdata(pres=>({...pres, [name]:value}) )}

    function handleExpenseSubmit(e){
        e.preventDefault()
        fetch("http://localhost:3001/expense",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json"
            },
            body: JSON.stringify({
                date:e.target[0].value,
                amount:e.target[1].value,
                category:e.target[2].value,
                notes:e.target[3].value
            })
        })
        .then(res=>res.json())
        .then(data=>toSubmitExpense(data))
       

    }
const totalExpense=expense.reduce((total,item)=>{return total+item.amount},0)
  return (
    <div >
    <form onSubmit={handleExpenseSubmit} className='expenses'>
        <div>
        <label>
            Date:
        <input type="date" onChange={handleChange} name="date" ></input>
        </label>
        </div>
        <div>
        <label>
            Amount:
        <input type="text" onChange={handleChange} name="amount" ></input>
        </label>
        </div>

        <div>
        <label>
            Category:
        <select onChange={handleChange} name="category" >
        <option>Grocery🥦</option>
            <option>Dine out🍽</option>
            <option>Clothing👖</option>
            <option>Gas⛽️</option>
            <option>Household🏚</option>
            <option>Kids🤑</option>
            <option>Travel🌠</option>
            <option>Rent💲</option>
            <option>Unexpected Bill🧾</option>
            <option>Entertainment😁</option>
            <option>Study📖</option>
            <option>Gifting🎁</option>
            <option>Debt💸</option>
            <option>Insurance🌈</option>
        </select>
        </label>
        </div>
        <div>
        <label>
            Notes:
            <textarea name="notes" onChange={handleChange} ></textarea>
        </label>
        </div>
        <div>
        <button >+Add</button>
        </div>
    </form>
    <div>
        <h1>Expense Detail</h1>
        <h2>Toal: {totalExpense}</h2>
        <ul>
           {expense.map(spending=>{
           return <ExpenseList spending={spending} key={spending.id}/>
           })} 
        </ul>
    </div>
    </div>
  )
}

export default AddExpense