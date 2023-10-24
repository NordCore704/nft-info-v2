'use client'
import { retroNftFull } from '@/exports/image-exports'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import React, {useEffect} from 'react'

const GridTwo = () => {
  const animation = useAnimation()
  const [ ref, inView ] = useInView({
    threshold: 0.6,
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
    <motion.div className='flex flex-col rounded-md items-center justify-center w-[70%] md:w-full bg-scheme-darkerGrey'ref={ref} variants={scrollVariant} initial='hidden' animate={animation}>
    <Image src={retroNftFull} alt='vr-nft' className='rounded-t-md'/>
    <div className="flex flex-col gap-2 p-4">
        <h2 className="font-semibold text-xl sm:text-2xl text-center">Retro NFTs!</h2>
        <p className="text-center">
           Are you a fan of retro NFTs or something like that? well you could get the one you so desire, with a customised search through our vast database of NFTs.
        </p>
    </div>
</motion.div>
  )
}

export default GridTwo