import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ContextsProvider from './contexts';

ReactDOM.render(
  <React.StrictMode>
    <ContextsProvider>
      <App />
    </ContextsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
