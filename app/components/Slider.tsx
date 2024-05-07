'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const slides = [
 {imgs : '/airbnb.svg'},
 {imgs : '/image4.png'},
 {imgs : '/image2.png'},
 {imgs : '/image1.png'},
 {imgs : '/image5.png'},
];


export default function Slider() {
    const duplicatedSlides = [...slides, ...slides, ...slides];

    return (
        <>
        <h3 className='mx-auto mt-2 mb-3 max-w-72
         md:max-w-3xl  text-center text-lg tracking-wide md:text-2xl text-slate-300 '>Trusted by companies around the world</h3>
        <div className=" rounded-lg h-full overflow-hidden mx-auto py-3" style={{ width: "85%" }}>

            <motion.div
                className="flex py-4"
                animate={{
                    x: ['0%', '-100%'],
                    transition: {
                        ease: 'linear',
                        duration: 17,
                        repeat: Infinity,
                    }
                }}
            >
                {duplicatedSlides.map((slide, index) => (
                    <div key={index} className="flex-shrink-0 mx-5 lg:-mx-4" style={{ width: `${100 / slides.length}%` }}>
                        <Image className="flex items-center justify-center h-full"
                        alt='image'
                        src={slide.imgs}
                        height={100}
                        width={100}
                        >
                        </Image>
                       
                    </div>
                ))}
            </motion.div>
  
        </div>
        </>
    );
};
