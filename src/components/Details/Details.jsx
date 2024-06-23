import Image from 'next/image'
import React from 'react'
import decorationStart from "@/images/decoration-star.svg"
import detail from "@/images/details-1.png"
export default function Details() {
  return (

    <section
      id="details"
      className="details position-relative my-6 overflow-hidden"
    >
      <Image
        src={decorationStart}
        alt=""
        className="decoration-star position-absolute"
      />
      <div className="container position-relative z-3">
        <div className="row">
          <div className="col-lg-6">
            <div className="image-container d-flex justify-content-center">
              <Image src={detail} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mt-4">
              <h2 className="mb-4">
                Create <span className="text-primary">Unique</span> Office Spaces
              </h2>
              <ul className="list-unstyled">
                <li className="d-flex mb-3">
                  <i className="fas fa-check text-primary fa-2x mx-4"></i>
                  <p>
                    Our approach ensures that every office space is tailored to
                    the unique needs and preferences of our clients. No two
                    spaces look the same.
                  </p>
                </li>
                <li className="d-flex mb-3">
                  <i className="fas fa-check text-primary fa-2x mx-4"></i>
                  <p>
                    We pay attention to every detail, ensuring that the design
                    elements, furniture, and decor create a harmonious and
                    inspiring atmosphere.
                  </p>
                </li>
                <li className="d-flex mb-3">
                  <i className="fas fa-check text-primary fa-2x mx-4"></i>
                  <p>
                    Our team of experts guarantees that your office space will
                    be a reflection of your brand identity and company culture.
                  </p>
                </li>
                <li className="d-flex mb-3">
                  <i className="fas fa-check text-primary fa-2x mx-4"></i>
                  <p>
                    Existence as discourse is. Pleasure friendly at marriage
                    blessing or should
                  </p>
                </li>
              </ul>
              <a href="article.html" className="btn btn-primary">Get Started</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
