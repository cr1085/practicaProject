// src/Sidebar.js
import React from 'react';

const Sidebar = ({ items, removeItem }) => {
  return (
    <div >
      <h2>Sidebar</h2>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {items.map((item, index) => (
          <li key={index}>
            {item} 
            <button onClick={() => removeItem(item)} style={{ marginLeft: '5px' }}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
