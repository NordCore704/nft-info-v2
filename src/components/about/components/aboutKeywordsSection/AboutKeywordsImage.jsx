import React from 'react'
import Image from 'next/image'
import { halloween } from '@/exports/image-exports'

const AboutKeywordsImage = () => {
  return (
    <div className='w-full sm:w-1/2 h-1/2 sm:h-full flex flex-col gap-5'>
        <Image src={halloween} alt='' className='rounded-md lg:w-[80%]'/>
    </div>
  )
}

export default AboutKeywordsImage