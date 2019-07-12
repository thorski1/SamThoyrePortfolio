import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Landing from './components/landingpage'
import './index.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  
  document.getElementById('root')
);

