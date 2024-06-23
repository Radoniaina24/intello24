import Contact from "@/components/Contact/Contact";
import Details from "@/components/Details/Details";
import Details2 from "@/components/Details/Details2";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Introduction from "@/components/Introduction/Introduction";
import Service from "@/components/Middle/Service";
import Projects from "@/components/Projects/Projects";
import Testimonials from "@/components/Testimonials/Testimonials";
import ScrollTopBtn from "@/components/scrollTopButon/scrollTopBtn";

export default function Home() {
  
  return (
    <>
      <Hero/>
      <Introduction/>
      <Details/>
      <Service/>
      <Details2/>
      <Projects/>
      <Testimonials/>
      <Contact/>
      <Footer/>
      <ScrollTopBtn/>
    </>
  );
}
