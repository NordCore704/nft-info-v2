import React from "react";
import { motion } from "framer-motion";
import { Ubuntu, Montserrat } from "next/font/google";
import Success from "./Success";
import { useContactForm } from "@/utils/exports/formExports";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
});
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: "700",
});

const ContactForm = () => {
  const { name, email, message, showSuccess, setShowSuccess, handleSubmit } =
    useContactForm();

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
  };
  return (
    <div
      className={`w-full flex items-center justify-center ${montserrat.className}`}
    >
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
        onSubmit={handleSubmit}
      >
        <label htmlFor="name"></label>
        <input
          type="text"
          placeholder="*name"
          value={name.value}
          onChange={name.handleInputChange}
          name="name"
          className="border-b outline-none border-scheme-white bg-transparent invert-dark-text"
        />
        <label htmlFor="email"></label>
        <input
          type="email"
          value={email.value}
          onChange={email.handleInputChange}
          placeholder="*email"
          name="email"
          className="border-b outline-none border-scheme-white bg-transparent invert-dark-text"
        />
        <textarea
          name="message"
          id="message"
          placeholder="*message"
          value={message.value}
          onChange={message.handleInputChange}
          cols="30"
          rows="10"
          className="bg-transparent border-b w-full placeholder:text-scheme-gray text-scheme-white outline-none border-scheme-white"
        ></textarea>
        <motion.button
          className="w-full bg-gradient-to-tr from-gradients-greenOne to-gradients-greenTwo text-scheme-bgBlack h-10 rounded-full hover:from-gradients-greenThree hover:to-scheme-greenOne hover:text-white transition-colors duration-300"
          type="submit"
          variants={buttonVariant}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            type: "spring",
          }}
        >
          Submit
        </motion.button>
      </motion.form>
      {showSuccess && <Success setShowSuccess={setShowSuccess} /> }
    </div>
  );
};

export default ContactForm;
