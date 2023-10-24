"use client";
import React, { useRef, useEffect } from "react";
import { BsStars } from "react-icons/bs";
import { gsap, Power3 } from "gsap";
import { Montserrat, Ubuntu } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
});
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: "700",
});

const NftStats = ({}) => {
  // Each ref on this section represents an element to be animated with GSAP
  //
  const bodyRef = useRef();
  const starRef = useRef();
  const textRefOne = useRef();
  const textRefTwo = useRef();
  const textRefThree = useRef();
  const timeline = gsap.timeline();

  useEffect(() => {
    timeline
      .to(bodyRef.current, {
        delay: 1.5,
        opacity: 1,
        duration: 1,
        transition: Power3.easeInOut,
        ease: "ease-in",
      })
      .to(starRef.current, {
        opacity: 1,
        duration: 1,
        x: 0,
        transition: Power3.easeInOut,
        ease: "ease-in",
      })
      .to(textRefOne.current, {
        opacity: 1,
        duration: 1,
        y: 0,
        transition: Power3.easeInOut,
        ease: "ease-in",
      })
      .to(textRefTwo.current, {
        opacity: 1,
        duration: 1,
        y: 0,
        transition: Power3.easeInOut,
        ease: "ease-in",
      })
      .to(textRefThree.current, {
        opacity: 1,
        duration: 1,
        y: 0,
        transition: Power3.easeInOut,
        ease: "ease-in",
      });
  });

  return (
    <div
      className={`flex items-center justify-center self-center sm:self-start md:self-start gap-3 opacity-0 ${montserrat.className} text-scheme-white`}
      ref={bodyRef}
    >
      <p className="opacity-0 translate-x-6" ref={starRef}>
        <BsStars className="text-3xl mb-3 text-scheme-greenOne" />
      </p>

      <div
        className="opacity-0 -translate-y-6 text-center text-scheme-white"
        ref={textRefOne}
      >
        <p
          className={`font-bold text-4xl text-scheme-white ${ubuntu.className}`}
        >
          120+
        </p>
        <p className={`text-scheme-white`}>NFT Arts</p>
      </div>
      <div className="opacity-0 -translate-y-6 text-center" ref={textRefTwo}>
        <p
          className={`text-4xl text-center font-bold text-scheme-white ${ubuntu.className}`}
        >
          45+
        </p>
        <p className={`text-center text-scheme-white`}>Active Blockchains</p>
      </div>
      <div className="opacity-0 -translate-y-6 text-center" ref={textRefThree}>
        <p
          className={`text-4xl font-bold text-scheme-white ${ubuntu.className}`}
        >
          160+
        </p>
        <p className="text-scheme-white">NFT Artists</p>
      </div>
    </div>
  );
};

export default NftStats;
