"use client";
import React, { useEffect } from "react";
import { GridOne, GridTwo, GridThree } from "@/exports";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const GridMain = () => {
  const animation = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const scrollVariant = {
    visible: {
      y: 0,
      zIndex: 0,
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.5,
        type: "spring",
      },
    },
    hidden: {
      y: -100,
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
    <motion.section
      className="w-full flex flex-col px-4 lg:px-10 py-4 justify-center items-center bg-scheme-darkGrey gap-10 overflow-y-hidden"
      ref={ref}
    >
      <motion.div
        className="flex flex-col gap-2 items-center justify-center"
        variants={scrollVariant}
        animate={animation}
        initial="hidden"
      >
        <h2 className="text-center font-semibold text-xl sm:text-2xl">
          Curated Collections For Every Taste
        </h2>
        <p className="text-scheme-grey text-center">
          NFT Info will provide valauble information on popular NFTs that exists
          on our query blockchains, whatever kind they are
        </p>
      </motion.div>
      <article className="flex flex-col md:flex-row justify-center items-center gap-5">
        <GridOne />
        <GridTwo />
        <GridThree />
      </article>
    </motion.section>
  );
};

export default GridMain;
