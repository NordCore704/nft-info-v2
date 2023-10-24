import React from "react";
import { FaMouse, FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  heroHeaderAnimations,
  heroHeaderTransitions,
  heroTextTransitions,
} from "@/utils/exports/animationExports";
import { Montserrat, Ubuntu } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
});
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: "700",
});

const AboutIntroText = () => {
  return (
    <motion.div
      className={`w-full sm:w-1/2 h-1/2 sm:h-full flex flex-col gap-5 ${montserrat.className}`}
    >
      <motion.h2
        className={`text-center sm:text-left self-center sm:self-start text-3xl sm:text-3xl font-bold ${ubuntu.className}`}
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
        className="text-white self-center sm:self-start mt-5"
      >
        <FaArrowDown className="animate-bounce " />
      </motion.p>
    </motion.div>
  );
};

export default AboutIntroText;
