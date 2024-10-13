import React, { useState } from 'react';

const UpdateItem = ({ updateItem, items }) => {
  const [id, setId] = useState('');
  const [field, setField] = useState('quantity');
  const [newValue, setNewValue] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const foundItem = items.find(item => item.id === id);
    if (foundItem) {
      updateItem(id, field, newValue);
      setMessage(`${field.charAt(0).toUpperCase() + field.slice(1)} of item "${foundItem.name}" updated from ${foundItem[field]} to ${newValue}`);
      setId('');
      setNewValue('');
    } else {
      setMessage('Item not found!');
    }
  };

  return (
    <div className="container">
      <h2>Update Item</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} required />
        <select value={field} onChange={(e) => setField(e.target.value)}>
          <option value="quantity">Quantity</option>
          <option value="price">Price</option>
        </select>
        <input type="number" placeholder="New Value" value={newValue} onChange={(e) => setNewValue(e.target.value)} required />
        <button type="submit">Update Item</button>
      </form>
      {message && (
        <p className={message.includes('not') ? 'error' : ''}>{message}</p>
      )}
    </div>
  );
};

export default UpdateItem;
