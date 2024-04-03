import React from 'react';

const SecondFormComponent = ({ selectedNewCategory, setSelectedNewCategory, categoriesNew }) => {
  return (
    <form className='form'>
      <div className="input-wrapper">
        <select id="categorySelect" value={selectedNewCategory} onChange={e => setSelectedNewCategory(e.target.value)}>
          {categoriesNew.map(newCategory => (
            <option key={newCategory} value={newCategory}>{newCategory}</option>
          ))}
        </select>
      </div>
    </form>
  );
};

export default SecondFormComponent;
