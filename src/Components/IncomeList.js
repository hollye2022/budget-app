import React from 'react'

function IncomeList({item}) {

    const {amount, source} = item

  return (
    <div>
        <p>{source}:{amount}</p>
    </div>
  )
}

export default IncomeList