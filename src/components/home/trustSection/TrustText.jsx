import Link from "next/link";
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import React, {useEffect} from 'react'
import { Montserrat, Ubuntu } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
});
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: "700",
});

const TrustText = () => {
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
    <motion.div className={`w-full sm:w-1/2 h-1/2 sm:h-full flex flex-col gap-5 justify-center items-center ${montserrat.className}`} ref={ref} variants={scrollVariant} initial='hidden' animate={animation}>
      <h2 className={`self-center sm:self-start text-2xl sm:text-3xl font-bold text-center sm:text-left ${ubuntu.className}`}>
        The NFT Search App You Can Trust
      </h2>
      <p className="self-center sm:self-start text-center sm:text-left">
        Our app is backed by the robust Next.js framework, ensuring a seamless
        user expererience, and integrates BlockSpan API for reliable and
        up-to-date blockchain data. Rest easy knowing you're exploring the world
        of NFTs with cutting-edge technology.
      </p>
      <Link
          href={"/about"}
          className={`self-center sm:self-start px-3 py-2 rounded-md font-semibold bg-scheme-greenOne hover:bg-gradients-greenThree text-scheme-bgBlack  hover:text-scheme-white transition-colors duration-300`}
        >
          Learn More
        </Link>
    </motion.div>
  );
};

export default TrustText;
