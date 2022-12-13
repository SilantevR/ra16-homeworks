import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import ShopItemFunc from './ShopItemFunc';
import item from './item.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ShopItemFunc item={item}/>
  </React.StrictMode>
);


