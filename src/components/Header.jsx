import React from 'react';
import { ReactComponent as Logo } from '../utils/logo.svg';
const Header = () => {
  return (
    <div className='clip_path'>
      <div className='container'>
        <Logo />
      </div>
    </div>
  );
};

export default Header;
