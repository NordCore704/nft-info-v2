import Image from "next/image";
import React from "react";
import { eth, goerli, bsc, optimism, arbitrum } from "@/exports/image-exports";

const LogosSlider = () => {
  return (
    <div className="w-full px-4 py-5 h-14 items-center flex gap-5 lg:gap-2 animate-slide">
      <div className="flex flex-col items-center w-[30%] ">
        <Image src={eth} alt="eth" className="w-6" />
        <p className="font-semibold hidden sm:flex">Ether</p>
      </div>
      <div className="flex flex-col items-center w-[30%] ">
        <Image src={goerli} alt="eth" className="w-6" />
        <p className="font-semibold hidden sm:flex">Eth-Goerli</p>
      </div>
      <div className="flex flex-col items-center w-[30%] ">
        <Image src={bsc} alt="eth" className="w-6" />
        <p className="font-semibold hidden sm:flex">Bsc</p>
      </div>
      <div className="flex flex-col items-center w-[30%] ">
        <Image src={optimism} alt="eth" className="w-6" />
        <p className="font-semibold hidden sm:flex">Optimism</p>
      </div>
      <div className="flex flex-col items-center w-[30%] ">
        <Image src={arbitrum} alt="eth" className="w-14" />
        <p className="font-semibold hidden sm:flex">Arbitrum</p>
      </div>
    </div>
  );
};

export default LogosSlider;
