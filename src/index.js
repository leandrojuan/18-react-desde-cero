import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Si desea comenzar a medir el rendimiento de su aplicación, pase una función
// para registrar los resultados (por ejemplo: reportWebVitals(console.log))
// o envíelos a un punto de análisis. Obtenga más información: https://bit.ly/CRA-vitals
reportWebVitals();
