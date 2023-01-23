import React,{ useState } from 'react'
import ExpenseList from './ExpenseList'
import ExpenseSummary from './ExpenseSummary'


function AddExpense({expense, toSubmitExpense,toSort,categories}) {
    
    const [formData, setFormData] = useState({
        date:"",
        amount:"",
        category:"",
        notes:""
    })
const [searchTerm, setSearchTerm]=useState("")

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

function handleCategory(){
    toSort()
}

function handleSearch(e){
    setSearchTerm(e.target.value)
}

const newData=expense.filter(item => item.notes.toLowerCase().includes(searchTerm.toLowerCase()))


  
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
        <option></option>
        {categories.map(category=>{
            return <option value={category.category} key={category.id}>{category.category}</option>
        })}
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
        <h2>Total: {totalExpense}</h2>
        <div>
            <ExpenseSummary  categories={categories} expense={expense}/>
        </div>
        
        <button onClick={handleCategory}>By Category</button>
        <input onChange={handleSearch} placeholder='search notes' value={searchTerm}></input>
        <div className='container'>
            <ExpenseList expense={expense} newData={newData}/>
           {/* {expense.map(spending=>{
           return <ExpenseList spending={spending} key={spending.id}/>
           })}  */}
        </div>
    </div>
    </div>
  )
}

export default AddExpense