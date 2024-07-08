import Introduction from '@/components/About/Introduction';
import Caroussel from '@/components/Caroussel/Caroussel';
import Contact from '@/components/Contact/Contact';
import Details2 from '@/components/Details/Details2';
import Projects from '@/components/Education/Projects';
import Hero from '@/components/Hero/Hero';
export const metadata = {
  title: 'Acceuil',
};
export default function Home() {
  return (
    <>
      <Caroussel />
      <Hero />
      <Introduction />
      {/* <Details /> */}
      {/* <Service /> */}
      <Details2 />
      <Projects />
      {/* <Testimonials /> */}
      <Contact />
    </>
  );
}
