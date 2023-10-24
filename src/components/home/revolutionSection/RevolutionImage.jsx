import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import Image from "next/image";
import { fairy, fieryAvatar } from "@/exports/image-exports";

const RevolutionImage = () => {
  const animation = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  const scrollVariant = {
    visible: {
      x: 0,
      zIndex: 0,
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 1.8,
        type: "spring",
      },
    },
    hidden: {
      x: 100,
      zIndex: -10,
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
    <motion.div
      className="w-full sm:w-1/2 h-1/2 sm:h-full flex items-center justify-center"
      ref={ref}
      variants={scrollVariant}
      animate={animation}
      initial="hidden"
    >
      <Image src={fieryAvatar} alt="fire" />
    </motion.div>
  );
};

export default RevolutionImage;
