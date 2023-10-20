'use client'
import React from 'react'
import { PreferencesImage, PreferencesText } from '@/exports'

const PreferencesMain = () => {
  return (
    <section className='w-full flex flex-col sm:flex-row-reverse px-4 lg:px-10 py-4 justify-center items-center'>
    <PreferencesImage />
    <PreferencesText />
</section>
  )
}

export default PreferencesMain