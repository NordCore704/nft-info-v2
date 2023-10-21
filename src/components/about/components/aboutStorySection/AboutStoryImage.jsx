import React from 'react'
import Image from 'next/image'
import { avatarYellow, sculpture } from '@/exports/image-exports'

const AboutStoryImage = () => {
  return (
    <div className='w-full sm:w-1/2 h-1/2 sm:h-full flex flex-col gap-5'>
        <Image src={avatarYellow} alt='avatar' className='w-1/2 rounded-md self-center'/>
        <Image src={sculpture} alt='avatar' className='w-1/2 rounded-md self-end'/>
    </div>
  )
}

export default AboutStoryImage