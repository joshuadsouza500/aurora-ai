'use client'
import Button from './Button'
import Image from 'next/image'

import Bounded from './Bounded'
import { DotBackground } from './ui/DotBackground'
import { motion } from 'framer-motion'
import Link from 'next/link'




export default function Hero() {


  return (
    <Bounded className='text-center '>
     <div className=' relative w-full'  >
      <DotBackground />
    <div className='text-white md:-mt-10 mb-16'  >
  
        <motion.h1 className='text-balance text-[40px] font-semibold sm:text-5xl  lg:text-hm leading-[1.1]'
        initial= {{
          scale:0.8,
          opacity:0
        }}
        viewport={{ once:true }}
        animate={{
          scale:1,
          opacity:1,
          transition:{
            duration:1.7,
            type: 'spring',

          }
        }}
        >
        Designs that shine with <span className='bg-gradient-to-br from-white to-[#757575ef] bg-clip-text text-transparent'>
        dynamic intelligence
        </span>
        </motion.h1>
       
         
       
       
        <motion.p className='mx-auto mt-3 max-w-md text-balance text-slate-200 tracking-wide text-base md:text-lg'
        initial= {{
          y:15,
          opacity:0
        }}
        viewport={{ once:true }}
        animate={{
          y:0,
          opacity:1,
          transition:{
            delay:1,
            duration:0.8,
            ease:'easeIn'
          }
        }}
        > 
       
        The AI features you need to transport your business from the little leagues to the big time.
        </motion.p>
        <motion.div 
        className='pt-4 '
         initial= {{
          y:15,
          opacity:0
        }}
        viewport={{ once:true }}
        animate={{
          y:0,
          opacity:1,
          transition:{
            delay:1.5,
            duration:0.6,
            ease:'easeIn'
          }
        }}
        >
        
           <Button  />
          
        </motion.div>
        
    </div>
    </div>

    <motion.div className=' w-[95%] md:w-full glass-container bg-[#222222] rounded-md shadow-xl '
    initial= {{
      y:100,
      opacity:0
    }}
    viewport={{ once:true }}
    animate={{
      y:0,
      opacity:1,
      transition:{
        delay:2.0,
        duration:1,
        ease:'easeIn'
      }
    }}
    >
    <motion.div className="absolute inset-0 -z-10 bg-blue-500/30  blur-2xl "
    initial= {{
      
      opacity:0
    }}
    viewport={{ once:true }}
    animate={{
     
      opacity:1,
      transition:{
        delay:2.8,
      }
    }}
    />
    <Image
          src="/hero-image.png"
          alt="hero"
          height={720}
          width={1400}
          quality={100}
          priority
          className=" mx-auto rounded-md object-cover h-full w-auto "
          draggable={false}
        />
    </motion.div>
  
    
    </Bounded>
  )
}
