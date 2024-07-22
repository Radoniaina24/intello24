'use client';
import { TypeAnimation } from 'react-type-animation';
function Slogan(){
    return (
        <>
          <div className='row text-center align-items-center justify-content-center'>
            <div className="col-md-6">
            <h2>
              <span style={{ color: "#ebe0c2"}}>La </span>
              <span style={{color:"#c64f43"}}> 
                réussite 
               </span>
                <span style={{ color: "#ebe0c2"}}> 
                <TypeAnimation
                    sequence={[
                    // Same substring at the start will only be typed out once, initially
                    " n'a rien de magique. Elle se prépare.",
                    1000,
                    ]}
                    wrapper='span'
                    speed={50} 
                    repeat={false}
                    cursor={false}
                />
                </span>
                </h2>
                <button className='btn btn-sm btn-secondary text-white'>En savoir plus</button>
            </div>
          </div>
        </>
    )
}
export default Slogan