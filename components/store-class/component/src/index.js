import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import ShopItemClass from './ShopItemClass';
import item from './item.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ShopItemClass item={item}/>
  </React.StrictMode>
);


