import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom"
import ScrollToTop from "./components/Helpers/ScrollToTop"

import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop/>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
