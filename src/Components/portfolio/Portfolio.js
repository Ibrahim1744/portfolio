import React from 'react';
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'
const data=[
{
  id:1,
  image:IMG1,
  title:"Simple coffee store with HTML , CSS JS",
  githup:"https://github.com/Ibrahim1744?tab=repositories",
  demo:"https://github.com/Ibrahim1744?tab=repositories"
}
,
{
  id:2,
  image:IMG2,
  title:"React GYM website",
  githup:"https://github.com/Ibrahim1744?tab=repositories",
  demo:"https://github.com/Ibrahim1744?tab=repositories"
}
,
{
  id:3,
  image:IMG3,
  title:"Restaurant web with HTML , CSS",
  githup:"https://github.com/Ibrahim1744?tab=repositories",
  demo:"https://github.com/Ibrahim1744?tab=repositories"
}
,
{
  id:4,
  image:IMG4,
  title:"Movie app with react , using API , context hook",
  githup:"https://github.com/Ibrahim1744?tab=repositories",
  demo:"https://github.com/Ibrahim1744?tab=repositories"
}
,
{
  id:5,
  image:IMG5,
  title:"Reat book app with fetching data from API",
  githup:"https://github.com/Ibrahim1744?tab=repositories",
  demo:"https://github.com/Ibrahim1744?tab=repositories"
}
,
{
  id:6,
  image:IMG6,
  title:"React redux e-commerce website",
  githup:"https://github.com/Ibrahim1744?tab=repositories",
  demo:"https://github.com/Ibrahim1744?tab=repositories"
}

]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
      {
        data.map(({id,image,title,githup,demo})=>{
            return(
              <article className='portfolio__item' key={id}>
              <div className='portfolio__item__imgs'>
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item__cta'>
              <a className='btn' target="_blank" href={githup} >Github</a>
              <a className='btn btn-primary' target="_blank" href={demo}>Live Demo</a>
              </div>
            </article>
            )
        })
      }
     
        
        
        
      </div>
    </section>
  );
}

export default Portfolio;
