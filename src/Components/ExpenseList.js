import React from 'react'

function ExpenseList({expense,newData}) {

    

  return (
   <div>

    <table>
      <thead style={{color:"purple"}}>
        <tr>
          <th>Date</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        {newData.map((spending, id)=>(
          <tr key={id}>
            <td>{spending.data}</td>
            <td>{spending.amount}</td>
            <td>{spending.category}</td>
            <td>{spending.notes}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>

  
  )
}

export default ExpenseList