import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Calendar from './Calendar';

const date = new Date()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Calendar date={date}/>
  </React.StrictMode>
);


