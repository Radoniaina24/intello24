import Hero from '@/components/Hero/Hero';
import Lycee from '@/components/Lycee/Lycee';

export default function page() {
  return(
    <>
      <Hero>
        <div className='text-center'>
          <h2 class="mb-4 text-secondary">
              Notre lycée
          </h2>
          <hr className="hr-heading"/>
        </div>
      </Hero>
      <Lycee />
    </>
  );
}
