import Link from 'next/link'
import Image from "next/image";
import React from 'react'
import ButtonLink from './ButtonLink';

export default function Footer() {
  return (
    <footer className="flex  items-center justify-between gap-6 border-t border-slate-600 px-6 py-6 md:flex-row text-white">
      <Link href={'/'} className='flex items-center'>
       <Image src="/auroraicon.png" alt="Footer image"
        width ={40}
        height ={40}
        className='h-auto w-auto'
        />
        <h4 className='pl-1 font-semibold text-xl md:text-2xl'>Aurora <span className='  text-base align-text-top '>ai</span></h4>
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
           <ButtonLink value="Demo" />
           </Link>
         </li>
     </ul>
       </nav>
    </footer>
  )
}
