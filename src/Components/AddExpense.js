import React,{ useState } from 'react'
import ExpenseList from './ExpenseList'


function AddExpense({expense, toSubmitExpense,toSort,toSearch}) {
// console.log(expense)
    
    const [formData, setFormData] = useState({
        date:"",
        amount:"",
        category:"",
        notes:""
    })

    function handleChange(e){

      setFormData(prevs=>({...prevs, [e.target.name]:e.target.value}))
    }

    function handleExpenseSubmit(e){
        e.preventDefault()
        fetch("http://localhost:3001/expense",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json"
            },
            body: JSON.stringify({
                date:formData.date,
                amount:parseInt(formData.amount),
                category:formData.category,
                notes:formData.notes

            })
        })
        .then(res=>res.json())
        .then(data=>toSubmitExpense(data))
            
       

    }
const totalExpense=expense.reduce((total,item)=>{return total+ item.amount},0)

// function handleClick(){
//     let today = new Date();
//     setFormData(prev=>({...prev,["date"]:today.toISOString().split('T')[0]}))
//     console.log(formData)
// }
function handleCategory(){
    toSort()
}

function handleSearch(e){
    toSearch(e.target.value)
}
  return (
    <div >
    <form onSubmit={handleExpenseSubmit} className='expenses'>
        <div>
        <label>
            Date:
        <input type="date" onChange={handleChange} name="date" value={formData.date} ></input>
        {/* <button onClick={handleClick} >Today</button> */}
        </label>
        </div>
        <div>
        <label>
            Amount:
        <input type="number" onChange={handleChange} name="amount" value={formData.amount} ></input>
        </label>
        </div>

        <div>
        <label>
            Category:
        <select onChange={handleChange} name="category" value={formData.category} >
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
            <textarea name="notes" onChange={handleChange} value={formData.notes} ></textarea>
        </label>
        </div>
        <div>
        <button >+Add</button>
        </div>
    </form>
    <div>
        <h1>Expense Detail</h1>
        <h2>Toal: {totalExpense}</h2>
        <table>
            <thead>
                <tr>
                    <th>Category</th>
                    <th>Total Expense</th>
                </tr>
            </thead>
            <tbody>
                {expense.map((item,id)=>{
                    <tr key={id}>
                        <td>{item.category}</td>
                        <td>{item.category}</td>
                    </tr>
                    
                })}
            </tbody>
        </table>
        <button onClick={handleCategory}>By Category</button>
        <input onChange={handleSearch} placeholder='search notes'></input>
        <div>
            <ExpenseList expense={expense}/>
           {/* {expense.map(spending=>{
           return <ExpenseList spending={spending} key={spending.id}/>
           })}  */}
        </div>
    </div>
    </div>
  )
}

export default AddExpense