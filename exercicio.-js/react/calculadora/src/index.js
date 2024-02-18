import React from 'react';
import { createRoot } from 'react-dom';
import './index.css';
import Calculator from './main/Calculator';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root'));

root.render(
  <div>
    <h1>Calculadora</h1>
    <Calculator />
  </div>
);

reportWebVitals();
