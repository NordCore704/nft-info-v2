import React from 'react'
import { AboutTechnologiesText, AboutTechnologiesImage } from '@/exports'

const AboutTechnologiesMain = () => {
  return (
    <figure className='flex flex-col sm:flex-row gap-5 justify-center items-center px-5 lg:px-10 py-5 overflow-y-hidden'>
        <AboutTechnologiesImage />
        <AboutTechnologiesText />
    </figure>
  )
}

export default AboutTechnologiesMain