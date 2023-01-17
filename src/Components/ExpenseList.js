import React from 'react'

function ExpenseList({spending}) {

    const {date,amount,category,notes} =spending

  return (
    <div>
        <ul>{category} {date} {amount} {notes} </ul>
    </div>
  )
}

export default ExpenseList