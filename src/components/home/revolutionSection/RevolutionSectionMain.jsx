import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { RevolutionImage, RevolutionText } from "@/exports";

const RevolutionSectionMain = () => {
  const animation = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.4,
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
      className="w-full relative px-4 lg:px-10 pt-2 flex flex-col sm:flex-row-reverse gap-5 items-center justify-center bg-gradient-to-tr from-gradients-greenTwo to-gradients-greenOne rounded-tr-3xl rounded-bl-3xl sm:rounded-r-full overflow-hidden"
      ref={ref}
      variants={scrollVariant}
      animate={animation}
      initial="hidden"
    >
      <RevolutionImage />
      <RevolutionText />
    </motion.section>
  );
};

export default RevolutionSectionMain;
