import React from 'react';
import aboutImg from '../../assets/images/mylene.png';

const About = () => {
    return (
        <div className="container pt-9">
            <section className='bg-gray-100 '>
                <h2 className='text-4xl leading-10 text-headingColor font-semibold md:text-5xl md:leading-12 text-center lg:text-left mb-3'>
                    Sobre Nós
                </h2>
                <div className='flex flex-col lg:flex-row-reverse'>
                    <div className='w-full lg:w-1/2 xl:w-[770px]'>
                        <img className='rounded-full mx-auto lg:mx-0' src={aboutImg} alt="" />
                    </div>
                    <div className='w-full lg:w-[670px] lg:ml-10'>
                        <p className='text__para mt-6 lg:mt-0'>

                            "Bem-vindo ao nosso minimercado exclusivo para moradores de condomínios! Aqui, você encontrará a combinação perfeita entre praticidade e diversidade. Nossa missão é tornar suas compras mais convenientes do que nunca, trazendo a variedade dos corredores direto para o seu lar. Simplifique seu dia a dia conosco e aproveite a experiência de compras que você merece."
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
