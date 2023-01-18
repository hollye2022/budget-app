import React, { useState } from 'react'
import IncomeList from './IncomeList'

function AddIncome({income, toSubmitIncome}) {

    const [formData, setFormData] =useState({
        amount:"",
        source:""
    })

    function handleChange(e){

        setFormData(prev=>({...prev,
            [e.target.name]:e.target.value}))
      }

    

    function handleIncomeSubmit(e){
        e.preventDefault()
        fetch("http://localhost:3001/income",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json"
            },
            body: JSON.stringify({
                amount:parseInt(formData.amount),
                 source:formData.source
        })
        })
        .then(res=>res.json())
        .then((data)=>toSubmitIncome(data))
      }

      const totalIncome = income.reduce((total,item)=>{return total+item.amount},0)
     

  return (
    <>
    
    <form className='income' onSubmit={handleIncomeSubmit} >
    <div>
        <label>
            Amount:
            <input name="amount" onChange={handleChange} value={formData.amount} type="text"></input>
        </label>
    </div>

    <div>
        <label>
            Source:
            <select type="text" onChange={handleChange} name="source" value={formData.source} >
                <option>Job1</option>
                <option>Job2</option>
                <option>Gifts</option>
            </select>
        </label>
    </div>
    <button type="submit">+ADD</button>
    </form>
    <div>
        <h1>Income Detail</h1>
        <h2>Total: {totalIncome}</h2>
        <ul>
         {income.map(item=>{
               return <IncomeList item={item} key={item.id}/>
            })}
        </ul>
    </div>
    </>
  )
}

export default AddIncome
