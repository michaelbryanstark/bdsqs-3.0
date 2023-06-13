import './App.css';
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Components/Home';
import Illustrations from './Components/Illustrations';
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <Router>
      <div className="App">
      <Sidebar />
        <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/illustrations' element={<Illustrations />}></Route>
            <Route exact path='/projects' element={<Projects />}></Route>
            <Route exact path='/contact' element={<Contact />}></Route>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
