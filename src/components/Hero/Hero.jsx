'use client';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
export default function Hero() {
  return (
    <>
      <header class='header position-relative'>
        <div class='container'>
          <div class='row text-center'>
            <div class='col-12'>
              <h1 class='xl-text'>
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
              <Link href='/about' class='btn btn-primary text-white mt-4'>
                Découvrir le collège
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
