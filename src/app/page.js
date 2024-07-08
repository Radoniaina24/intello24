import Introduction from '@/components/About/Introduction';
import Contact from '@/components/Contact/Contact';
import Details from '@/components/Details/Details';
import Details2 from '@/components/Details/Details2';
import Projects from '@/components/Education/Projects';
import Hero from '@/components/Hero/Hero';
import Service from '@/components/Middle/Service';
import Testimonials from '@/components/Testimonials/Testimonials';
export const metadata = {
  title: 'Acceuil',
};
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
