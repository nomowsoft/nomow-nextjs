"use client";
// import { useEffect } from "react";
// import 'aos/dist/aos.css';
// import AOS from 'aos';
import Hero from "@/components/home/hero";
import Aboutus from "@/components/home/about_us";
import OurService from "@/components/home/our_service";

const HomePage = () => {
    // useEffect(() => {
    //     AOS.init({
    //       duration: 1000,
    //       once: true,
    //     });
    //   }, []);
  return (
    <section>
        <Hero />
        <Aboutus />
        <OurService />
    </section>
  )
}

export default HomePage