'use client'
import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import ButtonLink from './ButtonLink'
import clsx from 'clsx'
import { easeInOut, motion,useMotionValueEvent,useScroll, } from 'framer-motion'

export default function NavBar() {

   const [open,setOpen] = useState(false);
   const [hidden, setHidden] = useState(false)
   const {scrollY} = useScroll();

  //The motionvalueventshows when anything changes so when the scroll position changes it is notified.//
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous: any = scrollY.getPrevious();

    // As we scroll down the number increases//
    if (latest < previous ){
      setHidden(false);
      
    }
    else{
       setHidden(true);
    }
  })
  return (
   <>
   
   {/*Big screen nav*/ }
    <motion.nav className="hidden md:flex items-center justify-between gap-6 border border-slate-600 px-16 md:py-4 md:flex-row text-white w-[70%] lg:w-[55%] bg-[#E2E8F01A] backdrop-blur-sm mx-auto rounded-[40px] mb-4 my-3 sticky top-1 z-20 inset-x-0"
    variants={{
      hidden :{
        y: -100,   
      },
      visible:{
        y:0,
      },
    }}
    animate = {hidden ? "hidden": "visible" }
    transition={{duration:0.6 , ease:easeInOut}}
    >
    <Link href={'/'} className='flex items-center'>
       <Image src="/auroraicon2.png" alt="Footer image"
        width ={50}
        height ={50}
        />
        <h4 className='pl-1 font-semibold text-2xl'>Aurora <span className='  text-base align-text-top '>ai</span></h4>
    </Link>
    <nav>
     <ul className="flex gap-6">
         <li className="inline-flex min-h-11 items-center">
          <Link href={'/about'} className='text-xl font-medium hover:text-yellow-300 hover:animate-pulse '>
            About
            </Link>
         </li>
         <li className="inline-flex min-h-11 items-center">
         <Link href={'/chat'}>
           <ButtonLink  />
           </Link>
         </li>
     </ul>
    </nav>
 </motion.nav>


  {/*Mobile nav*/ }
  <nav className="md:hidden flex items-center justify-between gap-6 border-b border-slate-600 px-6 text-white   bg-[#E2E8F01A]  sticky top z-20 inset-x-0 "
     
  >
    <Link href={'/'} className='flex items-center  z-30'
    onClick={() => setOpen(false)}
    >
       <Image src="/auroraicon2.png" alt="Footer image"
        width ={50}
        height ={50}
        />
        <h4 className='pl-1 font-semibold text-xl'>Aurora <span className='  text-base align-text-top '>ai</span></h4>
    </Link>
    <button
            type="button"
            className=" relative top-1 mb-2 block p-4 text-3xl text-white md:hidden"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
           <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            
          </button>
    <div
          className={clsx(
            "gap-4 fixed inset-0 top-1 z-20 flex flex-col items-end bg-[#070815] pr-6 pt-14 transition-transform duration-400 ease-in-out motion-reduce:transition-none md:hidden",
            open ? "translate-x-0" : "translate-x-[110%]",
          )}
        >
       
       <button
            type="button"
            className="fixed right-2 top-4 mb-4 block p-4 text-3xl text-white md:hidden "
            aria-expanded={open}
            onClick={() => setOpen(false)}
            style={{ fontSize: '70px' }}
          >
            &times;            
          </button>


         <div>
         <ul className="flex flex-col gap-5 items-end mt-10 mr-4">
         <li className=" text-4xl font-medium">
          <Link href={'/about'}>
            About
            </Link>
         </li>
         <li className=" "  >
           <Link href={'/chat'}>
           <ButtonLink  />
           </Link>
         </li>
     </ul>
         </div>
    </div>
    </nav>
 </>
  )
}
