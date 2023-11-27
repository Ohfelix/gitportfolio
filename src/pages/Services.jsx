import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image1 from '../assets/images/image1.jpeg';
import image2 from '../assets/images/image2.jpeg';
import image3 from '../assets/images/image3.jpeg';
import image4 from '../assets/images/image4.jpeg';
import extImg1 from '../assets/images/exteriorimg1.jpeg';
import extImg2 from '../assets/images/exteriorimg2.jpeg';
import aerImg1 from '../assets/images/aereaIMg.jpeg';

const Services = () => {
  return (
    <>
      <section className='bg-gray-200'>

        <div className='text-center text-2xl m-3'>
          <h1>Layout Padrão</h1>
        </div>
        <Carousel>
          <div className='m-8'>
            <img className='w-full' src={image1} alt="" />
            <p className="legend">Texto Introdutorio, explicando a localidade de moveis etc..</p>
          </div>
          <div className='m-8'>
            <img className='w-full' src={image2} alt="" />
            <p className="legend">Texto Introdutorio, explicando a localidade de moveis etc..</p>
          </div>
          <div className='m-8'>
            <img className='w-full' src={image3} alt="" />
            <p className="legend">Texto Introdutorio, explicando a localidade de moveis etc..</p>
          </div>
          <div className='m-8'>
            <img className='w-full' src={image4} alt="" />
            <p className="legend">Texto Introdutorio, explicando a localidade de moveis etc..</p>
          </div>
        </Carousel>
      </section>

      <section className='bg-gray-100'>
        <div className='text-center text-2xl m-3 '>
          <h1>Imagem exterior Padrão</h1>
        </div>
        <Carousel>
          <div className='m-8'>
            <img className='w-full' src={extImg1} alt="" />
            <p className="legend">Texto Introdutorio, explicando a localidade de moveis etc..</p>
          </div>
          <div className='m-8'>
            <img className='w-full' src={extImg2} alt="" />
            <div className='m-4'>

              <p className="legend">Texto Introdutorio, explicando a localidade de moveis etc..</p>
            </div>
          </div>
        </Carousel>
      </section>
      <section className='bg-gray-200'>
        <div className='text-center text-2xl m-8 pt-5 '>
          <h1>Layout Padrão Aerea</h1>
        </div>
        <Carousel>
          <div className='m-8'>
            <img className='w-full' src={aerImg1} alt="" />
            <p className="legend">Texto Introdutorio, explicando a localidade de moveis etc..</p>
          </div>
        </Carousel>
      </section>
    </>
  )
}

export default Services