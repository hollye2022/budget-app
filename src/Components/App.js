// import logo from './logo.svg';
import { Switch, Route } from "react-router-dom"
import React, {useEffect, useState} from 'react'
import './App.css';
import Nav from './Nav';
import AddExpense from "./AddExpense";
import Home from "./Home";
import AddIncome from "./AddIncome";
import Fallback from "./Fallback"
import BudgetPlan from "./BudgetPlan"


function App() {

  const [plans, setPlans]= useState([])
  const [income, setIncome]=useState([])
  const [expense, setExpense] = useState([])

  useEffect(()=>{
    fetch("http://localhost:3001/plans")
    .then(res=>res.json())
    .then(data=>setPlans(data))
  },[])

  useEffect(()=>{
    fetch("http://localhost:3001/income")
    .then(res=>res.json())
    .then(data=>setIncome(data))
  },[])

  useEffect(()=>{
    fetch("http://localhost:3001/expense")
    .then(res=>res.json())
    .then(data=>setExpense(data))
  },[])
// function toSubmitPlan(newPlan){
//   const newPlans = plans.map(plan=>{
//     if(plan.id===newPlan.id) return newPlan
//     else return plan
//   })
//   setPlans(newPlans)
// }

function toSubmitPlan(data){
     setPlans(data)
}

function toSubmitIncome(data){
  setIncome(data)
}

function toSubmitExpense(data){
  setExpense(data)
}

  return (
    <div>
      <Nav />
      <Switch>

        <Route  path="/AddExpense" >
          <AddExpense expense={expense} toSubmitExpense={toSubmitExpense}/>
        </Route>

        <Route  path="/Home">
          <Home />
        </Route >

        <Route  path="/AddIncome" >
          <AddIncome income={income} toSubmitIncome={toSubmitIncome} />
        </Route>

        <Route  path="/BudgetPlan" >
          <BudgetPlan plans={plans} toSubmitPlan={toSubmitPlan} />
        </Route>

        <Route  path="/*" >
          <Fallback />
        </Route>

      </Switch>

    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
