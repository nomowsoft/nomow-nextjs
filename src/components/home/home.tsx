import Hero from "@/components/home/hero";
import Aboutus from "@/components/home/about_us";
import Services from "@/components/home/our_service";
import Project from "@/components/home/projects";
import StrategicPartner from "@/components/home/strategic_partner";
import OurClient from "@/components/home/customer_partner";
import Clients from "./clients";

const HomePage = () => {
  return (
    <section>
        <Hero />
        <Aboutus />
        <Services />
        <Project />
        <StrategicPartner />
        <Clients />
        <OurClient />
    </section>
  )
}

export default HomePage