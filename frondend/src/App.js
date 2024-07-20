
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Signin from './auth/Signin/Signin.js';
import Signup from './auth/Signup/Signup.js';
import Dashboard from './components/Dashboard/Dashboard.js';
import Forgotpassword from './auth/Forgotpassword/Forgotpassword.js';
// import Header  from './components/header/header.js'
import Testing from './components/testing.js'
import Layout from './components/layout.js';
import NoHeader from './components/noheader.js';

function App() {
  return (
    <>

<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Dashboard /></Layout>} />
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/signin" element={<NoHeader><Signin /></NoHeader>} />
        <Route path="/signup" element={<NoHeader><Signup /></NoHeader>} />
        <Route path="/forgotpassword" element={<NoHeader><Forgotpassword /></NoHeader>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
