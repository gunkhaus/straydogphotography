import logo from './logo.svg';
import './App.css';
import { HashRouter , Routes, Route, useLocation, Router } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Home from './home';
import Gallery from './gallery';
import About from './about';
import Contact from './contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HashRouter  basename={process.env.PUBLIC_URL} >
          <Routes>
            <Route path="/" element={<Home />}  exact component = {Home} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </HashRouter>
      </header>
    </div>
  );
}

export default App;
