import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Headerfile from './components/Header';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <LandingPage/>
  </React.StrictMode>
);

reportWebVitals();
