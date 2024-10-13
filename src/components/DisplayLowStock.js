import React from 'react';

const DisplayLowStock = ({ items }) => {
  const lowStockItems = items.filter(item => item.quantity <= 5);

  return (
    <div className="container">
      <h2>Low Stock Items</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {lowStockItems.length === 0 ? (
            <tr>
              <td colSpan="5">No low stock items.</td>
            </tr>
          ) : (
            lowStockItems.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayLowStock;
