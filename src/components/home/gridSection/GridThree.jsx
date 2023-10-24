"use client";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import Image from "next/image";
import { nftPortrait } from "@/exports/image-exports";
import { Montserrat, Ubuntu } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
});
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: "700",
});

const GridThree = () => {
  const animation = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.8,
    triggerOnce: true,
  });

  const scrollVariant = {
    visible: {
      y: 0,
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
    <motion.div
      className={`flex flex-col rounded-md items-center justify-center w-[70%]  md:w-full lg:w-[80%] bg-scheme-darkerGrey ${montserrat.className}`}
      ref={ref}
      variants={scrollVariant}
      initial="hidden"
      animate={animation}
    >
      <Image src={nftPortrait} alt="vr-nft" className="rounded-t-md" />
      <div className="flex flex-col gap-2 p-4">
        <h2
          className={`font-semibold text-xl sm:text-2xl text-center ${ubuntu.className}`}
        >
          A Portrait?
        </h2>
        <p className="text-center">
          A collector of portraits and artwork? It really doesn't have to be
          just a photo, if it's a portrait and also an NFT that exists, we
          willlet you know.
        </p>
      </div>
    </motion.div>
  );
};

export default GridThree;
