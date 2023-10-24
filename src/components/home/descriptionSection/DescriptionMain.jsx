'use client'
import React from 'react'
import { DescriptionText, DescriptionImage } from '@/exports'

const DescriptionMain = () => {
  return (
    <section className='w-full flex flex-col sm:flex-row px-4 lg:px-10 py-4 justify-center items-center bg-scheme-darkGrey overflow-y-hidden'>
        <DescriptionImage />
        <DescriptionText />
    </section>
  )
}

export default DescriptionMain