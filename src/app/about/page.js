import Introduction from '@/components/About/Introduction';
import Hero from '@/components/Hero/Hero';
export const metadata = {
  title: 'About',
};
export default function page() {
  return <>
  <Hero> 
    <div className='row'>
      <div className='col-lg-8 offset-lg-2 text-center'>
        <h2>NOTRE ÉTABLISSEMENT</h2>
        <p className='fs-5'>
          Reconnu pour les réusites des élèves aux examens officiels de
          brevet et de Baccalauréat (Série génerale et SMTG).
        </p>
      </div>
    </div>
  </Hero>
  <Introduction/>
  </>;
}
