import Link from 'next/link'
import Image from "next/image";
import React from 'react'

export default function Footer() {
  return (
    <footer className="flex  items-center justify-between gap-6 border-t border-slate-600 px-8 py-7 md:flex-row text-white">
      <Link href={'/'} className='flex items-center'>
       <Image src="/auroraicon.png" alt="Footer image"
        width ={50}
        height ={50}
        />
        <h4 className='pl-1 font-semibold text-xl'>Aurora <span className='  text-base align-text-top '>ai</span></h4>
    </Link>
       <nav>
        <ul className="flex gap-6">
            <li className="inline-flex min-h-11 items-center">
               About
            </li>
            <li className="inline-flex min-h-11 items-center">
               Demo
            </li>
        </ul>
       </nav>
    </footer>
  )
}
