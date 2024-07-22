"use client"
import Image from "next/image";
import start from '@/images/decoration-star.svg'
import Svg from "../Hero/Svg";

function Details2(props) {
  return (
    <>
      <section className=' introduction bg-light py-6 text-center position-relative overflow-hidden'>
        <Image src={start} alt='start' className="decoration-star position-absolute"/>
        <Image src={start} alt='start' className="decoration-star-2 position-absolute"/>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 offset-lg-2' data-aos="zoom-in-down" data-aos-duration="4000">
              <h4 className='lh-base '>
                Votre avenir commence ici : Un <span className="text-secondary fw-bolder">lycée d&apos;excellence</span> qui vous
               <span className="text-primary"> ouvre les portes des meilleures universités</span>.
              </h4>
              <hr className="hr-introduction" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Details2;
