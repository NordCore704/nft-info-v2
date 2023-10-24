import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";

const AboutStoryText = () => {
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
      className="w-full sm:w-1/2 h-1/2 sm:h-full flex flex-col gap-5"
      ref={ref}
      variants={scrollVariant}
      animate={animation}
      initial="hidden"
    >
      <h2 className="text-center sm:text-left self-center sm:self-start font-bold text-2xl sm:text-2xl">
        Our Story
      </h2>
      <p className="self-center sm:self-start text-center sm:text-left">
        Welcome to NFTInfo, where we're redefining how you explore and acquire
        NFTs. Our journey began with a shared passion for digital art and
        collectibles. We envisioned a platform that simplifies the process,
        making it accessible to everyone. Through meticulous curation and the
        power of BlockSpan API, we've created an experience that brings the
        world of NFTs to your fingertips.
      </p>
    </motion.div>
  );
};

export default AboutStoryText;
