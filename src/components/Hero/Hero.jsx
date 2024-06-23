import React from 'react'
import Image from 'next/image'
import headerBook from '@/images/header-ebook.png'
import backImage from '@/images/header-background.jpg'
import Svg from './Svg'
export default function Hero() {
  return (
    //  <!-- Header -->
    <header 
    className="header">
      {/* <!-- Hero --> */}
      <div className="hero text-white pt-7">
        <div className="container-xl">
          <div className="row">
            <div className="col-md-6">
              <div className="image-container mb-5 px-4">
                <Image src={headerBook} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="text-container p-4 d-flex flex-column justify-content-center h-100 mb-5"
              >
                <h1 className="display-3 fw-bold">Welcome to Blog Mastery</h1>
                <p className="lead">
                  Are you ready to take your blogging journey to new heights?
                  Blog Mastery is your ultimate guide to creating and managing a
                  successful blog that captivates your audience and drives
                  engagement.
                </p>

                {/* <!-- Form --> */}
                <div className="form-container text-center">
                  <form>
                    <div className="my-4">
                      <input
                        type="email"
                        className="form-control form-control-lg rounded-5"
                        placeholder="Email Address"
                      />
                    </div>
                    <div className="d-grid">
                      <button className="btn btn-primary btn-lg text-white">
                        Free Download
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <Svg/>
    </header>
  )
}
