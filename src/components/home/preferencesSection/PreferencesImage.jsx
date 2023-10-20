import { jacketBoy } from '@/exports/image-exports'
import Image from 'next/image'
import React from 'react'

const PreferencesImage = () => {
  return (
    <div className="w-full sm:w-1/2 h-1/2 sm:h-full flex relative justify-center items-center">
        <div className="absolute rounded-md bg-scheme-darkGrey w-[60%] h-[60%] -z-10 top-1/3 opacity-75 self-center"></div>
        <Image src={jacketBoy} alt='jacket-boy' className='w-[100%] h-[100%]'/>
    </div>
  )
}

export default PreferencesImage