import React from 'react';
import './testimonial.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data=[
  {
    id:1,
    image:AVTR1,
    name:"Tina Snow",
    review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat illo, voluptatem laborum eos esse sapiente veniam deleniti vitae totam fugit dignissimos soluta ullam non explicabo expedita voluptas magni, est, facilis assumenda repellendus. Doloribus, cum mollitia eos omnis iusto necessitatibus delectus!"
  }
  ,
  {
    id:2,
    image:AVTR2,
    name:"Shatta Wale",
    review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat illo, voluptatem laborum eos esse sapiente veniam deleniti vitae totam fugit dignissimos soluta ullam non explicabo expedita voluptas magni, est, facilis assumenda repellendus. Doloribus, cum mollitia eos omnis iusto necessitatibus delectus!"

  }
  ,
  {
    id:3,
    image:AVTR3,
    name:"Tina Snow",
    review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat illo, voluptatem laborum eos esse sapiente veniam deleniti vitae totam fugit dignissimos soluta ullam non explicabo expedita voluptas magni, est, facilis assumenda repellendus. Doloribus, cum mollitia eos omnis iusto necessitatibus delectus!"

  }
  ,
  {
    id:4,
    image:AVTR4,
    name:"Nana McBrown",
    review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat illo, voluptatem laborum eos esse sapiente veniam deleniti vitae totam fugit dignissimos soluta ullam non explicabo expedita voluptas magni, est, facilis assumenda repellendus. Doloribus, cum mollitia eos omnis iusto necessitatibus delectus!"

  }
  
  
  ]
const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review for clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonial__container "
           // install Swiper modules
           modules={[ Pagination]}
           spaceBetween={40}
           slidesPerView={1}
           pagination={{ clickable: true }}>
      {
        data.map(({name,review,image}, index)=>{
          return(
            <SwiperSlide key={index} className='testimonial'>
            <div className="client__avatar">
              <img src={image} alt="" />
            </div>
            <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}
              </small>
          </SwiperSlide>
          
          )
        })
      }
      
        
      </Swiper>
    </section>
  );
}

export default Testimonial;
