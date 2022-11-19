import React from 'react'
import  './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {GiNotebook} from 'react-icons/gi'
import {RiServiceLine} from 'react-icons/ri'
import {MdContactPhone} from 'react-icons/md'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a onClick={()=> setActiveNav('#')} className={activeNav==='#' ?'active' :''} href="#header"><AiFillHome/></a>
      <a onClick={()=> setActiveNav('#about')} className={activeNav==='#about' ?'active' :''}  href="#about"><AiOutlineUser/></a>
      <a onClick={()=> setActiveNav('#experience')} className={activeNav==='#experience' ?'active' :''} href="#experience"><GiNotebook/></a>
      <a onClick={()=> setActiveNav('#services')} className={activeNav==='#services' ?'active' :''} href="#services"><RiServiceLine/></a>
      <a onClick={()=> setActiveNav('#contact')} className={activeNav==='#contact' ?'active' :''} href="#contact"><MdContactPhone/></a>
    </nav>
  );
}

export default Nav;
