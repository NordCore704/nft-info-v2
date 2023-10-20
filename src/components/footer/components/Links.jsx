import React from "react";
import Link from "next/link";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
});

const Links = () => {
  return (
    <div className={`flex md:gap-6 lg:gap-6 sm:gap-6 flex-col justify-self-center self-center w-full md:w-[30%]  text-white ${montserrat.className}`}>
      <p className="text-xl text-scheme-greenOne self-center ">Useful Links</p>
      <div className="flex gap-3 flex-col self-center ">
        <Link
          href={"/"}
          className="font-medium hover:text-scheme-greenOne duration-300 transition-colors text-center "
        >
          Home
        </Link>
        <Link
          href={"/about"}
          className="font-medium hover:text-scheme-greenOne duration-300 transition-colors text-center "
        >
          About
        </Link>

        <Link
          href={"/search"}
          className="font-medium hover:text-scheme-greenOne duration-300 transition-colors text-center "
        >
          Search
        </Link>
        <Link
          href={"/contact"}
          className="font-medium hover:text-green-500 duration-300 transition-colors text-center "
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Links;
