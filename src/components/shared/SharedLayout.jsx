'use client'
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import React from 'react'

const SharedLayout = ({children}) => {
  return (
   <>
    <Navbar />
    {children}
    <Footer />
   </>
  )
}

export default SharedLayout