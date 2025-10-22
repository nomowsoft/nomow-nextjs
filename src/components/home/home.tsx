"use client";
// import { useEffect } from "react";
// import 'aos/dist/aos.css';
// import AOS from 'aos';
import Hero from "@/components/home/hero";
import Aboutus from "@/components/home/about_us";
import OurService from "@/components/home/our_service";
import Project from "@/components/home/projects";
import StrategicPartner from "@/components/home/strategic_partner";
import CustomerPartner from "@/components/home/customer_partner";

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
        <Project />
        <StrategicPartner />
        <CustomerPartner />
    </section>
  )
}

export default HomePage