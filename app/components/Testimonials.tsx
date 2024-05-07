import Image from 'next/image'
import React from 'react'

export default function Testimonials() {
  return (
    <>
    <div className="">

       <div className="text-center text-white pt-20 mb-14">
      <h2 className='text-balance text-5xl font-semibold md:text-7xl'>
          Testimonials
      </h2>
      <p className='mx-auto mt-4 max-w-md text-balance text-slate-300 md:text-lg tracking-wide '>
      Loved by our customers across all industries
      </p>
    </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] lg:w-[80%] mx-auto gap-y-6 md:gap-y-8 gap-x-8 my-6 text-white tracking-wide text-opacity-95 text-balance'>
        <div className=' lg:-mt-4 lg:-mb-2  rounded-md flex flex-col  bg-gradient-to-b from-slate-900 to-slate-950  p-5 ring-1  hover:ring-2 justify-around    '>
            <p className='mb-4 text-slate-300 ml-2 tracking-wide '>
            &quot;Since implementing Aurora, we have seen improved customer satisfaction and a noticeable boost in efficiency. Its an essential part of our toolkit now.&quot;
            </p>
            <div className='flex gap-3  text-sm items-center  font-normal '>
             <Image
             src="/person.svg"
             className='w-12 h-12 bg-center bg-cover border rounded-full'
             alt='picture'
             width={20}
             height={20}
             />   
            <div className='text-slate-400'>   
                <h6>
                Ryan Garcia
                </h6>
                <h6>
                Sales Executive at BotWorks Solutions
                </h6>
            </div> 
            </div>
        </div>
        <div className='hidden p-5 ring-1  hover:ring-2 justify-around lg:-mt- mb-3  rounded-md md:flex flex-col  bg-gradient-to-b from-slate-900 to-slate-950    '>
            <p className='mb-4 text-slate-300  ml-2'>
            &quot;Our Customer feedback has been overwhelmingly positive since integrating Aurora into our website.&quot;
            </p>
            <div className='flex gap-3 text-sm items-center '>
             <Image
             src="/person2.svg"
             className='w-12 h-12 bg-center bg-cover border rounded-full'
             alt='picture'
             width={20}
             height={20}
             />   
            <div className='text-slate-400' >   
                <h6>
                 Sara Lee
                </h6>
                <h6>
                Operations Coordinator at Meta
                </h6>
            </div> 
            </div>
        </div>
        <div className='p-5 ring-1  hover:ring-2 justify-around  lg:-mt-4 lg:-mb-2 rounded-md flex flex-col  bg-gradient-to-b from-slate-900 to-slate-950    '>
            <p className='mb-4 text-slate-300 ml-2'>
            &quot;Auroras impact on our customer service has been remarkable, with improved satisfaction and efficiency making it a vital component in our business toolkit.&quot;
            </p>
             <div className='flex gap-3 text-sm items-center '>
             <Image
             src="/person3.svg"
             className='w-12 h-12 bg-center bg-cover border rounded-full'
             alt='picture'
             width={20}
             height={20}
             />   
            <div className='text-slate-400'>   
                <h6>
                    Hanna sue
                </h6>
                <h6>
                  Customer Support at Foxx
                </h6>
            </div> 
            </div>
        </div>
        <div className='flex p-5 ring-1  hover:ring-2 justify-around rounded-md  flex-col  bg-gradient-to-b from-slate-900 to-slate-950    '>
            <p className='mb-4 text-slate-300 ml-2'>
            &quot;Aurora has transformed our customer service experience, resulting in higher satisfaction levels and increased operational efficiency, making it an indispensable asset for our business.&quot;
            </p>
            <div className='flex gap-3 text-sm items-center '>
             <Image
             src="/person4.svg"
             className='w-12 h-12 bg-center bg-cover border rounded-full'
             alt='picture'
             width={20}
             height={20}
             />   
            <div className='text-slate-400'>   
                <h6>
                Jake Miller
                </h6>
                <h6>
                Software Engineer at Virtual Solutions
                </h6>
            </div> 
            </div>
        </div>
        <div className='hidden md:flex p-5 ring-1  hover:ring-2 justify-around  lg:-mt-4 mb-10 rounded-md  flex-col  bg-gradient-to-b from-slate-900 to-slate-950    '>
            <p className='mb-4 text-slate-300 ml-2'>
            &quot;Aurora revolutionized our customer service with improved satisfaction and efficiency, making it an essential tool for our business success.&quot;
            </p>
            <div className='flex gap-3 text-sm items-center '>
             <Image
             src="/person5.svg"
             className='w-12 h-12 bg-center bg-cover border rounded-full'
             alt='picture'
             width={20}
             height={20}
             />   
            <div className='text-slate-400'>   
                <h6>
                    Alex matt
                </h6>
                <h6>
                Customer Support Specialist at Meta
                </h6>
            </div> 
            </div>
        </div>
        <div className='p-4 ring-1  hover:ring-2 justify-around  rounded-md flex flex-col  bg-gradient-to-b from-slate-900 to-slate-950     '>
            <p className='mb-4 text-slate-300 ml-2'>
            &quot;Implementing Aurora has resulted in a significant boost in customer satisfaction and operational efficiency, solidifying its position as a critical tool for our business.&quot;
            </p>
             <div className='flex gap-3 text-sm items-center '>
             <Image
             src="/person8.svg"
             className='w-12 h-12 bg-center bg-cover border rounded-full'
             alt='picture'
             width={20}
             height={20}
             />   
            <div className='text-slate-400'>   
                <h6>
                    Derick alec
                </h6>
                <h6>
                   Data Analyst at sunrise
                </h6>
            </div> 
            </div>
        </div>
        <div className='p-5 ring-1  hover:ring-2 justify-around   rounded-md  flex-col  bg-gradient-to-b from-slate-900 to-slate-950  lg:-mt-2 mb-4 hidden lg:flex '>
            <p className='mb-4 text-slate-300 ml-2'>
            &quot;The positive impact of Aurora on our customer service and efficiency is undeniable, making it a crucial tool in our business operations.&quot;
            </p>
             <div className='flex gap-3 text-sm items-center '>
             <Image
             src="/person6.svg"
             className='w-12 h-12 bg-center bg-cover border rounded-full'
             alt='picture'
             width={20}
             height={20}
             />   
            <div className='text-slate-400'>   
                <h6>
                Daniel Walker
                </h6>
                <h6>
                  Product Manager at Sleev
                </h6>
            </div> 
            </div>
        </div>
        <div className=' hidden lg:flex p-5 ring-1  hover:ring-2 justify-around   rounded-md flex-col  bg-gradient-to-b from-slate-900 to-slate-950   lg:-mt-12 lg:mb-12'>
            <p className='mb-4 text-slate-300 ml-2'>
            &quot;Aurora has proven to be a game-changer for our business, delivering heightened customer satisfaction.&quot;
            </p>
             <div className='flex gap-3 text-sm items-center '>
             <Image
             src="/person7.svg"
             className='w-12 h-12 bg-center bg-cover border rounded-full'
             alt='picture'
             width={20}
             height={20}
             />   
            <div className='text-slate-400'>   
                <h6>
                Olivia Scott
                </h6>
                <h6>
                 UX Designer at Telligent Chat
                </h6>
            </div> 
            </div>
            
        </div>
        <div className='hidden lg:flex p-5 ring-1  hover:ring-2 justify-around   rounded-md  flex-col  bg-gradient-to-b from-slate-900 to-slate-950  lg:-mt-2 mb-4'>
            <p className='mb-4 text-slate-300 ml-2'>
            &quot;Since integrating Aurora, our AI chat has reached new levels of excellence, leading to increased customer satisfaction and efficiency.&quot;
            </p>
            <div className='flex gap-3 text-sm items-center '>
             <Image
             src="/person.svg"
             className='w-12 h-12 bg-center bg-cover border rounded-full'
             alt='picture'
             width={20}
             height={20}
             />   
            <div className='text-slate-400'>   
                <h6>
                Lucas Bennett
                </h6>
                <h6>
                AI Developer at RoboAssist Technologies
                </h6>
            </div> 
            </div>
            
        </div>
      </div>
    </div>
    </>
  )
}
