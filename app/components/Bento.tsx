'use client'
import React from 'react'
import Image from 'next/image'
import Bounded from './Bounded'
import { motion, Variants } from 'framer-motion'
import { once } from 'events'



export default function Bento() {
  
  
  return (
    
    <Bounded className='text-center mt-8'>
        <div className='text-white -mt-10 md:w-[70%] '  >
             
             <motion.h1 className='text-balance  text-5xl font-semibold lg:text-7xl opacity-95'
             initial={{
               filter:'blur(2px)'
             }}
             whileInView={{
              filter:'blur(0px)'
              
             }}
             transition={{
              delay:0.2, 
             }}
             viewport={{once:true}}
             >
                The new
             </motion.h1>
             <motion.h1 className='text-balance  text-5xl font-semibold lg:text-7xl bg-gradient-to-b from-yellow-100 to-yellow-500 bg-clip-text text-transparent'
             initial={{
              filter:'blur(1px)'
            }}
            whileInView={{
             filter:'blur(0px)'
             
            }}
            transition={{
             delay:0.3, 
            }}
            viewport={{once:true}}
             >
              Gold Standard
             </motion.h1>
             <p className='mx-auto tracking-wide  mt-5 max-w-md text-balance text-slate-300 opacity-80 md:text-lg'>
             Introducing a new way of building AI chatbots that leaves everything else in the dust.
             </p>
        </div>
        <div className="mt-16 grid w-11/12 md:max-w-4xl  gap-12 md:grid-cols-3  text-white "
      
        >
           <div className='glass-container col-span-2 md:col-span-1 grid  gap-2  rounded-lg bg-gradient-to-b from-gray-900 to-gray-950 pt-4 pl-4 text-start  '
           
           >
             <h3 className='text-3xl'>
             Endless Ideation
             </h3>
             <p className='max-w-s tracking-wide m  text-slate-300 opacity-80  pb-3 mr-1'>
             Build using popular AI models like BERT, OpenAi and GPT-3 
             </p>
             <div className='overflow-hidden mx-auto h-[164px] '>
             <Image 
              src="/bento2.jpg"
              alt="Features"
              height={200}
              width={300}
              className='rounded-lg md:ml-10  mask-linear mask-dir-to-br  mask-via-100 mask-to-10'
             />
             </div>
           </div>
           <div className='glass-container col-span-2  grid  gap-2  rounded-lg bg-gradient-to-b from-gray-900 to-gray-950 pt-4 pl-4  text-start  '
            
           >
             <h3 className='text-3xl'>
             Benchmark with AI.
             </h3>
             <p className='max-w-s tracking-wide m md:max-w-lg text-slate-300 opacity-80  md:pb-3'>
             Make your Assistant powerful by connecting with any third party tools or APIs to build function calling without using code.
             </p>
             <div className='overflow-hidden w-full h-44'>
             <Image 
              src="/tt.jpg"
              alt="Features"
              height={220}
              width={520}
              className='rounded-lg pr-1 md:ml-14 mask-linear mask-dir-to-br mask-via-100 mask-to-70  '
             />
             </div>
           </div>
           <div className='glass-container col-span-2  grid gap-2 rounded-lg bg-gradient-to-b from-gray-900 to-gray-950 pt-4 pl-4  text-start '
           
           >
             <h3 className='text-3xl'>
             Detailed Analytics Reporting
             </h3>
             <p className=' max-w- tracking-wide sm md:max-w-lg text-slate-300 opacity-80 pb-2 '>
             Unlock user insights by monitoring the quality of user conversations and drive business growth through personalized interactions.
             </p>
             <div className='overflow-hidden w-full '>
             <Image 
              src="/bentolong.png"
              alt="Features"
              height= {200}
              width={520}
              quality={100}
              className='rounded-lg pr-1  mask-linear mask-dir-to-br mask-via-100 md:ml-14 '
             />
             </div>
           </div>
           <div className='glass-container col-span-2 md:col-span-1 grid   rounded-lg bg-gradient-to-b from-gray-900 to-gray-950 pl-4 pt-4 text-start '
           
           >
             <h3 className='text-2xl'>
             24/7 Customer Support
             </h3>
             <p className='max-w-m tracking-wide d text-balance text-slate-300 opacity-80  pb-3'>
              All around customer support
             </p>
             <div className='mx-auto overflow-hidden h-36 w-auto'>
             <Image 
              src="/bentosmall.png"
              alt="Features"
              height={220}
              width={300}
              className='rounded-lg   mask-linear mask-dir-to-br mask-via-100  md:ml-6 '
              />
             </div>
           </div>
        </div>
    </Bounded>
    
  )
}
