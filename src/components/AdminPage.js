import React from 'react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom'; 
import AddItem from './AddItem';
import UpdateItem from './UpdateItem';
import RemoveItem from './RemoveItem';
import DisplayByCategory from './DisplayByCategory';
import DisplayAllItems from './DisplayAllItems';
import SearchItem from './SearchItem';
import SortItems from './SortItems';
import DisplayLowStock from './DisplayLowStock';

const AdminPage = ({ items, removeItem, updateItem, addItem, setItems }) => {
  const navigate = useNavigate(); 
  
  const handlePowerClick = () => {
    navigate('/'); 
  };

  return (
    <div className="dashboard-container">
      <nav className="sidebar">
        <h2><img src="/images/admin.png" alt="admin-icon"/> Admin</h2>
        <ul>
          <li style={{ display: 'flex', alignItems: 'center' }}>
            <i className="bi bi-bag-plus-fill" style={{ color: 'white' }}></i>
            <Link to="add-item">Add Item</Link>
          </li>
          <li style={{ display: 'flex', alignItems: 'center' }}>
            <i className="bi bi-clipboard2-check-fill" style={{ color: 'white' }}></i>
            <Link to="update-item">Update Item</Link>
          </li>
          <li style={{ display: 'flex', alignItems: 'center' }}>
            <i className="bi bi-x-square-fill" style={{ color: 'white' }}></i>
            <Link to="remove-item">Remove Item</Link>
          </li>
          <li style={{ display: 'flex', alignItems: 'center' }}>
            <i className="bi bi-bag-check-fill" style={{ color: 'white' }}></i>
            <Link to="display-all-items">Display All Items</Link>
          </li>
          <li style={{ display: 'flex', alignItems: 'center' }}>
            <i className="bi bi-table" style={{ color: 'white' }}></i>
            <Link to="display-by-category">Display By Category</Link>
          </li>
          <li style={{ display: 'flex', alignItems: 'center' }}>
            <i className="bi bi-search" style={{ color: 'white' }}></i>
            <Link to="search-item">Search Item</Link>
          </li>
          <li style={{ display: 'flex', alignItems: 'center' }}>
            <i className="bi bi-filter-square-fill" style={{ color: 'white' }}></i>
            <Link to="sort-items">Sort Items</Link>
          </li>
          <li style={{ display: 'flex', alignItems: 'center' }}>
            <i className="bi bi-graph-down" style={{ color: 'white' }}></i>
            <Link to="display-low-stock">Low Stock Items</Link>
          </li>
        </ul>
      </nav>

      <div className="main-content">
        <header className="header">
          <div className="greeting">
            Welcome, Admin
            <div className="title-container">
              <h2>Inventory Management System</h2>
            </div>
          </div>
          <div className="actions">
            <button onClick={handlePowerClick}>
              <i className="bi bi-power" style={{ fontSize: '30px' }}></i>
            </button>
          </div>
        </header>

        <div className="dashboard-widgets">
          <h3 className="title">Today's Data</h3>
          <div className="widget-container">
            <div className="widget" style={{ backgroundColor: '#ffe9b3' }}>
              <div className="widget-content">
                <h3>Total Items</h3>
                <i className="bi bi-diagram-3-fill" style={{ backgroundColor: '#ee6055'}}></i>
              </div>
              <p style={{backgroundColor: '#ffcf70'}}>{items.length} Items</p>
            </div>

            <div className="widget" style={{ backgroundColor: '#ffcad4' }}>
              <div className="widget-content">
                <h3>Low Stock Items</h3>
                <i className="bi bi-graph-down-arrow" style={{ backgroundColor: '#c9184a'}}></i>
              </div>
              <p style={{backgroundColor: '#ff9393'}}>{items.filter(item => item.quantity <=5).length} Items</p>
            </div>

            <div className="widget" style={{ backgroundColor: '#e9cfff' }}>
              <div className="widget-content">
                <h3>Pending Orders</h3>
                <i className="bi bi-stopwatch-fill" style={{ backgroundColor: '#7161ef'}}></i>
              </div>
              <p style={{backgroundColor: '#bab0ff'}}>15 Orders</p>
            </div>
          </div>
        </div>

        <div className="inner-content">
          <Routes>
            <Route path="add-item" element={<AddItem addItem={addItem} items={items} />} />
            <Route path="update-item" element={<UpdateItem updateItem={updateItem} items={items} />} />
            <Route path="remove-item" element={<RemoveItem items={items} removeItem={removeItem} />} />
            <Route path="display-by-category" element={<DisplayByCategory items={items} />} />
            <Route path="display-all-items" element={<DisplayAllItems items={items} />} />
            <Route path="search-item" element={<SearchItem items={items} />} />
            <Route path="sort-items" element={<SortItems items={items} setItems={setItems} />} />
            <Route path="display-low-stock" element={<DisplayLowStock items={items} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
