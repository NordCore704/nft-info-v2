import { jacketBoy, jacketGirl } from "@/exports/image-exports";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";

const TrustImage = () => {
  const animation = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  const imageVariant = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 1,
        type: "spring",
        delay: 1,
      },
    },
    hidden: {
      y: -100,
      opacity: 0,
    },
  };
  const pastelGreyVariant = {
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        ease: "easeInOut",
        type: "spring",
      },
    },
    hidden: {
      scale: 0,

      opacity: 0,
    },
  };

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    } else {
      animation.start("hidden");
    }
  }, [inView]);
  return (
    <div
      className="w-full sm:w-1/2 h-1/2 sm:h-full flex relative justify-center items-center"
      ref={ref}
    >
      <motion.div
        className="absolute rounded-md bg-scheme-darkGrey w-[60%] h-[60%] -z-10 top-1/3 opacity-75 self-center"
        variants={pastelGreyVariant}
        initial="hidden"
        animate={animation}
      ></motion.div>
      <motion.div
        className=""
        variants={imageVariant}
        animate={animation}
        initial="hidden"
      >
        <Image
          src={jacketGirl}
          alt="jacket-boy"
          className="w-[100%] h-[100%]"
        />
      </motion.div>
    </div>
  );
};

export default TrustImage;
