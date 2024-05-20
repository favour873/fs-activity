import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Flashswarm from './Flashswarm';
import SwarmConfirmation from './SwarmConfirmation';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Flashswarm />} />
        <Route path="/confirmation" element={<SwarmConfirmation />} />
      </Routes>
    </Router>
  );
};

export default App;
