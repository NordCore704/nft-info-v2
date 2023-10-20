import React from 'react'
import { motion } from 'framer-motion'
import { PreferenceOne, PreferenceTwo, PreferenceThree, PreferenceFour } from '@/exports'

const Search = () => {
  const popVariant = {
    visible: {
      scale: 1,
      opacity: 1,
    },
    hidden: {
      scale: 0,
     
    }
  }

  return (
    <div className='py-4 px-3 sm:px-2 md:px-4 flex flex-col gap-8  overflow-hidden'>
        <motion.p className='text-4xl font-bold text-center mt-4 text-scheme-white' variants={popVariant}  transition={{
          ease: "easeInOut",
          duration: 0.9,
          type: "spring",
        }} initial='hidden'  animate='visible'>Please Select Your Search Preference Below:</motion.p>
        <PreferenceOne />
        <PreferenceTwo />
        <PreferenceThree />
        <PreferenceFour />
    </div>
  )
}

export default Search