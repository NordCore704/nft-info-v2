"use client";
import Link from "next/link";
import React from "react";
import { NftStats } from "@/exports";
import {
  heroHeaderAnimations,
  heroTextTransitions,
  heroHeaderTransitions,
  heroButtonTransitions,
} from "@/utils/exports/animationExports";
import { motion } from "framer-motion";
import { Montserrat, Ubuntu } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
});
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: "700",
});

const IntroText = () => {
  return (
    <div className={`w-full sm:w-1/2 h-1/2 sm:h-full flex flex-col gap-5 lg:gap-8 justify-center items-center ${montserrat.className}`}>
      <motion.h1
        variants={heroHeaderAnimations}
        animate="animate"
        transition={heroHeaderTransitions}
        initial="init"
        className={`font-bold text-4xl md:text-5xl sm:text-left text-center self-center sm:self-start ${ubuntu.className}`}
      >
        Get Data On NFTs
      </motion.h1>
      <motion.p
        variants={heroHeaderAnimations}
        transition={heroTextTransitions}
        animate="animate"
        initial="init"
        className="sm:self-start self-center text-center sm:text-left"
      >
        Get valid information about NFTs from the world's top artists, get
        real-time data from the digital marketplace for crypto collections and
        non-fungible tokens(NFTs), discover exclusive digital assets.
      </motion.p>
      <motion.div animate='animate' initial='init' variants={heroHeaderAnimations} transition={heroButtonTransitions} className="self-center sm:self-start">
        <Link
          href={"/search"}
          className={`self-center sm:self-start px-3 py-2 rounded-md font-semibold bg-scheme-greenOne hover:bg-gradients-greenThree text-scheme-bgBlack  hover:text-scheme-white transition-colors duration-300`}
        >
          Get Started
        </Link>
      </motion.div>

      <NftStats />
    </div>
  );
};

export default IntroText;
