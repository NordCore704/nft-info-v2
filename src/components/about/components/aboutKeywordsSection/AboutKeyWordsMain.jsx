'use client'
import React from 'react'
import { AboutKeywordsText, AboutKeywordsImage } from '@/exports'

const AboutKeyWordsMain = () => {
  return (
    <section className='flex flex-col-reverse sm:flex-row gap-5 justify-center items-center px-5 lg:px-10 py-5 overflow-y-hidden'>
        <AboutKeywordsText />
        <AboutKeywordsImage />
    </section >
  )
}

export default AboutKeyWordsMain