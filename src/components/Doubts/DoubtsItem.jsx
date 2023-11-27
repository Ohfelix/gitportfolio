import { useState, useEffect } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const DoubsItem = ({ item, index }) => {
    const { name, desc, bgColor, textColor } = item;

    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    const fadeInRight = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    };

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <motion.div
            className='p-3 lg:p-5 mt-5 rounded-[12px] border border-solid border-[#D9DCE2] mb-5'
            ref={ref}
            initial={{ opacity: 0, x: -150 }}
            animate={controls}
            variants={fadeInRight}
        >
            <motion.div className='flex items-center justify-between gap-5 '>
                <h4 className='text-[16px] lg:text-[22px] leading-8 text-headingColor'>{item.content}</h4>
                <span
                    className='w-[44px] h-[44px] flex items-center justify-center text-[18px] leading-[30px] font[600]'
                    style={{ background: `${bgColor}`, color: `${textColor}`, borderRadius: '6px 0 0 6px' }}
                >
                    {item.position}
                </span>
            </motion.div>
        </motion.div>
    );
};

export default DoubsItem;
