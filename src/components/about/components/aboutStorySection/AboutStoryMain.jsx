import React from 'react'
import { AboutStoryText, AboutStoryImage } from '@/exports'

const AboutStoryMain = () => {
  return (
    <figure className='flex flex-col sm:flex-row gap-5 justify-center items-center px-5 lg:px-10 py-5 bg-scheme-darkerGrey overflow-y-hidden'>
        <AboutStoryImage />
        <AboutStoryText />
    </figure>
  )
}

export default AboutStoryMain