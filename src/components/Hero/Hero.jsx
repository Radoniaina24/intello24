'use client';
import Image from 'next/image';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import hero from '@/images/hero.png'
import Svg from './Svg';
export default function Hero() {
  return (
    <>
      <header className='header position-relative'>
        <div className='container py-8 '>
          <div className='row text-center align-items-center'>
            <div className="col-md-4">
              <h1 className='text-white'>
                La <span className='text-primary fw-bold'>réussite </span>
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "n'a rien de magique. Elle se prépare.",
                    1000,
                  ]}
                  wrapper='span'
                  speed={50}
                  style={{}}
                  repeat={false}
                  cursor={false}
                />
              </h1>
            </div>
            <div className="col-md-8">
              <Image src={hero} alt="hero image" className='img-fluide  w-75 h-75'/>
            </div>
          </div>
        </div>
        <Svg/>
      </header>
    </>
  );
}
/**<div className='col-12'>
              <h1 className='xl-text text-white'>
                La <span className='text-primary fw-bold'>réussite </span>
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "n'a rien de magique. Elle se prépare.",
                    1000,
                  ]}
                  wrapper='span'
                  speed={50}
                  style={{}}
                  repeat={false}
                  cursor={false}
                />
              </h1>
              <Link href='/about' className='btn btn-primary text-white mt-4'>
                En savoir plus
              </Link>
            </div> */