'use client'
import React, { useEffect } from 'react'
import { niftyArt } from '@/exports/image-exports'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'

const GridOne = () => {
  const animation = useAnimation()
  const [ ref, inView ] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  })

  const scrollVariant = {
    visible: {
      y: 0,
      zIndex: 0,
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 1,
        type: "spring",
        delay: 0.8,
      }
    },
    hidden: {
      y: -100,
      zIndex: -10,
      opacity: 0,
    }
  }

  useEffect(() => {
    if (inView) {
      animation.start('visible')
    } else {
      animation.start('hidden')
    }
  }, [inView])
  return (
    <motion.div className='flex flex-col rounded-md items-center justify-center w-[70%] md:w-full  lg:w-[80%] bg-scheme-darkerGrey' ref={ref} animate={animation} initial='hidden' variants={scrollVariant}>
        <Image src={niftyArt} alt='vr-nft' className='rounded-t-md'/>
        <div className="flex flex-col gap-2 p-4">
            <h2 className="font-semibold text-xl sm:text-2xl text-center">Cartoon Types!</h2>
            <p className="text-center">
                You may probably prefer NFTs with a cartoon-like nature, sure we could do that too. You just have to set your preference in your search.
            </p>
        </div>
    </motion.div>
  )
}

export default GridOne