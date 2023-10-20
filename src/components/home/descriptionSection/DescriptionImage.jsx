'use client'
import React from 'react'
import Image from 'next/image'
import { jacketBoy, fairy, blockEther } from '@/exports/image-exports'

const DescriptionImage = () => {
  return (
    <div className="w-full sm:w-1/2 h-1/2 sm:h-full flex">
        <Image src={blockEther} alt='jacket-boy' className='w-[100%] h-[100%]'/>
    </div>
  )
}

export default DescriptionImage