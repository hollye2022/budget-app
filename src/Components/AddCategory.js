
import React,{useState} from 'react'

function AddCategory({categories, addCategory, toDelete}) {

  const [newCategory, setNewCategory]=useState("")

function handleDelete(id){
  fetch(`http://localhost:3001/categories/${id}`,{
    method:"DELETE",
  })
  .then(res=>res.json())
  .then(()=>toDelete(id))
}

function handleSubmit(e){
  e.preventDefault();
  fetch("http://localhost:3001/categories",{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      Accept:"application/json"
    },
    body: JSON.stringify({category:newCategory})
  })
  .then(res=>res.json())
  .then(data=>addCategory(data))
}
  return (

    <section >
      <form onSubmit={handleSubmit} className='categories'>
        <input name="category" placeholder='Add a new category' value={newCategory} onChange={e=>setNewCategory(e.target.value)} ></input>
        <button>+Add</button>
      </form>
      <div className='container'>
        <h1>Categories</h1>
        <ol>
          {categories.map(category=>{
            return  <li key={category.id}>{category.category}
            <button onClick={()=>handleDelete(category.id)} >x</button>
            </li>
          })}
        </ol>
      </div>
    </section>
    
  )
}

export default AddCategory