import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { nftWhite } from "@/exports/image-exports";
import Image from "next/image";

const AboutTechnologiesImage = () => {
  const animation = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const scrollVariant = {
    visible: {
      scale: 1,
      zIndex: 0,
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 1,
        type: "spring",
        delay: 0.8,
      },
    },
    hidden: {
      scale: 0,
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
      className="w-full sm:w-1/2 h-1/2 sm:h-full flex gap-5 justify-center items-center relative"
      ref={ref}
      variants={scrollVariant}
      animate={animation}
      initial="hidden"
    >
      <Image src={nftWhite} alt="avatar" className="rounded-md" />
    </motion.div>
  );
};

export default AboutTechnologiesImage;
