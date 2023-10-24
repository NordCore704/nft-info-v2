import React from "react";
import { Montserrat, Ubuntu } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
});
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: "700",
});

const Description = () => {
  return (
    <div
      className={`flex flex-col gap-2 self-center md:self-start w-full md:w-[30%] ${montserrat.className}`}
    >
      <p
        className={`text-xl text-scheme-greenOne self-center md:self-start ${ubuntu.className}`}
      >
        Know Us
      </p>
      <p className="text-center md:text-left">
        Explore the world of NFTs with our app, powered by Blockspan API for
        seamless blockchain data, Discover, collect and own unique digital
        assets effortlessly. Join us in revolutionizing the way you experience
        the world of digital collectibles
      </p>
    </div>
  );
};

export default Description;
