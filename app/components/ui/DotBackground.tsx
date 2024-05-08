import React from "react";

export function DotBackground() {
  return (
    <>
    <div className="hidden md:flex h-[27rem] 
    md:-mt-24 custom-lg:-ml-16 w-full  custom-lg:w-[110%]  bg-dot-white/[0.2]  absolute " style={{
      maskImage: "linear-gradient(black, transparent)",
    }} />

    <div className="md:hidden h-[20rem] -mt-16 mx-2
     w-full  bg-dotsmall-white/[0.2]  flex  absolute " style={{
      maskImage: "linear-gradient(black, transparent)",
    }} />

</>
  );
}
