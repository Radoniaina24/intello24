import Introduction from '@/components/About/Introduction';
import Contact from '@/components/Contact/Contact';
import Details from '@/components/Details/Details';
import Details2 from '@/components/Details/Details2';
import Hero from '@/components/Hero/Hero';
import Service from '@/components/Middle/Service';
import Projects from '@/components/Projects/Projects';
import Testimonials from '@/components/Testimonials/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <Details />
      <Service />
      <Details2 />
      <Projects />
      <Testimonials />
      <Contact />
    </>
  );
}
