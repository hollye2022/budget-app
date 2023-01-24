import React,{ useState, useEffect } from 'react'
import { useParams, useHistory} from 'react-router-dom'

function EditExpenseForm({toEditExpense, categories}) {


const [formData, setFormData] =useState({
  
        amount:"",
        category:"",
        
})

const { id } = useParams();
const history = useHistory();

useEffect(()=>{
  fetch(`http://localhost:3001/plans/${id}`)
  .then(res=>res.json())
  .then(data=>setFormData(data))

},[])
function handleChange(e){

  setFormData(prevs=>({...prevs, [e.target.name]:e.target.value}))
}

function handleBudgetEdit(e){
    e.preventDefault()
    fetch(`http://localhost:3001/plans/${id}`,{
        method:"PATCH",
        headers:{
            "Content-Type":"application/json",
            Accept:"application/json"
        },
        body: JSON.stringify({

            amount:parseInt(formData.amount),
            category:formData.category,
            
        })
    })
    .then(res=>res.json())
    .then(data=>{

      toEditExpense(data)
      history.push(`plans/${id}`)
      
    }) }
        

  return (

    <div >
    <form onSubmit={handleBudgetEdit} className='plans'>

    <div>
    <label>
        Category:
    <select style={{fontSize:16}}  name="category" onChange={handleChange} value={formData.category} >
      <option></option>
      {categories.map(item=>{
        return <option key={item.id} value={item.category}>{item.category}</option>
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
    </div>



  //   <div >
  //    <form onSubmit={handleBudgetEdit} className='plans'>
   
  //  <div>

  //      <label>
  //          Category:
  //      <select style={{fontSize:16}}  name="category" onChange={handleChange} value={formData.category} >
  //          <option>Grocery🥦</option>
  //          <option>Dine out🍽</option>
  //          <option>Clothing👖</option>
  //          <option>Gas⛽️</option>
  //          <option>Household🏚</option>
  //          <option>Kids🤑</option>
  //          <option>Travel🌠</option>
  //          <option>Rent💲</option>
  //          <option>Unexpected Bill🧾</option>
  //          <option>Entertainment😁</option>
  //          <option>Study📖</option>
  //          <option>Gifting🎁</option>
  //          <option>Debt💸</option>
  //          <option>Insurance🌈</option>
  //      </select>
  //      </label>
  //      </div>

  //      <div>
  //      <label>
  //         Budget Amount:
  //      <input type="text"  name="amount" onChange={handleChange} value={formData.amount} ></input>
  //      </label>
  //      </div>
  //      <button type="tetx">+Add</button>
  //      </form>
    
  //   </div>
  
  )
}

export default EditExpenseForm