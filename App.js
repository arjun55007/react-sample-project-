import './App.css';
import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Reg from './Reg';
import Login from './Login';
import Mainpage from './Mainpage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
         <Route path="/Reg" element={<Reg/>}></Route>
      <Route path="/Mainpage" element={<Mainpage/>}></Route>
      </Routes>
    </Router>
    
  );
}

export default App;
