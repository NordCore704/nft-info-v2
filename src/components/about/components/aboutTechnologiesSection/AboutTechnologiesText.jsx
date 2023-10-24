import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { aboutInfoText } from "@/constants/aboutInfoTexts";
import { FaPlus } from "react-icons/fa";

const AboutTechnologiesText = () => {
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
        delay: 0.8,
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
    <motion.figcaption
      className="w-full h-1/2 flex flex-col gap-5"
      ref={ref}
      variants={scrollVariant}
      animate={animation}
      initial="hidden"
    >
      <h2 className="text-center sm:text-left self-center sm:self-start font-bold text-2xl sm:text-2xl">
        Get More Info!
      </h2>
      <div className="w-[85%] self-center md:self-start">
        {aboutInfoText.map((item, index) => (
          <details
            className="group border-b w-full pb-3  border-y-scheme-white marker:hidden"
            key={index}
          >
            <summary className="flex items-center gap-1 marker:content-none hover:cursor-pointer justify-between hover:text-scheme-greenOne">
              {item.title}
              <FaPlus className="-rotate-90 group-open:rotate-0 transition-transform text-scheme-violet text-xs" />
            </summary>
            <article
              dangerouslySetInnerHTML={{ __html: item.text }}
              className="px-2 w-full text-scheme-grey visited:text-purple-600 content-html"
            />
          </details>
        ))}
      </div>
    </motion.figcaption>
  );
};

export default AboutTechnologiesText;
