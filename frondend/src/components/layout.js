import React from 'react';

import Header  from './header/header.js';


const Layout = ({ children }) => {

  return (
    <>
    
    <div className=' flex flex-row'>
 <Header />
      <main className='flex-1 overflow-y-auto w-full p-4'>{children}</main>
      </div>

    </>
  );
};

export default Layout;