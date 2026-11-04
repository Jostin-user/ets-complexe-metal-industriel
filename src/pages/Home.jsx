import Hero from "../components/home/Hero";
import Needs from "../components/home/Needs";
import ServicesSection from "../components/home/ServicesSection";
import ProjectsSection from "../components/home/ProjectsSection";
import WhyUs from "../components/WhyUs";
import Method from "../components/Method";
import About from "../components/home/About";
import Zone from "../components/home/Zone";
import Testimonials from "../components/home/Testimonials";
import CtaFinal from "../components/CtaFinal";
import usePageMeta from "../utils/usePageMeta";

export default function Home() {
  usePageMeta();
  return ( 
    <>
      <Hero />
      <Needs />
      <ServicesSection />
      <ProjectsSection />
      <WhyUs />
      <Method />
      <About />
      <Zone />
      <Testimonials />
      <CtaFinal />
    </>
  );
}
