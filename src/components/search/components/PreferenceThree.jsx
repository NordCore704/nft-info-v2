import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { astroArt, astroBit, astroNFT } from "@/exports/image-exports";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { Montserrat, Ubuntu } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
});
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: "700",
});

const PreferenceThree = () => {
  const [ ref, inView ] = useInView({
    threshold: 0.7,
    triggerOnce: true,
  })
  const animation = useAnimation()

  const scrollPopVariant = {
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.9,
        type: "spring",
      }
    },
    hidden: {
      x: 150,
      opacity: 0,
    }
  }
  const scrollVariant = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 1.8,
        type: "spring",
      }
    },
    hidden: {
      y: -150,
      opacity: 0,
    }
  }

  const scrollVariantTwo = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 1,
        type: "spring",
      }
    },
    hidden: {
      y: 150,
      opacity: 0,
    }
  }

  useEffect(() => {
   
    if(inView){
      animation.start("visible")
    } else {
      animation.start("hidden")
    }

  }, [inView])
  return (
    <div className={`flex gap-3 flex-col sm:flex-row md:flex-row lg:flex-row mb-14 sm:overflow-hidden ${montserrat.className}`} ref={ref}>
      <motion.div className="w-full sm:w-[30%] md:w-[30%] lg:w-[30%] flex items-center justify-center" variants={scrollPopVariant} initial='hidden' animate={animation}>
      <div className="flex sm:flex-col md:flex-col lg:flex-col flex-row gap-2 items-center justify-center">
      <div className="w-24 h-0.5 rotate-90 mb-8 sm:mb-12 md:mb-12 lg:mb-12 bg-gray-400"/>
          <div className="w-5 h-5 bg-white rounded-full invert-dark"></div>
          <p className="line-text text-center sm:text-left">Search By owners</p>
          <div className="w-24 h-0.5 rotate-90 mt-8 sm:mt-12 md:mt-12 lg:mt-12 bg-gray-400"/>
        </div>
        
        <p className={`lg:text-[25rem] text-white text-[11rem] sm:text-[10rem] font-bold ${ubuntu.className}`}>3</p>
       
      </motion.div>
      <motion.div className="h-[20%] sm:h-full md:h-full lg:h-full sm:w-[25%] md:w-[25%] lg:w-[30%] flex sm:flex-col md:flex-col lg:flex-col gap-1 justify-center items-center" variants={scrollVariantTwo} initial='hidden' animate={animation} ref={ref}>
        <Image
          alt="image"
          src={astroArt}
          className="object-cover h-full sm:h-[35%] sm:w-full md:h-full lg:h-full w-[30%]"
        />
        <Image
          alt="image"
          src={astroNFT}
          className="object-cover h-full sm:h-[35%] md:h-[25%] w-[30%] sm:w-full"
        />
        <Image
          alt="image"
          src={astroBit}
          className="object-cover h-full sm:h-[35%] md:h-[25%] w-[30%] sm:w-full"
        />
      </motion.div>
      <motion.div className="sm:w-[45%] md:w-[45%] lg:w-[45%] h-full flex flex-col items-center self-center justify-center gap-4" variants={scrollVariant} initial='hidden' animate={animation}>
        <h2 className={`text-4xl font-semibold text-center capitalize text-scheme-white ${ubuntu.className}`}>
          Get Ownership data
        </h2>
        <p className="text-center">
          Curious about how many people own a certain NFT? Over here, you could
          get ownership data on NFTs based on your provided inputs.
        </p>
        <Link
            href={"/search/getOwnerData"}
            className="p-2 text-black text-center bg-gradient-to-tr from-gradients-greenOne to-gradients-greenThree w-32 rounded-full hover:bg-gradient-to-tl hover:from-scheme-greenOne  hover:to-gradients-greenThree duration-500 transition-colors font-semibold hover:text-white"
          >
            Check It Out
          </Link>
      </motion.div>
    </div>
  );
};

export default PreferenceThree;
