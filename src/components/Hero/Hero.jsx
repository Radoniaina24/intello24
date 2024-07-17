'use client';
import Svg from './Svg';
export default function Hero({children}) {
  return (
    <>
      <header className='header position-relative'>
        <div className='container py-8 '>
            {children}
        </div>
        <Svg/>
      </header>
    </>
  );
}
