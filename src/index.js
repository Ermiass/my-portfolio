import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemeContextProvider from './contexts/ThemeContext'


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <ThemeContextProvider>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </ThemeContextProvider>,
  document.getElementById('root')
);


reportWebVitals();
