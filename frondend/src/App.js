
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Login from './components/login/login.js';
import  Dashboard from './components/Home/Dashboard.js';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path='/' element ={<Dashboard />} />
          <Route path="/login" element={<Login />}/>
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
