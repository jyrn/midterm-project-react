import React, { useState } from 'react';

const RemoveItem = ({ removeItem, items }) => {
  const [id, setId] = useState('');
  const [message, setMessage] = useState('');

  const handleRemove = (e) => {
    e.preventDefault();
    const foundItem = items.find(item => item.id === id);
    if (foundItem) {
      removeItem(id);
      setMessage(`Item "${foundItem.name}" has been removed from the inventory.`);
      setId('');
    } else {
      setMessage('Item not found!');
    }
  };

  return (
    <div className="container">
      <h2>Remove Item</h2>
      <form onSubmit={handleRemove}>
        <input type="text" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} required />
        <button type="submit">Remove Item</button>
      </form>
      {message && (
        <p className={message.includes('not') ? 'error' : ''}>{message}</p>
      )}
    </div>
  );
};

export default RemoveItem;
