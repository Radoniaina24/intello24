"use client"
import Image from 'next/image';
import React from 'react'
import toTop from "@/images/up-arrow.png"
export default function ScrollTopBtn() {
    function Click(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
    }
  return (
     <button
        id="to-top"
        className="to-top-btn"
        onClick={Click}
    >
        <Image src={toTop} alt=""/>
    </button>
  )
}
