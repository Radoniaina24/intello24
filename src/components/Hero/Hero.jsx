import decorationStart from '@/images/decoration-star.svg';
import ecole from '@/images/ecole.png';
import Image from 'next/image';
export default function Hero() {
  return (
    //  <!-- Header -->
    <header className='header position-relative p-5 overflow-hidden'>
      <Image
        src={decorationStart}
        alt=''
        className='decoration-star position-absolute'
        width={''}
      />
      <Image
        src={decorationStart}
        alt=''
        className='decoration-star-2 position-absolute'
        width={''}
      />
      <div className='container position-relative z-3 mb-5'>
        <div className='row align-items-center'>
          <div className='col-lg-6'>
            <div className='mt-4'>
              <h1 className='lg-text'>
                La <span className='text-primary'>réussite</span> n&apos;a rien
                de magique. Elle se prépare
              </h1>
              <p className='lead mb-4'>
                N &apos;attendez pas que la magie opère, mais prenez votre
                destin en main et créez votre propre réussite. Préparez-vous
                minutieusement, foncez vers vos objectifs avec persévérance, et
                savourez la satisfaction d&apos;une victoire méritée.
              </p>
            </div>
          </div>

          <div className='col-lg-6'>
            <div className='image-container'>
              <Image
                src={ecole}
                alt=''
                className='img-fluid rounded shadow'
                width={''}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <Svg /> */}
    </header>
  );
}
