import Contact from '@/components/Contact/Contact';
import Details from '@/components/Details/Details';
// import Details from '@/components/Details/Details';
import Details2 from '@/components/Details/Details2';
import Hero from '@/components/Hero/Hero';
import Slogan from '@/components/Slogan/Slogan';
import Stats from '@/components/Stats/Stats';
import Systeme from '@/components/Systeme/Systeme';

export const metadata = {
  title: 'Acceuil',
};
export default function Home() {
  return (
    <>
      <Hero><Slogan/></Hero>
      <div className='fond'>
        <Details2 />
        <Details />
        <Systeme />
        <Stats />
        {/* <Contact /> */}
      </div>
    </>
  );
}
