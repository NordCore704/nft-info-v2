import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import Image from "next/image";
import { halloween } from "@/exports/image-exports";

const AboutKeywordsImage = () => {
  const animation = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.6,
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
        damping: 10,
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
      className="w-full sm:w-1/2 h-1/2 sm:h-full flex flex-col gap-5"
      ref={ref}
      variants={scrollVariant}
      animate={animation}
      initial="hidden"
    >
      <Image src={halloween} alt="" className="rounded-md lg:w-[80%]" />
    </motion.div>
  );
};

export default AboutKeywordsImage;
