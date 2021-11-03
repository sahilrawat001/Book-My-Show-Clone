import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MovieProvider from './Context/Movie.Context';
import {BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>

<MovieProvider>
    <App />

</MovieProvider>

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);