import Image from 'next/image'
import React, { ReactNode } from 'react'

import { team } from './Team'



export default function About() {
  return (
    <>
    
      <header className='text-white mb-10 py-10  container text-center space-y-5 md:max-w-4xl mx-auto '>
     
        <h1 className='text-balance  text-[40px] leading-[2.8rem] font-semibold lg:text-7xl py-1 md:leading-tight  '>
        Empowering Businesses with 
        <span className='bg-gradient-to-b from-purple-500 to-purple-600 bg-clip-text text-transparent'> Conversational AI</span>
        
        </h1>
        <p className='mx-auto text-balance md:text-pretty max-w-sm md:max-w-xl  text-slate-300 tracking-wide '>
            Our mission is to empower businesses with cutting-edge AI technology that delivers seamless, personalized customer experiences.
        </p>
      
      </header>
 {/*Line*/}

      <div className='mx-4 md:mx-8 lg:mx-32'>
      <h6 className='text-slate-300 text-sm text-opacity-50'>Co-founders</h6>
      <hr className='opacity-40 rounded-xl' />

      </div>
      <section className='grid md:grid-cols-2 pt-10 text-white w-full items-start  md:px-8 lg:px-32 mb-10 gap-4'>
        
        <div className='pl-1 w-[94%] lg:w-full mx-auto '>
          <h3 className='lg:max-w-lg  text-3xl lg:text-[40px] leading-tight font-medium pt-2 pb-5 lg:pb-6 '>
          We care deeply about the quality of our work.
          </h3>
          <p className='lg:max-w-lg  lg:text-balance text-slate-300 md:leading-snug tracking-wider pb-4 lg:pb-5 '>
          At Aurora, we are passionate about pushing the boundaries of conversational technology. Our team of experts has developed a cutting-edge platform that combines natural language processing, machine learning, and advanced algorithms to deliver an unparalleled user experience.
          </p>
          <button className=' relative inline-flex h-fit w-fit rounded-full border border-blue-100/10 bg-blue-100/10 px-4 py-2 text-blue-100 outline-none ring-yellow-300 transition-colors after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full after:bg-yellow-100 after:bg-opacity-0 after:blur-sm after:transition-all after:duration-500 hover:border-yellow-100/40 hover:text-yellow-300 after:hover:bg-opacity-15  focus:ring-2'>
          We&rsquo;re hiring
          </button>
        </div>
        <div className='flex flex-col items-center md:items-start justify-center pt-8 md:pt-2'>
        <Image
        src='/team2.png'
        alt='team photo'
        width={400}
        height={400}
        priority={true}
        className='overflow-hidden mx-auto rounded-md  aspect-video w-[92%] sm:w-[85%] md:w-auto '
        />
        <h6 className='text-slate-100 text-sm text-opacity-70 pt-1 w-[92%]  sm:w-[85%] md:w-auto '>Aurora ai&apos;s co-founders Walter Marlo, Steven Saarinen, and Wesley Daniel.</h6>
        </div>
      </section>

      <div className='mx-4 md:mx-8 lg:mx-32'>
      <h6 className='text-slate-300 text-sm text-opacity-50'>Team</h6>
      <hr className='opacity-40 rounded-xl' />

      </div>
      <section className='py-14 md:py-16 lg:ml-2'>
        <div className=' mx-auto grid grid-cols-2 md:grid-cols-3  gap-4 px-6 lg:px-32  text-white '>
          {team.map((t):ReactNode =>(
            
            <button data-job={t.job}  key={t.id}
            className='p-2 flex gap-2 items-center transition duration-400'
            
            >
            <Image
            src={t.img}
            className='w-8 h-8 bg-center bg-cover border rounded-full '
            alt='team member'
            width={10}
            height={10}
            />
              <span className="opacity-70 ">{t.name}</span>
            </button>
           
          ))}
        </div>
      </section>
    
    </>
  )
}
