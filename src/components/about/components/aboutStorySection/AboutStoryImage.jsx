import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import Image from "next/image";
import { avatarYellow, sculpture } from "@/exports/image-exports";

const AboutStoryImage = () => {
  const animation = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  const imageOneVariant = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 1,
        type: "spring",
      },
    },
    hidden: {
      y: -100,
      opacity: 0,
    },
  };
  const imageTwoVariant = {
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        ease: "easeInOut",
        type: "spring",
        delay: 1,
      },
    },
    hidden: {
      scale: 0,

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
    <div
      className="w-full sm:w-1/2 h-1/2 sm:h-full flex flex-col gap-5"
      ref={ref}
    >
      <motion.div
        className="w-1/2 self-center"
        variants={imageOneVariant}
        animate={animation}
        initial="hidden"
      >
        <Image
          src={avatarYellow}
          alt="avatar"
          className="w-full rounded-md self-center"
        />
      </motion.div>
      <motion.div
        className="self-end w-1/2"
        variants={imageTwoVariant}
        initial="hidden"
        animate={animation}
      >
        <Image src={sculpture} alt="avatar" className="w-full rounded-md" />
      </motion.div>
    </div>
  );
};

export default AboutStoryImage;
