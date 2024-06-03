import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Contact from './Components/Contact';
import About from './Components/About';
import NotFound from './Components/NotFound';
import BlogsList from './Components/BlogsList';
import BlogItemDetails from './Components/BlogItemDetails';


const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' Component={BlogsList} />
      <Route path='/about' Component={About } />
      <Route path='/contact' Component={Contact } />
      <Route path='/blogs/:id' Component={BlogItemDetails } />
      <Route path='*' Component={NotFound } />
    </Routes>
  </BrowserRouter>
);

export default App;
