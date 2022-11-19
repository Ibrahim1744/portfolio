import React from 'react';
import CTA from './CTA';
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials';

import './header.css'
const Header = () => {
  return (
   <header id='header'>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Ibrahim</h1>
        <h5 className="text-light">
          Front-End Developer
        </h5>
        <CTA />
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="" />
        </div>
        
        <a className='scroll__down' href="#contact">Scroll Down</a>
      </div>
   </header>
  );
}

export default Header;
