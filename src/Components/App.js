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
import EditBudgetPlan from "./EditBudgetPlan";
import AddCategory from "./AddCategory";

function App() {

  const [plans, setPlans]= useState([])
  const [income, setIncome]=useState([])
  const [expense, setExpense] = useState([])
  const [categories,setCategories]=useState([])

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

  useEffect(()=>{
    fetch("http://localhost:3001/categories")
    .then(res=>res.json())
    .then(data=>{
      setCategories(data)
    })
  },[])
// function toSubmitPlan(newPlan){
//   const newPlans = plans.map(plan=>{
//     if(plan.id===newPlan.id) return newPlan
//     else return plan
//   })
//   setPlans(newPlans)
// }

function toSubmitPlan(data){
     setPlans(prevs=>[...prevs,data])
}

function toSubmitIncome(data){
  setIncome(prevs=>[...prevs,data])
}

function toSubmitExpense(data){
  setExpense(prevs=>[...prevs,data])
}

function toSort(){
  const newExpense = [...expense].sort((a,b)=>a.category >b.category ? 1:-1)
  // console.log(newExpense)
  setExpense(newExpense)
}



function toEdit(updatedBudget){
  const updatedBudgetArray=plans.map(item=>{
    if(item.id===updatedBudget.id){
      return updatedBudget
    } 
    else {
      return item
    }
  })
   setPlans(updatedBudgetArray)
}

function addCategory(data){
  setCategories(prevs=>[...prevs,data])
}

function toDelete(id){
const newCategories = categories.filter(category=>category.id !== id)
setCategories(newCategories)
}
  return (
    <div>
      <Nav />
      <Switch>

        <Route path="/budget/category/new">
          <AddCategory categories={categories} addCategory={addCategory} toDelete={toDelete}/>
        </Route>

        <Route  path="/budget/expense/new" >
          <AddExpense expense={expense} toSubmitExpense={toSubmitExpense} toSort={toSort} categories={categories}/>
        </Route>

        <Route  path="/Home">
          <Home plans={plans} income={income} expense={expense}/>
        </Route >

        <Route  path="/budget/income/new" >
          <AddIncome income={income} toSubmitIncome={toSubmitIncome} />
        </Route>

        <Route path="/budget/plan/:id/edit">
          <EditBudgetPlan expense={expense} toEditExpense={toEdit} categories={categories}/>
        </Route>

        <Route  path="/budget/plan" >
          <BudgetPlan plans={plans} toSubmitPlan={toSubmitPlan} categories={categories}/>
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
