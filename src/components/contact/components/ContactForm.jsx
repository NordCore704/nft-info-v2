import React from "react";
import { motion } from "framer-motion";
import { Ubuntu, Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '400'
})
const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: '700'
})

const ContactForm = () => {
  const formAnimationVariants = {
    init: {
      y: "200",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };

  const buttonVariant = {
    init: {
      y: "-200",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  }
  return (
    <div className={`w-full flex items-center justify-center ${montserrat.className}`}>
      <motion.form
        action=""
        className="flex flex-col w-[90%] lg:w-[60%] gap-3"
        initial="init"
        variants={formAnimationVariants}
        animate="animate"
        transition={{
          ease: "easeInOut",
          delay: 0.8,
          duration: 0.9,
          staggerChildren: 0.4,
          delayChildren: 1.5,
          type: "spring",
        }}
      >
        <label htmlFor="name"></label>
        <input
          type="text"
          placeholder="*name"
          name="name"
          className="border-b outline-none border-scheme-white bg-transparent invert-dark-text"
        />
        <label htmlFor="email"></label>
        <input
          type="text"
          placeholder="*email"
          name="email"
          className="border-b outline-none border-scheme-white bg-transparent invert-dark-text"
        />
        <label htmlFor="phone"></label>
        <input
          type="text"
          placeholder="*phone"
          name="phone"
          className="border-b outline-none border-scheme-white bg-transparent invert-dark-text"
        />
        <label htmlFor="message"></label>
        <input
          type="text"
          placeholder="*message"
          name="message"
          className="border-b outline-none border-scheme-white bg-transparent invert-dark-text"
        />
        <motion.button className="w-full bg-scheme-greenOne text-black h-10 rounded-full hover:bg-gradients-greenTwo transition-colors duration-300" variants={buttonVariant} transition={{
          duration: .8,
          ease: 'easeInOut',
          type: 'spring',
        }}>
          Submit
        </motion.button>
      </motion.form>
    </div>
  );
};

export default ContactForm;
