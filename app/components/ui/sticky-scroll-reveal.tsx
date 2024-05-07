"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import clsx from "clsx";
import { cn } from "@/app/utils/cn";


export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    id: number;
    title: string;
    description: string;
    content?: string | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, id) => id / cardLength);
    const closestBreakpointid = cardsBreakpoints.reduce(
      (acc, breakpoint, id) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return id;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointid);
  });

  const backgroundColors = [
    "var(--slate-900)",
    
    "var(--slate-950)",
    "var(--gray-900)",
    "var(--background)",
    
  ];
  
  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className=" h-[30rem] md:h-[34rem] overflow-y-auto py-10 "
      ref={ref}
    >
     <div className="text-center text-white py-4 bg-slate-900">
      <h2 className='text-balance text-5xl font-semibold md:text-7xl '>
          How it works
      </h2>
      <p className='mx-auto my-3 max-w-md text-balance text-slate-300 lg:text-lg tracking-wide '>
      Easy 5 minute set-up with no coding needed
      </p>
    </div>
    <div className="flex justify-center md:gap-32 relative rounded-m">
      
      <div className="relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, id) => (
            <div key={item.title + id} className="my-24 md:my-28 ">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === id ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100 capitalize"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === id ? 1 : 0.3,
                }}
                className="ml-5 text-slate-200 text-opacity-80 max-w-sm mt-6 text-lg leading-tight lg:leading-snug"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <motion.div
        
        className={cn(
          "hidden lg:block h-96 w-[480px] rounded-md bg-white sticky top-6 overflow-hidden ring-1",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </motion.div>
      </div>
    </motion.div>
  );
};
