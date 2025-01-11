"use client"
import React from 'react'
// import AboutCarousal from '@/app/components/shared/aboutUs/AboutCarousal'
import dynamic from 'next/dynamic'

const AboutCarousal = dynamic(()=>import('@/app/components/shared/aboutUs/AboutCarousal'),{ssr:false}) 

const page = () => {
    
  return (
    <>
   <AboutCarousal/>

   
    </>
  )
}

export default page