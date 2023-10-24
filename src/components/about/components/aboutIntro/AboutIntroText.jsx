import React from "react";
import { FaMouse, FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  heroHeaderAnimations,
  heroHeaderTransitions,
  heroTextTransitions,
} from "@/utils/exports/animationExports";

const AboutIntroText = () => {
  return (
    <motion.div className="w-full sm:w-1/2 h-1/2 sm:h-full flex flex-col gap-5">
      <motion.h2
        className="text-center sm:text-left self-center sm:self-start text-3xl sm:text-3xl font-bold"
        variants={heroHeaderAnimations}
        animate="animate"
        transition={heroHeaderTransitions}
        initial="init"
      >
        About NFTInfo
      </motion.h2>
      <motion.p
        className="text-center sm:text-left"
        variants={heroHeaderAnimations}
        transition={heroTextTransitions}
        animate="animate"
        initial="init"
      >
        Learn more about your number one NFT search app!
      </motion.p>
      <motion.p
        variants={heroHeaderAnimations}
        transition={heroTextTransitions}
        animate="animate"
        initial="init"
        className="text-white"
      >
        <FaArrowDown className="animate-bounce self-center sm:self-start mt-5" />
      </motion.p>
    </motion.div>
  );
};

export default AboutIntroText;
