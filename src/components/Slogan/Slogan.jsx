'use client';
import { TypeAnimation } from 'react-type-animation';
function Slogan(){
    return (
        <>
          <div className='row text-center align-items-center justify-content-center'>
            <div className="col-md-6">
            <h1>
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
          </div>
        </>
    )
}
export default Slogan