import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { reportWebVitals } from 'web-vitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(console.log); // or send to an analytics service
