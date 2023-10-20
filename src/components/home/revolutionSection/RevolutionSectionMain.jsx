import React from 'react'
import { RevolutionImage, RevolutionText, } from '@/exports'

const RevolutionSectionMain = () => {
  return (
    <section className='w-full relative px-4 lg:px-10 pt-2 flex flex-col sm:flex-row-reverse gap-5 items-center justify-center bg-gradient-to-tr from-gradients-greenTwo to-gradients-greenOne rounded-r-3xl sm:rounded-r-full' >
      <RevolutionImage />
      <RevolutionText />
    </section>
  )
}

export default RevolutionSectionMain