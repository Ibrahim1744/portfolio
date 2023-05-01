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
  image:IMG4,
  title:"A try to make a website like amazon using context API",
  demo:"https://clone-d8113.web.app/"
}
,
{
  id:2,
  image:IMG5,
  title:"IMDB Clone with next.js and tailwind css",
  demo:"https://imdb-clonee-git-main-ibrahim1744.vercel.app/"
}
,
{
  id:3,
  image:IMG6,
  title:"E-commerce store with react-redux to manage data",
  demo:"https://ibrahim1744.github.io/redux-ecommerce/"
}
,{id:4,
image:IMG1,
title:"Simple coffee store with HTML , CSS JS",
demo:"https://ibrahim1744.github.io/simple-store/"
}
,
{
id:5,
image:IMG2,
title:"React GYM website",
demo:"https://ibrahim1744.github.io/Gym-website/"
}
,
{
id:6,
image:IMG3,
title:"Restaurant web with HTML , CSS",
demo:"https://ibrahim1744.github.io/myapp/"
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
