import React from 'react';

const TableComponent = ({ expenses, selectedNewCategory, handleDeleteExpense, getTotalVisibleExpenses }) => {
  return (
    <div>
      <table className="expense-table">
        <thead>
          <tr>
            <th>Expense</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map(expense => (
            <tr key={expense.id} style={{ display: selectedNewCategory === 'Select any one...' || expense.category === selectedNewCategory ? 'table-row' : 'none' }}>
              <td>{expense.expense}</td>
              <td>${expense.amount}</td>
              <td>{expense.category}</td>
              <td><button onClick={() => handleDeleteExpense(expense.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total Expenses:</td>
            <td>${getTotalVisibleExpenses()}</td>
            <td colSpan={1}></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default TableComponent;
