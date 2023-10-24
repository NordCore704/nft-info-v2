import { useAnimation, motion } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Montserrat, Ubuntu } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
});
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: "700",
});

const PreferencesText = () => {
  const animation = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  const scrollVariant = {
    visible: {
      y: 0,
      zIndex: 0,
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 1.8,
        type: "spring",
      },
    },
    hidden: {
      y: 100,
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
      className={`w-full sm:w-1/2 h-1/2 sm:h-full flex flex-col gap-5 justify-center items-center ${montserrat.className}`}
      ref={ref}
      variants={scrollVariant}
      animate={animation}
      initial="hidden"
    >
      <h2 className={`self-center sm:self-start text-2xl sm:text-3xl font-bold text-center sm:text-left ${ubuntu.className}`}>
        Seamless Search, Effortless Discovery
      </h2>
      <p className="self-center sm:self-start text-center sm:text-left">
        Our app leverages the power of Blockspan API to provide you with
        lightning-fast NFT search capabilities. Simply enter your criteria and
        watch as our app sifts through the blockchain to present you with a
        curated selection of unique digital assets.
      </p>
    </motion.div>
  );
};

export default PreferencesText;
