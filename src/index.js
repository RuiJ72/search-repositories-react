import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App'; // Mantido conforme necessário
import GlobalStyles from './styles'; // Ajuste feito aqui

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
