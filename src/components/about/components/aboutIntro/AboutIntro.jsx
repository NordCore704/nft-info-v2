import React from 'react'
import { AboutIntroImage, AboutIntroText, } from '@/exports'

const AboutIntro = () => {
  return (
    <article className='flex flex-col-reverse sm:flex-row gap-5 justify-center items-center px-5 lg:px-10 py-5'>
       <AboutIntroText />
        <AboutIntroImage />
    </article>
  )
}

export default AboutIntro