import React from 'react';
import {AiFillCheckCircle} from 'react-icons/ai'
import './experience.css'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__front-end">
          <h3>Front-End Development</h3>
          <div className="experience__content">
            <article className='experience-details'>
              <AiFillCheckCircle className='experience__details-icons' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experience</small>
              </div>
              
            </article>
            <article className='experience-details'>
              <AiFillCheckCircle className='experience__details-icons' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>
            <article className='experience-details'>
              <AiFillCheckCircle className='experience__details-icons' />
              <div>
                <h4>JAVASCRIPT</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>
            <article className='experience-details'>
              <AiFillCheckCircle className='experience__details-icons' />
              <div>
                <h4>BOOTSTRAP</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>
            <article className='experience-details'>
              <AiFillCheckCircle className='experience__details-icons' />
             <div>
               <h4>REACT</h4>
               <small className='text-light'>Experience</small>
             </div>
            </article>
          </div>
        </div>
        {/* end of front end */}
        <div className="experience__back-end">
        <h3>Looking forward to learn :</h3>
          <div className="experience__content">
            <article className='experience-details'>
              <AiFillCheckCircle className='experience__details-icons' />
            <div>
                <h4>NODE JS</h4>
            </div>
            </article>
            <article className='experience-details'>
              <AiFillCheckCircle className='experience__details-icons' />
            <div>
                <h4>MONGODB</h4>
            </div>
            </article>
            <article className='experience-details'>
              <AiFillCheckCircle className='experience__details-icons' />
              <div>
                <h4>PHP</h4>
              </div>
            </article>
            <article className='experience-details'>
              <AiFillCheckCircle className='experience__details-icons' />
              <div>
                <h4>MYSQL</h4>
              </div>
            </article>
            <article className='experience-details'>
              <AiFillCheckCircle className='experience__details-icons' />
            <div>
                <h4>PYTHON</h4>
            </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
