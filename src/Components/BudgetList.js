import React from 'react'
import {Link} from 'react-router-dom'

function BudgetList({plan}) {

const { id, category,amount } = plan

// const[newamount,setNewamount]=useState("")


  return (
   <div >
    <p>{category} ${amount}  
    <Link to={`/BudgetPlan/${id}/edit`}>
    <button >Edit</button>
    </Link>
    </p>   
   </div>
         
    
  )
}

export default BudgetList