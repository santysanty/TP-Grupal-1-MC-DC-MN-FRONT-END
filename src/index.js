// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'; // <<-- VERIFICA ESTA LÍNEA
import App from './App';
// Si eliminaste reportWebVitals.js, borra la importación y la llamada reportWebVitals()
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Si eliminaste reportWebVitals.js, borra esta línea también
// reportWebVitals();