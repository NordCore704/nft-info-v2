"use client";
import React from "react";
import Image from "next/image";
import { displayNFT, jacketGirl, jacketBoy } from "@/exports/image-exports";
import { motion } from "framer-motion";
import {
  nftImageAnimationVariants,
  cardAnimationVariants,
} from "@/utils/exports/animationExports";

const IntroHero = () => {
  return (
    <div className="w-full sm:w-1/2 h-1/2 sm:h-full flex relative items-center justify-center">
      <motion.div
        animate="animate"
        variants={cardAnimationVariants}
        transition={{
          ease: "easeInOut",
          delay: .2,
          duration: 0.5,
          type: "spring",
          stiffness: 50,
          damping: 7,
        }}
        initial="init"
        className="absolute opacity-75  w-[50%] h-[75%] bg-gradient-to-br rounded-md from-gradients-greenTwo to-gradients-greenOne -z-10 "
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
        <Image src={displayNFT} alt="hero" className="w-[100%]" />
      </motion.div>
    </div>
  );
};

export default IntroHero;
