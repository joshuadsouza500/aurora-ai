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
    <motion.nav className="flex items-center justify-between gap-6 border border-slate-600 px-4 md:px-12 py-2  md:flex-row text-white w-[95%] md:w-[70%] lg:w-[55%] bg-[#E2E8F01A] backdrop-blur-sm mx-auto rounded-[30px] md:rounded-[40px] mb-4 my-3 sticky top-1 z-20 inset-x-0"
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
        className='w-auto h-auto'
        />
        <h4 className='pl-1 font-semibold text-2xl'>Aurora <span className='  text-base align-text-top '>ai</span></h4>
    </Link>
    <nav>
     <ul className="flex gap-4 md:gap-6">
         <li className="inline-flex min-h-11 items-center">
          <Link href={'/about'} className='text-lg md:text-xl font-medium hover:text-yellow-300 hover:animate-pulse '>
            About
            </Link>
         </li>
         <li className="inline-flex min-h-10 items-center">
         <Link href={'/chat'}>
           <ButtonLink value="Get Started" />
           </Link>
         </li>
     </ul>
    </nav>
 </motion.nav>

 </>
  )
}
