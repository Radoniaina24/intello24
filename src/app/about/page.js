import Introduction from '@/components/About/Introduction';
import Hero from '@/components/Hero/Hero';
export const metadata = {
  title: 'About',
};
export default function page() {
  return <>
  <Hero/>
  <Introduction/>
  </>;
}
