
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Login from './components/login/login.js';
import Signup from './components/Signup/Signup.js';
import Homepage from './components/Home/Homepage.js';
import Dashboard from './components/Dashboard/Dashboard.js';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path='/' element ={<Homepage />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
