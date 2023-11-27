import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import logo from '../../assets/images/blacklogo.png';

const Footer = () => {
  return (
    <div className='bg-gray-900 text-white'>
      <div className='md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#fffffff19] py-7'>
    
        <img src={logo} alt='Logo' className='flex w-[200px] mx-auto mb-8' />
        <div className='flex justify-center '>
          <div className='p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-orange-500 duration-300'>
            <a href=''>
              <BsInstagram />
            </a>
          </div>
          <div className='p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-blue-500 duration-300'>
            <a href=''>
              <AiOutlineMail />
            </a>
          </div>
          <div className='p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-green-500 duration-300'>
            <a href=''>
              <AiOutlineWhatsApp />
            </a>
          </div>
        </div>
        <h2 className='heading text-center mb-2'>
          Todos os direitos Reservados 2023
        </h2>
      </div>
    </div>
  );
};

export default Footer;




































/* import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logobg.png'
import { AiFillWhat, AiFillMessage, AiFillInstagram } from 'react-icons/ai' 


 const socialLinks = [
  {
    path: "https://whatsapp//1191338-6726:",
    icon: <AiFillWhat className='group-hover:text-white w-4 h-5' />,
  },
  {
    path: "https://contato@broth3rsmarket.com",
    icon: <AiFillMessage className='group-hover:text-white w-4 h-5' />,
  },
  {
    path: "https://Intagram.com/@broth3rsmarket",
    icon: <AiFillInstagram className='group-hover:text-white w-4 h-5' />,
  },
];  

const quiclyLinks01 = [
  {
    path: '/home',
    display: "Home"
  },
  {
    path: '/contact',
    display: "Contact"
  },
  {
    path: '/services',
    display: "Projetos"
  },
]

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <div className='container'>
      <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
        <div>
          <img src={logo} alt="" />
          <p className='text-[16px] leading-7 font-[400] text-textColor'>Copyrights {year} <br />Todos os Direitos Reservados </p>
        </div>
        <div>
          {}
        </div>

      </div>
      Footer
    </div>
  )
}

export default Footer */