import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { maskNFT } from "@/exports/image-exports";
import { Montserrat, Ubuntu } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
});
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: "700",
});

const PreferenceOne = () => {
  const imageAnimationVariants = {
    init: {
      x: "-100",
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
  };

  const numberAnimationVariants = {
    init: {
      scale: 0,
    },
    animate: {
      scale: 1,
    },
  };
  const addOnsVariants = {
    init: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
  };
  const ballVariant = {
    init: {
      opacity: 0,
      y: "100",
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <div
      className={`w-full flex flex-col sm:flex-row md:flex-row lg:flex-row gap-8 ${montserrat.className}`}
    >
      <motion.div
        className="bg-green-500 sm:w-[35%] lg:w-[30%] md:w-[30%] md:h-full sm:h-[100%] lg:h-full h-[50%] items-stretch"
        variants={imageAnimationVariants}
        initial="init"
        transition={{
          ease: "easeInOut",
          duration: 0.9,
          type: "spring",
          delay: 0.5,
        }}
        animate="animate"
      >
        <Image
          alt="image"
          src={maskNFT}
          className="h-[100%] w-full object-cover"
        />
      </motion.div>
      <div className="md:w-[60%] lg:w-[60%] sm:w-[60%] h-full flex flex-col gap-5 flex-one self-end">
        <div className="flex justify-between w-full self-start">
          <motion.div
            className="flex flex-col gap-3"
            variants={addOnsVariants}
            initial="init"
            animate="animate"
            transition={{
              ease: "easeInOut",
              delay: 1.2,
              //   duration: 0.9,
              staggerChildren: 0.4,
              delayChildren: 6,
              type: "spring",
            }}
          >
            <div className="rounded-full w-8 h-8 bg-scheme-white invert-dark"></div>
            <motion.hr className="rounded-md h-1 w-32 bg-gray-400" />
            <motion.p>Search NFTs without unique specifics</motion.p>
          </motion.div>
          <motion.p
            className={`text-8xl font-bold text-scheme-white ${ubuntu.className}`}
            variants={numberAnimationVariants}
            initial="init"
            animate="animate"
            transition={{
              ease: "easeInOut",
              delay: 0.8,
              //   duration: .9,
              type: "spring",
            }}
          >
            1
          </motion.p>
        </div>
        <motion.div
          className=" w-full flex flex-col gap-3 self-end"
          variants={ballVariant}
          initial="init"
          animate="animate"
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 2,
            type: "spring",
          }}
        >
          <h2
            className={`text-4xl font-semibold text-scheme-white ${ubuntu.className}`}
          >
            Get All NFTs On A Blockchain
          </h2>
          <p className="">
            This is for users who are aiming to get data on every NFT that
            exists on the specified blockchain, this will performs a detailed
            wide search and delivers the results in real-time in no time. You
            may find something interesting over here!😀
          </p>
          <Link
            href={"/search/getAll"}
            className="p-2 text-center text-black bg-gradient-to-tr from-gradients-greenOne to-gradients-greenThree w-32 rounded-full hover:bg-gradient-to-tl hover:from-scheme-greenOne  hover:to-gradients-greenThree duration-500 transition-colors font-semibold hover:text-white"
          >
            Go
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default PreferenceOne;
