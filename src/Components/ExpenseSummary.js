import React from 'react'

function ExpenseSummary({expense,categories}) {

//     const groups= expense.reduce((groupedCategories,eachExpense)=>{
//         const eachcategory = eachExpense.category
//         if(groupedCategories[eachcategory] === null) groupedCategories[eachcategory] =[]
//         groupedCategories[eachcategory].push(eachExpense)
//         return groupedCategories
//        },{})
// console.log(groups)

const categoriesWithTotalAmount = expense.map(expense => {
    return {
      category: expense.category,
      totalAmount: expense.amount
    }
  })
    .reduce((acc, expense) => {
    const category = expense.category;
    const existingCategory = acc.find(cat => cat.category === category);
    if (existingCategory) {
        console.log(`Adding to ${category}: ${expense.totalAmount}`);
      existingCategory.totalAmount += expense.totalAmount;
    } else {
        console.log(`Adding to ${category}: ${expense.totalAmount}`);
      acc.push({ category, totalAmount: expense.totalAmount });
    }
    return acc;
  }, []);
  console.log('Categories with amount:')
  console.log(categoriesWithTotalAmount);
  return (
    <div>
          <table>
            <thead>
                <tr>
                    <th>Category</th>
                    <th>Total Expense</th>
                </tr>
            </thead>
            <tbody>
               
                {categoriesWithTotalAmount.map((item,id)=>{
                  return  <tr key={id}>
                        <td>{item.category}</td>
                        <td>{item.totalAmount}</td>
                    </tr> 
                })}
            </tbody>
        </table>
    </div>
  )
}

export default ExpenseSummary