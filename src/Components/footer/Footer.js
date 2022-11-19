import React from 'react';
import './footer.css';
import {FaFacebookSquare} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <a className='footer__logo' href="#">Ibrahim</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonail">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100008558927155" target="_blank"><FaFacebookSquare/></a>
        <a href="https://api.whatsapp.com/send?phone=01068184721" target="_blank"><BsWhatsapp/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Ibrahim-Nasser. All rights reserved.</small>
      </div>
    </footer>
  ); 
}

export default Footer;
