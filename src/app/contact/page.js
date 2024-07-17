import Contact from '@/components/Contact/Contact';
import Hero from '@/components/Hero/Hero';

export const metadata = {
  title: 'Contact',
};
export default function page() {
  return<>
  <Hero><h1 className='text-center'>Laissez nous un message</h1></Hero>
  <Contact />
  </> 
}
