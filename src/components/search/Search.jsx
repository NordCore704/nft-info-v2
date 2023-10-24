import React from 'react'
import { motion } from 'framer-motion'
import { PreferenceOne, PreferenceTwo, PreferenceThree, PreferenceFour } from '@/exports'
import { Montserrat, Ubuntu } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
});
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: "700",
});

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
    <div className={`py-4 px-3 min-h-screen sm:px-2 md:px-4 flex flex-col gap-10  overflow-hidden`}>
        <motion.h2 className={`text-4xl font-bold text-center mt-4 text-scheme-white ${ubuntu.className}`} variants={popVariant}  transition={{
          ease: "easeInOut",
          duration: 0.9,
          type: "spring",
        }} initial='hidden'  animate='visible'>Please Select Your Search Preference Below:</motion.h2>
        <PreferenceOne />
        <PreferenceTwo />
        <PreferenceThree />
        <PreferenceFour />
    </div>
  )
}

export default Search