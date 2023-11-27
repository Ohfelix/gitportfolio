import React from 'react'
import { motion } from "framer-motion"
import myleneImg from '../assets/images/mylene.png'



{/*       <motion.div
initial={{ opacity: 0, scale: 0.5 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.5 }}>
</motion.div> */}


const Contact = () => {
  return (
    <>
      <div className='flex '>
        <div className='bg-gray-600 sm:w-auto m-5 rounded-lg px-4 sm:justify-between center'>

          <div className='w-100  space-between justify-center p-3'>
            <h1 className='heading  text-white'> Entre em contato conosco  <br />
              <span className='heading p-2 text-green-500'>Tire suas Duvidas !</span></h1>
          </div>
          <div className='px-5 mx-auto ' >
            <h2 className='text-white p-2'>Contato:</h2>
            <input
              type='text'
              placeholder='Insira seu contato'
              className='p-2 text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-4 py-2.5 rounded px-2 focus:outline-none'
            />
          </div>
          <div className='px-5 mx-auto'>
            <h2 className='text-white p-2'>Email:</h2>
            <input
              type='text'
              placeholder='Insira seu Email'
              className='p-2 text-gray-400 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-4 py-2.5 rounded px-2 focus:outline-none'
            />
          </div>
          <div className='px-5 mx-auto pb-5'>
            <h2 className='text-white p-2' >Texto:</h2>
            <input
              type='text'
              placeholder='Descreva sua ideia !'
              className='p-2 text-gray-800 sm:w-72 h-48 w-full sm:mr-5 mr-1 lg:mb-4 py-2.5 rounded px-2 focus:outline-none'
            />
          </div>
          <button className='p-3 bg-green-700 rounded-md m-5 justify-end text-xl text-white ' >
            enviar
          </button>
          <div className='p-5 flex sm:itens-'>
            <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800"> 
              <img className="w-40 h-40 rounded-full mx-auto" src={myleneImg} alt="" width="384" height="512" />
              <div className="pt-6 space-y-4">
                <blockquote>
                  <p class="text-lg font-medium text-center p-4">
                    “ Estamos a prontidão para resolver suas duvidas e atende-los ! ”
                  </p>
                </blockquote>
                <figcaption className="font-small p-2">
                  <div >
                    Mylene Sousa
                  </div>
                  <div>
                    Engenheira, São paulo
                  </div>
                </figcaption>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact