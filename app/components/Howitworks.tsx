"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
     id: 1,
    title: "1. Upload files and train you AI Agent",
    description:
      "Train your chatbot on data from sitelinks, youtube links or uploaded files to build a chatbot from your knowledge base.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white relative">
      <Image
        quality={100}
        fill={true}
        sizes ="(max-width: 768px) 100vw"
        	style={{objectFit: "fill"}}
        src="/bot2.png"
        
        className="h-full w-full object-cover"
        alt="linear board demo"
      />
    </div>
    ),
  },
  {
     id: 2,
    title: "2. Customize to fit your brand",
    description:
      "Customize your chatbot's role, tone, style, and write custom instructions to give your chatbot a behavior and personality. ",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white relative">
        <Image
          quality={100}
          fill={true}
          	style={{objectFit: "fill"}}
          src="/bot4.png"
          sizes ="(max-width: 768px) 100vw"
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
     id: 3,
    title: "3. Ready in 5 minutes ",
    description:
      "Wait for 5 minutes to have the Chatbot read through your website and files. Once done, you can instantly converse with it. ",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white relative">
        <Image
          quality={100}
          fill={true}
          	style={{objectFit: "cover"}}
          src="/chat6.png"
          sizes ="(max-width: 768px) 100vw"
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
     id: 4,
    title: "4. Embed on your website",
    description:
    "Easily integrate your chatbot into your website using our simple embed code. Engage with your visitors and provide instant support using your knowledgeable chatbot. ",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white relative">
      <Image
        quality={100}
        fill={true}
        	style={{objectFit: "fill"}}
        src="/bot5.png"
        sizes ="(max-width: 768px) 100vw"
        className="h-full w-full object-cover"
        alt="linear board demo"
      />
    </div>
    ),
  },

];
export default function Howitworks() {
  return (
    <>
    
    <div className=" mt-8 ">
      <StickyScroll content={content} />
    </div>
    </>
  );
}
