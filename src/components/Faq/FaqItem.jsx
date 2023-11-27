import { useState, useEffect } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FaqItem = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    const toggleAcordion = () => {
        setIsOpen(!isOpen);
    };

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
            className='p-3 lg:p-5 rounded-[12px] border border-solid border-[#D9DCE2] mb-5 cursor-pointer'
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            variants={fadeInRight}
            onClick={toggleAcordion}
        >
            <motion.div className='flex items-center justify-between gap-5'>
                <h4 className='text-[16px] lg:text-[22px] leading-8 text-headingColor'>{item.question}</h4>
                <motion.div
                    className={`${isOpen && 'bg-primaryColor text-white border-none'} w-7 h-7 lg:h-8 border border-solid border-[#141F21] rounded flex items-center justify-center`}
                >
                    {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </motion.div>
            </motion.div>
            {isOpen && (
                <div className='mt-4'>
                    <motion.p className='text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-textColor'>
                        {item.content}
                    </motion.p>
                </div>
            )}
        </motion.div>
    );
};

export default FaqItem;
