import React, { useState } from 'react';
import '../styles.css';


const AddItem = ({ addItem, items}) => {
  const [item, setItem] = useState({
    id: '',
    name: '',
    quantity: 0,
    price: 0,
    category: 'Clothing'
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setItem({
      ...item,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (items.some(existingItem => existingItem.id === item.id)) {
      setMessage(`Error: ID "${item.id}" is already in use. Please choose a different ID.`);
      return;
    }

    if (validateItem(item)) {
      addItem(item);
      setMessage('Item added successfully!');
      setItem({ id: '', name: '', quantity: '', price: '', category: 'Clothing' });
    } else {
      setMessage('Please fill all fields correctly.');
    }
  };

  return (
    <div className="container">
      <h2>Add Item</h2>
      <form onSubmit={handleSubmit}> 
        <input type="text" name="id" placeholder="ID" value={item.id} onChange={handleChange} required />
        <input type="text" name="name" placeholder="Name" value={item.name} onChange={handleChange} required />

        <input type="number" name="quantity" placeholder="Quantity" value={item.quantity} onChange={handleChange} required />
        <input type="number" name="price" placeholder="Price" value={item.price} onChange={handleChange} required />

        <select name="category" value={item.category} onChange={handleChange}>
          <option value="Clothing">Clothing</option>
          <option value="Electronics">Electronics</option>
          <option value="Entertainment">Entertainment</option>
        </select>

        <button type="submit">Add Item</button>
      </form>
      {message && (
        <p className={message.includes('Error')|| message.includes('correctly') ? 'error' : 'validate'}>{message}</p>
      )}
    </div>
  );
};

const validateItem = (item) => {
  return item.id && item.name && item.quantity > 0 && item.price > 0;
};

export default AddItem;
