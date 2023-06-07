import './App.css';
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
