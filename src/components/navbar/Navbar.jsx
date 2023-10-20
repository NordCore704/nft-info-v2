'use client'
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { logo, hamburger, closeburger } from "@/exports/image-exports";
import MobileNavbar from "./MobileNavbar";
import gsap, { Power3 } from "gsap";
import { Inter, Poppins, Archivo, Alatsi, Alata } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
});

const archivo = Archivo({
    subsets: ['latin']
})
const alatsi = Alatsi({
    subsets: ['latin'],
    weight: '400',
})

const alata = Alata({
    subsets: ['latin'],
    weight: "400",
})
const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
});

const Navbar = () => {
  const [toggle, setToggle] = useState(true);

  const toggleNav = () => {
    setToggle((prev) => !prev);
  };
  const router = useRouter();
  const currentRoute = router.pathname;

  const navRef = useRef();
  const logoRef = useRef();
  const listRefOne = useRef();
  const listRefTwo = useRef();
  const listRefThree = useRef();
  const listRefFour = useRef();
  let timeline = gsap.timeline();
  useEffect(() => {
    timeline
      .to(logoRef.current, {
        x: 0,
        opacity: 1,
        ease: "ease-in",
        duration: .6,
      })
      .to(listRefOne.current, {
        x: 0,
        opacity: 1,
        ease: "ease-in",
        transition: Power3.easeInOut,
        duration: 0.6,
      })
      .to(listRefTwo.current, {
        x: 0,
        opacity: 1,
        ease: "ease-in",
        transition: Power3.easeInOut,
        duration: 0.6,
      })
      .to(listRefThree.current, {
        x: 0,
        opacity: 1,
        ease: "ease-in",
        transition: Power3.easeInOut,
        duration: 0.6,
      })
      .to(listRefFour.current, {
        x: 0,
        opacity: 1,
        ease: "ease-in",
        transition: Power3.easeInOut,
        duration: 0.8,
      });
  });

  const listAnimationVariant = {
    init: {
      opacity: 0,
      scale: 0,
    },
    animate: {
      opacity: 1,
      scale: 1,
    },

  }


  useEffect(() => {
    !toggle
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");

  }, [toggle]);

  return (
    <header
      className={`header overflow-hidden px-4 lg:px-10 py-2`}
      ref={navRef}
    >
      <nav className="nav flex justify-between items-center h-12 p-4">
        <div
          className="logo--div py-3 flex justify-center items-center h-[64px] opacity-0 -translate-x-8"
          ref={logoRef}
        >
          <Link href={'/'}>
          <Image src={logo} height={40} alt={"logo"} />
          <p className={`text-xl font-extrabold self-end ${alatsi.className}`}></p>
          </Link>
        </div>
        <div className="flex items-center">
          {toggle ? (
            <Image
              src={hamburger}
              alt="hamburger"
              onClick={toggleNav}
              className="hamburger flex cursor-pointer md:hidden lg:hidden sm:hidden transition-opacity duration-300"
            />
          ) : (
            <Image
              src={closeburger}
              onClick={toggleNav}
              className="hamburger flex cursor-pointer z-40 md:hidden lg:hidden sm:hidden transition-opacity duration-300"
              alt="closeburger"
            />
          )}
          <motion.ul variants={listAnimationVariant} animate='animate' initial='init' transition={{ duration: .4, delay: .2, type: 'spring',
        }} className={`gap-4 hidden list-none lg:flex md:flex sm:flex font-semibold ${alata.className} rounded-full bg-scheme-darkGrey py-1.5 px-5`}>
            <li className="-translate-x-8 opacity-0 hover:text-scheme-greenOne transition-colors duration-300" ref={listRefOne}>
              <Link href={"/"} className={currentRoute === "/" ? "active" : ""}>
                Home
              </Link>
            </li>
            <li className="-translate-x-8 opacity-0 hover:text-scheme-greenOne transition-colors duration-300" ref={listRefTwo}>
              <Link
                href={"/about"}
                className={currentRoute === "/about" ? "active" : ""}
              >
                {" "}
                About
              </Link>
            </li>
            <li className="-translate-x-8 opacity-0 hover:text-scheme-greenOne transition-colors duration-300" ref={listRefThree}>
              <Link
                href={"/search"}
                className={currentRoute === "/search" ? "active" : ""}
              >
                Search
              </Link>
            </li>

          </motion.ul>
        </div>
      <motion.div className="hidden sm:flex" variants={listAnimationVariant} animate='animate' initial='init' transition={{duration: .4, type: 'spring'}}>
      <Link
                href={"/contact"}
                className={`border-2 px-3 py-1 rounded-md border-scheme-greenOne hidden sm:flex  hover:text-scheme-greenOne transition-colors duration-300 ${currentRoute === "/contact" ? "active" : ""}`}
              >
                Contact
              </Link>
      </motion.div>
      
        {!toggle ? <MobileNavbar alata={alata} setToggle={setToggle} toggle={toggle}/> : (
          <></>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
