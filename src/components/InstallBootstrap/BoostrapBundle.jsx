"use client"
import React, { useEffect } from 'react'
export default function BoostrapBundle() {
    useEffect(()=>{
        import("bootstrap/dist/js/bootstrap.bundle.js")
    })
  return (<></>)
}
