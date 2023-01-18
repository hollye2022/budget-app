import React, { useState } from 'react'
import BudgetList from './BudgetList'


function BudgetPlan({plans,toSubmitPlan}) {
    
   
    const [formData, setFormData] =useState({

        category:"",
        amount:""

    })

    

  function handleChange(e){

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
             amount:parseInt(formData.amount)
    })
    })
    .then(res=>res.json())
    .then((data)=>toSubmitPlan(data))
  }

//   function handlePlanSubmit(e,id){
//     e.preventDefault()
//     fetch(`http://localhost:3001/plans/${id}`,{
//         method:"PATCH",
//         headers:{
//             "Content-Type":"application/json",
//             Accept:"application/json"
//         },
//         body: JSON.stringify({
//             category:e.target[0].value,
//              amount:e.target[1].value
//     })
//     })
//     .then(res=>res.json())
//     .then((data)=>toSubmitPlan(data))
//   }

 

const totalBudget= plans.reduce((total,item)=>{return total + item.amount},0)
  
// console.log(totalBudget)

  return (
    <div >
        <form onSubmit={handlePlanSubmit} className='plans'>
   
    <div>

        <label>
            Category:
        <select style={{fontSize:16}}  name="category" onChange={handleChange} value={formData.category} >
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
       return <BudgetList plan={plan} key={plan.id} />
     })}
    
    </div>
    
    </div>

  )
}

export default BudgetPlan