import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from './pages/Blog'
import Contact from './pages/Contact';
import Home from './pages/Home';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Blog />} />
    <Route path="contact" element={<Contact />} />
    <Route path="home" element={<Home/>} />
    </Routes>
    <App />
    </BrowserRouter>
  </React.StrictMode>
  </>
);
