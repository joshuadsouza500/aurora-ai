import Image from "next/image";

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Bento from "./components/Bento";
import Slider from "./components/Slider";
import Howitworks from "./components/Howitworks";
import Testimonials from "./components/Testimonials";
import Action from "./components/Action";


 



export default function Home() {
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
