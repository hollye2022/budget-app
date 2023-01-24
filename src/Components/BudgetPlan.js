import React, { useState } from 'react'
import BudgetList from './BudgetList'


function BudgetPlan({plans,toSubmitPlan,categories}) {
    
   
    const [formData, setFormData] =useState({

        category:"",
        amount:"",

    })
//  const [hideInput, setHideInput]= useState(true)
    

  function handleChange(e){
  // if(e.target.value==="Add a category"){
  //   setHideInput(false) 
  // } 
    setFormData(prev=>({...prev,
      [e.target.name]:e.target.value}))
    
  }

    function handlePlanSubmit(e){
    e.preventDefault()
    fetch("http://localhost:3001/plans",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            Accept:"application/json"
        },
        body: JSON.stringify({
            category:formData.category,
             amount:parseInt(formData.amount),
    })
    })
    .then(res=>res.json())
    .then((data)=>toSubmitPlan(data))
  }



const totalBudget= plans.reduce((total,item)=>{return total + item.amount},0)
  

  return (
    <div >
        <form onSubmit={handlePlanSubmit} className='plans'>
   
    <div>
        <label>
            Category:
        <select style={{fontSize:16}}  name="category" onChange={handleChange} value={formData.category} >
          <option></option>
          {categories.map(category=>{
            return <option key={category.id} value={category.category}>{category.category}</option>
          })}
  
        </select>
        </label>
        </div>

        <div>
        <label>
           Budget Amount:
        <input type="text"  name="amount" onChange={handleChange} value={formData.amount} ></input>
        </label>
        </div>
        <button type="tetx">+Add</button>
        </form>
        <div>
    </div>
    <div>
        <h1>Budget Plan</h1>
        <h2>Total: {totalBudget}</h2>
        {plans.map(plan=>{
       return <BudgetList plan={plan} key={plan.id}/>
     })}
    
    </div>
    
    </div>

  )
}

export default BudgetPlan