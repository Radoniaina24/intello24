'use client';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
export default function Hero() {
  return (
    <>
      <header className='header position-relative'>
        <div className='container'>
          <div className='row text-center'>
            <div className='col-12'>
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
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
