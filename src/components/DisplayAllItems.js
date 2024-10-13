import React from 'react';
import ItemsTable from './ItemsTable';
const DisplayAllItems = ({ items }) => {
  return (
    <div className="container">
      <h2>All Items</h2>
      <ItemsTable items={items} />
      
    </div>
  );
};

export default DisplayAllItems;
