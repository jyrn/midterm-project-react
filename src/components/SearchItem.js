import React, { useState } from 'react';

const SearchItem = ({ items }) => {
  const [id, setId] = useState('');
  const [foundItem, setFoundItem] = useState(null);
  const [message, setMessage] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const item = items.find(item => item.id === id);
    if (item) {
      setFoundItem(item);
      setMessage(null); 
    } else {
      setFoundItem(null);
      setMessage('Item not found!');
    }
  };

  return (
    <div className= "container">
      <h2>Search Item</h2>
      <div className="search-form">
        <input 
          type="text" 
          placeholder="ID" 
          value={id} 
          onChange={(e) => setId(e.target.value)} 
          required 
        />
        <button onClick={handleSearch}>Search</button>
        </div>
 
      {message && (
        <p className={message.includes('not') ? 'error' : ''}>{message}</p>
      )}
      {foundItem && (
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
            <tr>
              <td>{foundItem.id}</td>
              <td>{foundItem.name}</td>
              <td>{foundItem.quantity}</td>
              <td>{foundItem.price}</td>
              <td>{foundItem.category}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SearchItem;
