import React from "react";
import { Montserrat } from "next/font/google";
import { logo } from "@/exports/image-exports";
import Image from "next/image";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
});

const Logo = () => {
  const date = new Date();
  return (
    <div
      className={`flex items-center justify-center flex-col ${montserrat.className}`}
    >
      <div className="flex gap-1 items-center justify-center sm:justify-start text-white">
        <Image src={logo} alt="logo" className="w-12 invert-none" />
        <p className="font-semibold text-scheme-white">NFTInfo</p>
      </div>
      <p className="text-white text-sm">
        ©{date.getFullYear()} NFTInfo, All Rights Reserved.
      </p>
    </div>
  );
};

export default Logo;
