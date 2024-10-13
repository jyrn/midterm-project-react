import React, { useState } from 'react';
import ItemsTable from './ItemsTable';

const SortItems = ({ items, setItems }) => {
  const [sortBy, setSortBy] = useState('quantity');
  const [order, setOrder] = useState('ascending');

  const handleSort = () => {
    const sortedItems = [...items].sort((a, b) => {
      if (sortBy === 'quantity') {
        return order === 'ascending' ? a.quantity - b.quantity : b.quantity - a.quantity;
      } else {
        return order === 'ascending' ? a.price - b.price : b.price - a.price;
      }
    });
    setItems(sortedItems);
  };

  return (
    <div className="container">
      <h2>Sort Items</h2>
  
      <div className="controls">
        <select className="option" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="quantity">Quantity</option>
          <option value="price">Price</option>
        </select>
  
        <select className="option" value={order} onChange={(e) => setOrder(e.target.value)}>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
  
        <div className="sort-button-container">
          <button className="sort-button" onClick={handleSort}>Sort Items</button>
        </div>
      </div>
  
      <ItemsTable items={items} />
    </div>
  );
};

export default SortItems;
