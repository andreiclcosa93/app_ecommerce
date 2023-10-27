import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Page404 from './pages/Page404';

function App() {
  return (
    <div>

        <Routes>
          <Route exact path='/' element={ <Home/> } />
          <Route path='/login' element={ <Login/> } />
          <Route path='/about' element={ <About/> } />
          <Route path='/*' element={ <Page404/> } />
        </Routes>

    </div>
  );
}

export default App;
