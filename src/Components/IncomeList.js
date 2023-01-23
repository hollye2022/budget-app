import React from 'react'

function IncomeList({income}) {

  

  return (
    <table>
        <thead>
            <tr>
                <th>Source</th>
                <th>Amount</th>
            </tr>
        </thead>
        <tbody>
        {/* <tr key={item.id}>
                    <td>{source}</td>
                    <td>{amount}</td>
                </tr> */}
            {income.map(item=>{
              return  <tr key={item.id}>
                    <td>{item.source}</td>
                    <td>{item.amount}</td>
                </tr>
            
            })}
        </tbody>
    </table>
  )
}

export default IncomeList