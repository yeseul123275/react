import React, { useState } from 'react';
import Hd from './Hd';
import Ft from './Ft';
import Quick from './Quick';

const Layout = ({ children }) => {
  const [leng, setLeng] = useState('ko');
  return (
    <>
      <Hd leng={leng} setLeng={setLeng}  />
      <main>{children}</main>
      <Quick />
      <Ft />
    </>
  );
};

export default Layout;
