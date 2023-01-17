import React from 'react'

function BudgetList({plan}) {

const { category,amount } = plan

// const[newamount,setNewamount]=useState("")


  return (
   <div >
    <p>{category} ${amount}  
    <button  >Edit Amount</button>
    </p>   
   </div>
         
    
  )
}

export default BudgetList