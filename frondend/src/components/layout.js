import React from 'react';

import Header  from './header/header.js';


const Layout = ({ children }) => {

  return (
    <>
    
    <div className=' flex flex-row  justify-stat grow w-full'>
 <Header />
      <main>{children}</main>
      </div>

    </>
  );
};

export default Layout;