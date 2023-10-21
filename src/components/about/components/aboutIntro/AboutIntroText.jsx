import React from 'react'
import { FaMouse, FaArrowDown } from 'react-icons/fa'

const AboutIntroText = () => {
  return (
    <div className='w-full sm:w-1/2 h-1/2 sm:h-full flex flex-col gap-5'>
        <h2 className="text-center sm:text-left self-center sm:self-start text-3xl sm:text-3xl font-bold">About NFTInfo</h2>
        <p className="text-center sm:text-left">Learn more about your number one NFT search app!</p>
        <FaArrowDown className='animate-bounce self-center sm:self-start mt-5'/>
    </div>
  )
}

export default AboutIntroText