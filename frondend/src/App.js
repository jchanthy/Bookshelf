
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Signin from './components/Signin/Signin.js';
import Signup from './components/Signup/Signup.js';
import Homepage from './components/Home/Homepage.js';
import Dashboard from './components/Dashboard/Dashboard.js';
import Forgotpassword from './components/Forgotpassword/Forgotpassword.js';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path='/' element ={<Homepage />} />
          <Route path="/Signin" element={<Signin />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path='/Forgotpassword' element ={<Forgotpassword/>}/>
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
