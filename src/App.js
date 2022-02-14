import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Detail from './components/Detail';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/:id' element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;