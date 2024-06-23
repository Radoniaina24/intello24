import React from 'react'
import Image from 'next/image'
import decorationStart from "@/images/decoration-star.svg"
import header from "@/images/study.jpg"
import Svg from './Svg'
export default function Hero() {
  return (
    //  <!-- Header -->
    <header className="header position-relative mt-5  overflow-hidden">
      <Image
        src={decorationStart}
        alt=""
        className="decoration-star position-absolute"
        width={""}
      />
      <Image
       src={decorationStart}
        alt=""
        className="decoration-star-2 position-absolute"
        width={""}
      />
      <div className="container position-relative z-3 mb-5">
        <div className="row">
          <div className="col-lg-6">
            <div className="mt-6">
              <h1 className="lg-text">
                La <span className="text-primary">réussite</span> n&apos;a rien de magique. Elle se prépare
              </h1>
              <p className="lead mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quos ipsam id iure aliquam,
                officiis iste enim repellendus numquam hic cumque sint! Distinctio, debitis ipsam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quos ipsam id iure aliquam,
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="image-container">
              <Image src={header} alt="" className="img-fluid rounded shadow" width={""}  />
            </div>
          </div>
        </div>
      </div>
      <Svg/>
    </header>
  )
}
