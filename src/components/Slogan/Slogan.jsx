'use client';
import { TypeAnimation } from 'react-type-animation';
function Slogan(){
    return (
        <>
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
        </>
    )
}
export default Slogan