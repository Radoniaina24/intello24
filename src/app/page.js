import Contact from '@/components/Contact/Contact';
import Details from '@/components/Details/Details';
// import Details from '@/components/Details/Details';
import Details2 from '@/components/Details/Details2';
import Hero from '@/components/Hero/Hero';
import Stats from '@/components/Stats/Stats';
import Systeme from '@/components/Systeme/Systeme';

export const metadata = {
  title: 'Acceuil',
};
export default function Home() {
  return (
    <>
      <Hero />
      <Details2 />
      <Details />
      <Stats />
      <Systeme />
      <Contact />
    </>
  );
}
