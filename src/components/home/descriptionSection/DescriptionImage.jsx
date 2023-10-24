"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { jacketBoy, fairy, blockEther } from "@/exports/image-exports";

const DescriptionImage = () => {
  const animation = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  const scrollVariant = {
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 1.8,
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
    <motion.div
      className="w-full sm:w-1/2 h-1/2 sm:h-full flex"
      ref={ref}
      variants={scrollVariant}
      animate={animation}
      initial="hidden"
    >
      <Image src={blockEther} alt="jacket-boy" className="w-[100%] h-[100%]" />
    </motion.div>
  );
};

export default DescriptionImage;
