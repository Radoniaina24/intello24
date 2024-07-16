'use client';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import Svg from './Svg';
import focused from '@/images/focused.png'
export default function Hero() {
  return (
    <>
      <header className='header position-relative'>
        <div className='container py-8 '>
          <div className='row text-center align-items-center justify-content-center'>
            <div className="col-md-6">
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
                  repeat={false}
                  cursor={false}
                />
              </h1>
            </div>
            {/* <div className="col-md-8">
              <Image src={focused} alt='study' className='img-fluid w-75 h-75'/>
            </div> */}
          </div>
        </div>
        <Svg/>
      </header>
    </>
  );
}
