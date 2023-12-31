import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'tailwindcss/tailwind.css';
import AppContextProvider from './context/contextApi';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppContextProvider><BrowserRouter><App /></BrowserRouter></AppContextProvider>);
