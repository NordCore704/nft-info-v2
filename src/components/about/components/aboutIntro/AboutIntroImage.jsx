import React from 'react'
import { fairy } from '@/exports/image-exports'
import Image from 'next/image'

const AboutIntroImage = () => {
  return (
    <div className='w-full sm:w-1/2 h-1/2 sm:h-full flex gap-5 justify-center items-center relative'>
        <div className="absolute rounded-md bg-scheme-darkGrey w-[60%] h-[60%] -z-10 top-1/3 opacity-75 self-center"></div>
        <Image src={fairy} alt='fairy' className=''/>
    </div>
  )
}

export default AboutIntroImage