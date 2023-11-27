import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../assets/images/flyer.png';
import taskImg from '../assets/images/task.png';
import faqImg from '../assets/images/faqs.jpg';
import faqImg2 from '../assets/images/duvida.jpg';
import About from '../components/About/About';
import ServicesList from '../components/Services/ServicesList';
import FaqList from '../components/Faq/FaqList';
import Contact from './Contact';
import DoubtsList from '../components/Doubts/DoubtsList';

const Home = () => {
  return (
    <section className='hero__section pt-12 2xl:h-[600px]'>
      <div className='container'>
        <div className='flex flex-col lg:flex-row gap-8 items-center justify-between'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='lg:w-[570px]'
          >
            <motion.h1
              className='text-4xl leading-10 text-headingColor font-semibold md:text-5xl md:leading-12 text-center mb-3'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Comodidade e Variedade
              <br />
              <span className='text-green-500'>no seu Condomínio!</span>
            </motion.h1>
            <motion.h3
              className='text-center text-lg pt-4 font-bold mb-5'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              "Descubra o Minimercado que Chegou para Facilitar suas Compras!"
            </motion.h3>
            <motion.span
              className='w-100 h-2 bg-purple-500 rounded-full block mt-5'
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: '100%' }}
              transition={{ duration: 0.5, delay: 0.6 }}
            ></motion.span>
            <motion.p
              className='text-lg mt-3'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              A rede de minimercados pensado para trazer conforto e comodidade
              para ganho de tempo de quem vive em condomínios, seja residencial
              ou comercial, trazendo o essencial dos itens de mercado com toda
              personalidade e praticidade de uma conveniência a um elevador de
              distância.
            </motion.p>
          </motion.div>
          <div className='flex justify-end lg:w-[570px]'>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <img className='w-full' src={heroImg} alt='' />
            </motion.div>
          </div>
        </div>
      </div>

      <div className='container mt-10'>
        <h1 className='text-4xl leading-10 p-2 text-headingColor font-semibold md:text-5xl md:leading-12 text-center mb-5'>
          Quais as vantagens em levar um minimercado ao seu condomínio?
        </h1>
        <ServicesList />
      </div>

      <div className='container'>
        <h2 className='text-center font-abc text-2xl md:text-5xl lg:text-6xl text-white bg-gradient-to-r from-purple-500 to-indigo-500 m-8 p-5 md:p-8 rounded-md'>
          As perguntas mais frequentes sobre nosso negocio!
        </h2>
        <div className='flex flex-col md:flex-row items-start justify-center md:justify-between gap-10 lg:gap-0'>
          <div className='w-full md:w-1/2'>
            {/* <Accordion items={accordionsData} /> */}
            <img src={faqImg} className='rounded-lg w-full p-2' alt='' />
            <img src={faqImg2} className='rounded-lg w-full pt-4 p-2' alt='' />
          </div>
          <div className='w-full md:w-1/2 text-center p-2'>
            <FaqList />
          </div>
        </div>
      </div>

      <div className='container pt-3 mt-8'>
        <h2
          className='text-center font-abc text-4xl md:text-5xl lg:text-6xl text-white bg-gradient-to-r from-purple-500 to-indigo-500 p-6 md:p-8 rounded-md'
        >
          Como o minimercado funciona?
        </h2>
        <div className='text-3xl md:text-4xl lg:text-5xl leading-8 md:leading-10 p-4 m-4 text-headingColor font-semibold'>
          <div className='flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 md:gap-10 lg:gap-0'>
            <div className='w-full'>
              <img src={taskImg} alt='' className='w-full rounded-md' />
              <DoubtsList />
            </div>
          </div>
        </div>
      </div>



      <div className='container mt-10'>
        <Contact />
      </div>
    </section>
  );
};

export default Home;
