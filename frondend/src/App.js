
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import SignIn from './auth/Signin/SignIn.js'
import Signup from './auth/Signup/Signup.js';
import Forgotpassword from './auth/Forgotpassword/Forgotpassword.js';
// import Header  from './components/header/header.js'
import Dashboard from './components/Dashboard/Dashboard.js';
import Layout from './components/layout.js';
import NoHeader from './components/noheader.js';
import BookDetail from './components/BookDetails.js';
import ReadingList from './components/ReadingList.js'
import ReadingList1 from './components/ReadingList1.js';
import SocialCards from './components/SocialCards.js';
import AlreadyRead from './components/AlreadyRead.js';
import Ebook from './components/ebook/ebook.js';
import init from "./auth/init.js";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "./ctx/UserContextProvider.jsx";
import {themeChange} from "theme-change";
import ThemeContext from "./ctx/ThemeContext.js";

init();
function App() {
    const [theme, setTheme] = useState(localStorage.getItem('bookshelf-theme') || 'light');
    const { isAuthenticated } = useContext(UserContext);
    localStorage.setItem("bookshelf-theme", theme);

    useEffect(() => {
        themeChange(false)
    }, [])

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  }
  return (
    <>

<BrowserRouter>

    <ThemeContext.Provider value={{theme, setTheme: handleThemeChange}}>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Layout><Dashboard /></Layout> : <SignIn /> } />
        <Route path="/dashboard" element={isAuthenticated ? <Layout><Dashboard /></Layout> : <SignIn />} />
        <Route path="/book-detail" element={<Layout><BookDetail /></Layout>} />
        <Route path="/currentreading" element={<Layout><ReadingList /></Layout>}/>
        <Route path='/current-reading' element={<Layout><ReadingList1 /></Layout>} />
        <Route path='/socialcards' element={<Layout><SocialCards /></Layout>} />
        <Route path='/ebook' element={<Layout><Ebook /></Layout>} />
        <Route path='/already-read' element={<Layout><AlreadyRead /></Layout>} />
        <Route path="/signin" element={<NoHeader><SignIn /></NoHeader>} />
        <Route path="/signup" element={<NoHeader><Signup /></NoHeader>} />
        <Route path="/forgotpassword" element={<NoHeader><Forgotpassword /></NoHeader>} />
        <Route path='/book-details' element={<BookDetail />}/>
      </Routes>
    </ThemeContext.Provider>
    </BrowserRouter>
    </>
  );
}

export default App;
