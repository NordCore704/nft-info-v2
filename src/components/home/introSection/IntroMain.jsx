'use client'
import React from 'react'
import { IntroHero, IntroText } from '@/exports'

const IntroMain = () => {
  return (
    <section className='w-full flex flex-col-reverse sm:flex-row gap-5 px-4 lg:px-10 py-2 justify-center items-center'>
      <IntroText />
      <IntroHero />
    </section>
  )
}

export default IntroMain