import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminPage from './components/AdminPage';
import WelcomePage from './components/WelcomePage';
import './styles.css';

const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const updateItem = (id, field, newValue) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, [field]: parseFloat(newValue) } : item
      )
    );
  };

  const removeItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route 
          path="/admin/*" 
          element={
            <AdminPage 
              items={items} 
              removeItem={removeItem} 
              updateItem={updateItem} 
              addItem={addItem} 
              setItems={setItems} 
            />} 
        />
      </Routes>
    </Router>
  );
};

export default App;
