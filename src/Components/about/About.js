import React from 'react';
import './about.css'
import ME from '../../assets/me-about.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {ImFolderOpen} from 'react-icons/im'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <img className='about__me__image' src={ME} alt="" />
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>+2 Years Learning</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>Ready to work with new clients</small>
            </article>

            <article className='about__card'>
              <ImFolderOpen className='about__icon' />
              <h5>Projects</h5>
              <small>+10 Completed Projects</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum recusandae hic ratione quibusdam dolorum ut quis voluptatibus officia quos sed.

          </p>
          <a className='btn btn-primary' href="#contact">Let's Talk</a>
        </div>
      </div>
    </section>
  );
}

export default About;
