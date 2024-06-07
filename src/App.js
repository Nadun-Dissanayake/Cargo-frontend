import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home.js'
import React from 'react';

function App() {
  return (
    <router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </router>
  );
}

export default App;
