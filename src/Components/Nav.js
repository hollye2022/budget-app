import React from 'react'
import { Link, NavLink } from "react-router-dom"

function Nav() {

  return (

    <div style={{height:60, border:"1px solid purple"}} className="nav-container">

      <Link to="/Home" style={{textDecoration:"none"}}>
       <span style={{fontSize:48}}>🌻</span>
      </Link>

      <div style={{fontSize:24}}>
        <NavLink to="/Home">
        <button>Home</button>
        </NavLink>
      
      <NavLink to="/AddExpense">
      <button>Add Expense</button>
      </NavLink>
      
      <NavLink to="AddIncome">
      <button>Add Income</button>
      </NavLink>
      
      <NavLink to="BudgetPlan">
      <button>Budget Plan</button>
      </NavLink>

     
      </div>
      
    </div>
  )
}

export default Nav