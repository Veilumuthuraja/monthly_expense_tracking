import React, { useState } from 'react';
import SecondFormComponent from './SecondFormComponent';
import TableComponent from './TableComponent';

function FormComponent() {
  const [expenses, setExpenses] = useState([]);
  const [inputExpense, setInputExpense] = useState('');
  const [inputAmount, setInputAmount] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedNewCategory, setSelectedNewCategory] = useState('Select any one...');
  const [errorMessage, setErrorMessage] = useState('');

  const categories = ['All', 'Food', 'Transportation', 'Rent', 'Sports', 'Entertainment'];
  const categoriesNew = ['Select any one...', 'Food', 'Transportation', 'Rent', 'Sports', 'Entertainment'];

  const handleAddExpense = (e) => {
    e.preventDefault();
    if (!inputExpense || !inputAmount) {
      setErrorMessage('" Please enter about details ? "');
      return;
    }
    const newExpense = {
      id: Math.random().toString(),
      expense: inputExpense,
      amount: parseFloat(inputAmount),
      category: selectedCategory,
    };
    
    setExpenses(prevExpenses => [...prevExpenses, newExpense]);
    setInputExpense('');
    setInputAmount('');
    setErrorMessage('');
  };

  const handleDeleteExpense = id => {
    setExpenses(prevExpenses => prevExpenses.filter(expense => expense.id !== id));
  };
 
  const getTotalVisibleExpenses = () => {
    return expenses
      .filter(expense => selectedNewCategory === 'Select any one...' || expense.category === selectedNewCategory)
      .reduce((total, expense) => total + expense.amount, 0);
  };
  
  return (
    <div className="App">
      <h1> Monthly Expense </h1>
      <form onSubmit={handleAddExpense}>
        <div className="input-container">
          <div className="input-wrapper">
            <label htmlFor="expenseInput"> Monthly Expense:</label>
            <input
              id="expenseInput"
              type="text"
              placeholder="Expense"
              value={inputExpense}
              onChange={e => setInputExpense(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="amountInput">Amount($):</label>
            <input
              id="amountInput"
              type="number"
              placeholder="Amount"
              value={inputAmount}
              onChange={e => setInputAmount(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="categorySelect">Category:</label>
            <select id="categorySelect" value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          <div className="input-wrapper">
            <button type="submit">Add Expense</button>
          </div>
        </div>
        {errorMessage && <p style={{ color: 'red',fontWeight:'900' }}>{errorMessage}</p>}
      </form>
      {expenses.length > 0 && (
        <SecondFormComponent
          selectedNewCategory={selectedNewCategory}
          setSelectedNewCategory={setSelectedNewCategory}
          categoriesNew={categoriesNew}
        />
      )}
      {expenses.length > 0 && (
        <TableComponent
          expenses={expenses}
          selectedNewCategory={selectedNewCategory}
          handleDeleteExpense={handleDeleteExpense}
          getTotalVisibleExpenses={getTotalVisibleExpenses}
        />
      )}
    </div>
  );
}

export default FormComponent;

