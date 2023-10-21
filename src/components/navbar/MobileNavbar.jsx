'use client'
import React, { useEffect,} from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const MobileNavbar = ({ alata, toggle, setToggle }) => {
  // const [toggle, setToggle] = useState(true);

  const router = useRouter();
  const currentRoute = router.pathname;

  const parentAnimationVariants = {
    init: {
      scale: 0,
    },
    animate: {
      scale: 1,
    },
  };

  const toggleNav = () => {
    setToggle((prev) => !prev);
  };


  return (
    <div
      className={`sm:hidden md:none lg:none list-none absolute top-0 left-0 flex items-center justify-center text-center backdrop-blur-sm w-[100%]  z-30 h-screen flex-col ${alata.className}`}
    >
      <motion.div
        variants={parentAnimationVariants}
        initial="init"
        animate="animate"
        transition={{
          ease: "easeInOut",
          type: "string",
          // delay: 1,
          // duration: 0.5,
          // staggerChildren: 0.4,
          // delayChildren: 2,
        }}
        className="bg-scheme-greenOne text-scheme-darkerGrey w-full h-full flex flex-col gap-5 items-start justify-center text-center p-5"
      >
        <ul className="flex flex-col gap-6 font-semibold text-left w-[90%]">
          <li className="">
            <Link
              href={"/"}
              onClick={toggleNav}
              className={currentRoute === "/" ? "active" : ""}
            >
              Home
            </Link>
          </li>
          <li className="">
            <Link
              href={"/about"}
              onClick={toggleNav}
              className={currentRoute === "/about" ? "active" : ""}
            >
              About
            </Link>
          </li>
          <li className="">
            <Link
              href={"/search"}
              onClick={toggleNav}
              className={currentRoute === "/search" ? "active" : ""}
            >
              Search
            </Link>
          </li>
        </ul>
        <Link
                href={"/contact"}
                onClick={toggleNav}
                className={`border-2 px-3 py-1 rounded-md border-gradients-greenOne  hover:text-gradients-greenOne font-semibold transition-colors duration-300 ${currentRoute === "/contact" ? "active" : ""}`}
              >Contact</Link>
      </motion.div>
    </div>
  );
};

export default MobileNavbar;
