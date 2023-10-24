import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { Montserrat, Ubuntu } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
});
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: "700",
});

const RevolutionText = () => {
  const animation = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5,
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
      className={`flex items-center justify-between w-full sm:w-1/2 h-1/2 sm:h-full text-scheme-bgBlack pb-4 sm:pb-0 ${montserrat.className}`}
      ref={ref}
      variants={scrollVariant}
      animate={animation}
      initial="hidden"
    >
      <div className="flex-1 flex gap-3 flex-col items-center justify-center">
        <h2 className={`text-center sm:text-left font-semibold text-xl sm:text-2xl sm:self-start text-scheme-bgBlack ${ubuntu.className}`}>
          Join The NFT Revolution Today
        </h2>
        <p className="text-center sm:text-left  sm:self-start text-scheme-bgBlack">
          Ready to embark on a journey through the world of NFTs? Dive in now
          and start exploring the vast universe of digital collectibles with our
          Next.js powered app and BlockSpan API integration.
        </p>
        <Link
          href={"/search"}
          className={`self-center sm:self-start px-3 py-2 rounded-md font-semibold bg-gradients-greenTwo hover:bg-gradients-greenThree text-scheme-bgBlack  hover:text-scheme-white transition-colors duration-300 border-scheme-bgBlack border-2`}
        >
          Start Exploring
        </Link>
      </div>
    </motion.div>
  );
};

export default RevolutionText;
