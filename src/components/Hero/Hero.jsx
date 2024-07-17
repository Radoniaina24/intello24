'use client';
import Svg from './Svg';
export default function Hero({children}) {
  return (
    <>
      <header className='header position-relative'>
        <div className='container py-8 '>
          <div className='row text-center align-items-center justify-content-center'>
            <div className="col-md-6">
              <h1 className='text-white'>
                {children}
              </h1>
            </div>
          </div>
        </div>
        <Svg/>
      </header>
    </>
  );
}
