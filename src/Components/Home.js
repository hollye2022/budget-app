import React from 'react'

function Home({plans,income,expense}) {


  return (
    <div className='home'>
    <h1 style={{color:"blue"}}>
     Total Income: {income.reduce((total,item)=>{return total+item.amount},0)}
    </h1>
    <h1 style={{color:"green"}}>
     Budget: {plans.reduce((total,item)=>{return total+item.amount},0)}
    </h1>
    <h1 style={{color:"black"}} >
     Total Spending: {expense.reduce((total,item)=>{return total+item.amount},0)}
    </h1>
    <h1 style={{color:"red"}}>Remaining: {plans.reduce((total,item)=>{return total+item.amount},0) - expense.reduce((total,item)=>{return total+item.amount},0)} </h1>
    </div>
    
  )
}

export default Home