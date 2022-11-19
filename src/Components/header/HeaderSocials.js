import React from 'react';
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsDribbble} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/ibrahim-nasser-312480256/" target="_blank" > <BsLinkedin /></a>
      <a href="https://github.com/Ibrahim1744?tab=repositories" target="_blank" > <FaGithub /></a>
      <a href="" target="_blank" > <BsDribbble /></a>

    </div>
  );
}

export default HeaderSocials;
