import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";

const AboutKeywordsText = () => {
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
        duration: 1,
        type: "spring",
        delay: 1.2,
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
      className="w-full sm:w-1/2 h-1/2 sm:h-full flex flex-col gap-5"
      ref={ref}
      variants={scrollVariant}
      animate={animation}
      initial="hiddden"
    >
      <p className="text-5xl self-center sm:self-start sm:text-left text-center">
        NFT
      </p>
      <p className="text-5xl self-center sm:self-start sm:text-left text-center">
        DeFi
      </p>
      <p className="text-5xl self-center sm:self-start sm:text-left text-center uppercase">
        Crypto
      </p>
    </motion.div>
  );
};

export default AboutKeywordsText;
