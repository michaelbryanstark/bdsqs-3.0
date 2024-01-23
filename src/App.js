import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import Services from './Components/Services';
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Secret from './Components/Secret';



function App() {
  return (
    <Router>
      <div className="App">
      <Sidebar />
        <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/services' element={<Services />}></Route>
            <Route exact path='/projects' element={<Projects />}></Route>
            <Route exact path='/contact' element={<Contact />}></Route>
            <Route exact path='/secret' element={<Secret />}></Route>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
