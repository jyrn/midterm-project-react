import React, { useState } from 'react';

const DisplayByCategory = ({ items }) => {
  const [category, setCategory] = useState('Clothing');

  const filteredItems = items.filter(item => item.category === category);

  return (
    <div className="container">
      <h2>Display Items by Category</h2>
      <div className="select-container">
        <select className="option" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Clothing">Clothing</option>
          <option value="Electronics">Electronics</option>
          <option value="Entertainment">Entertainment</option>
        </select>
      </div>

      {filteredItems.length === 0 ? (
        <p>No items found in this category.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DisplayByCategory;
