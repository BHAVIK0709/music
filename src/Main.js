import React from 'react'
import { Route,Routes } from 'react-router-dom';
import PrivacyPolicy from './PrivacyPolicy';
import About from './About';
import Home from './Home';

function Main() {
    return (
      <Routes>
        <Route exact path="/" element={<Home />}>
        </Route>
        <Route path="/about" element={<About />}> 
        </Route>
        <Route path="/privacy-policy" element={<PrivacyPolicy />}>
        </Route>
      </Routes>
    );
  }
  

export default Main