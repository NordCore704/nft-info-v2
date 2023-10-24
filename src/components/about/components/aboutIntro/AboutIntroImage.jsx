import React from "react";
import { fairy } from "@/exports/image-exports";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  cardAnimationVariants,
  nftImageAnimationVariants,
} from "@/utils/exports/animationExports";

const AboutIntroImage = () => {
  return (
    <div className="w-full sm:w-1/2 h-1/2 sm:h-full flex gap-5 justify-center items-center relative">
      <motion.div
        className="absolute rounded-md bg-scheme-darkGrey w-[60%] h-[60%] -z-10 top-1/3 opacity-75 self-center"
        animate="animate"
        variants={cardAnimationVariants}
        transition={{
          ease: "easeInOut",
          delay: 0.2,
          duration: 0.5,
          type: "spring",
          stiffness: 50,
          damping: 7,
        }}
        initial="init"
      ></motion.div>
      <motion.div
        className=""
        variants={nftImageAnimationVariants}
        initial="init"
        animate="animate"
        transition={{
          ease: "easeInOut",
          duration: 0.8,
          delay: 0.7,
          type: "spring",
          stiffness: 40,
          damping: 10,
        }}
      >
        <Image src={fairy} alt="fairy" className="" />
      </motion.div>
    </div>
  );
};

export default AboutIntroImage;
