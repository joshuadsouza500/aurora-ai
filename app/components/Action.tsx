'use client'
import React from 'react'
import Bounded from './Bounded'
import Image from 'next/image'
import Button from './Button'
import { motion } from 'framer-motion'

export default function Action() {
  return (
    <Bounded className='relative text-balance  text-center font-medium mt-10 md:pt-10'>
        <div className='glow absolute -z-10 aspect-square w-full max-w-sm rounded-full bg-blue-500/50 blur-[150px] filter'
        
        />
        
        <motion.div className='glass-container rounded-lg p-3 bg-gradient-to-b from-slate-900 to-[#060f21] md:rounded-xl   '
       
        >
          <Image 
          src="/auroraicon2.png"
          alt='logo'
          width={120}
          height={120}
          className='h-auto w-auto'
          />
        </motion.div>
        <div className='text-white mt-10'  >
  
        <h1 className='text-[37px] leading-[2.6rem] md:text-6xl  font-semibold lg:text-7xl md:w-10/12 md:pb-2 mx-auto bg-clip-text text-transparent bg-gradient-to-b from-slate-50 to-slate-300 '>
        AI powered insights for designers
         
        </h1>
        <p className='mx-auto mt-3 max-w-md text-balance text-slate-300 tracking-wide md:text-lg '>
        Your customers deserve  customer service that actually answers their questions.
        </p>
        <Button className="mt-6 origin-center" />

       
    </div>
    </Bounded>
  )
}
