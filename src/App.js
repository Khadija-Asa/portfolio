import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>

        <Route path="/" element={<Home />}/>
        <Route path="/services" element={<Services />}/>
        <Route path='/portfolio' element={<Portfolio />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path="*" element={<NotFound />}/>

      </Routes>
    </BrowserRouter>
  );
};

export default App;