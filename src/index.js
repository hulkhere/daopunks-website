import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Grants from './pages/grants';
import Apply from './pages/apply';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Grants />
    <Apply />
  </React.StrictMode>,
  document.getElementById('root')
);