import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import User from './pages/user';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path ='/:username' element={<User />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
