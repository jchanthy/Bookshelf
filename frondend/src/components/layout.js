import React from 'react';

import Header  from './header/header.js';
import {Outlet} from "react-router-dom";


const Layout = ({ children }) => {

  return (
    <>
    <div className='flex flex-row'>
        <Header />
        <main className='flex-1 overflow-y-auto w-full h-screen p-4'>
          {children}
      </main>
      </div>

    </>
  );
};

export default Layout;