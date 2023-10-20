import React from 'react'
import Image from 'next/image'
import { fairy, fieryAvatar  } from '@/exports/image-exports'

const RevolutionImage = () => {
  return (
    <div className='w-full sm:w-1/2 h-1/2 sm:h-full flex items-center justify-center'>
        <Image src={fieryAvatar} alt='fire' />
    </div>
  )
}

export default RevolutionImage