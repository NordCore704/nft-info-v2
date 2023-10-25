import React from "react";
import Image from "next/image";
import { avatar } from "@/exports/image-exports";
import { motion } from "framer-motion";
import { Ubuntu, Montserrat } from "next/font/google";

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: '700'
})

const ContactAvatar = () => {
  const parentAnimationVariants = {
    init: {
      scale: 0,
    },
    animate: {
      scale: 1,
    },
  };

  const textVariant = {
    init: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
  }
  return (
    <motion.div
      className={`flex flex-col items-center justify-center`}
      variants={parentAnimationVariants}
      initial="init"
      animate="animate"
      transition={{
        ease: "easeInOut",
        delay: 1.8,
        // duration: 0.5,
        staggerChildren: 0.4,
        delayChildren: 2.5,
        type: "spring",
      }}
    >
      <Image
        alt="contact-avatar"
        className="w-32 bg-gradient-to-tr from-gradients-greenOne to-gradients-greenThree rounded-full hover:bg-gradient-to-tl hover:from-scheme-greenOne hover:to-gradients-greenOne transition-colors duration-500"
        src={avatar}
      />
      <motion.p className={`text-2xl font-semibold text-scheme-white ${ubuntu.className}`} variants={textVariant}    transition={{
          ease: "easeInOut",
          duration: .9,
          type: 'spring',
        }}>Simon Peter</motion.p>
    </motion.div>
  );
};

export default ContactAvatar;
