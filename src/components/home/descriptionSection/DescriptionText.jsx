'use client'
import React, { useEffect } from 'react'
import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Montserrat, Ubuntu } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
});
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: "700",
});

const DescriptionText = () => {
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
        duration: 1.8,
        type: "spring",
      }
    },
    hidden: {
      y: 100,
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
    <motion.div className={`w-full sm:w-1/2 h-1/2 sm:h-full flex flex-col gap-3 justify-center items-center ${montserrat.className}`} ref={ref} variants={scrollVariant} animate={animation} initial='hidden'>
        <h2 className={`self-center sm:self-start text-2xl sm:text-3xl font-bold text-center sm:text-left ${ubuntu.className}`}>What can we do for you?</h2>
        <p className="self-center sm:self-start text-center sm:text-left">
            From our quality up-to-date search data, you can now pull in data from famous NFT blockchains in real-time, get information on rare market commodities and the likes just because you requested for it! 
        </p>
        <Link
          href={"/search"}
          className={`self-center sm:self-start px-3 py-2 rounded-md font-semibold bg-scheme-greenOne hover:bg-gradients-greenThree text-scheme-bgBlack  hover:text-scheme-white transition-colors duration-300`}
        >
          See How
        </Link>
    </motion.div>
  )
}

export default DescriptionText