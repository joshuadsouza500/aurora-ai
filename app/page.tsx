'use client'

import Footer from "./components/Footer";

import Hero from "./components/Hero";
import Bento from "./components/Bento";
import Slider from "./components/Slider";
import Howitworks from "./components/Howitworks";
import Testimonials from "./components/Testimonials";
import Action from "./components/Action";
import Lenis from '@studio-freight/lenis'
import { useEffect } from "react";

 



export default function Home() {

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)  
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  })


  return (
    <>
    
    <Hero />
    <Slider />
    <Bento />

    <Howitworks />
    <Testimonials />
    <Action />

    <Footer />
    
    </>
  );
}
