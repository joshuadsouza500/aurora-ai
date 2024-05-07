'use client'
import React from 'react'
import { useSession } from 'next-auth/react'

export default function Demo() {

  const { data: session } = useSession();
  return (
    <>
       <div className="flex h-dvh pt-2  mx-auto flex-col bg-slate-950">
      
      <div className="flex-1 overflow-auto  mx-auto w-[95%] ">
        <div className="space-y-4">
          <div className="flex justify-start ">
            <div className='rounded-full w-10 h-[41px]  mr-2  bg-slate-100  text-center' style={{ fontSize: '30px' }} >
            &#x1F916;
            </div>
          <div className="bg-slate-800 text-white rounded-lg p-4 max-w-[70%]">
              <p className='text-slate-100'>Hello <span className='font-bold text-white'>{session?.user?.name}</span>, how can I assist you today?</p>
            </div>
          </div>
          <div className="flex justify-end">
         
            <div className="max-w-[70%] rounded-lg bg-blue-500 p-3 text-white">
              <p>Hi ....</p>
            </div>
            <div className='rounded-full w-10 h-[41px] ml-2  bg-slate-100  text-center' style={{ fontSize: '30px'}} >
            &#128104;
            </div>
          </div>
          
        </div>
      </div>
      <div className="bg-slate-800 py-4 px-6 flex items-center gap-2 bottom-0 right-0 left-0 absolute mx-auto md:w-[95%]">
        <input
          className="flex-1 bg-slate-700 border-none text-white rounded-lg px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type your message..."
          type="text"
        />
        <button className="rounded-md bg-blue-500 p-4 text-white hover:bg-blue-600 focus:outline-none">
            Send
          </button>
      </div>
    </div>
     
  
    </>
  )
}


