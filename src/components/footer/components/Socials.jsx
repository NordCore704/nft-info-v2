import React from "react";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaEnvelope } from 'react-icons/fa'
import { Logo } from "@/exports";

const Socials = () => {
  return (
    <div className="flex flex-col gap-3 lg:gap-4 justify-center items-center self-center  text-white">
      <Logo />
      <div className="flex gap-5 items-center justify-center">
        <a href="" className="hover:text-scheme-greenOne duration-300">
        <BsInstagram />
        </a>
        <a href="" className="hover:text-scheme-greenOne duration-300">
        <BsLinkedin />
        </a>
        <a href="" className="hover:text-scheme-greenOne duration-300">
        <FaEnvelope />
        </a>
        <a href="" className="hover:text-scheme-greenOne duration-300">
        <BsTwitter />
        </a>
      </div>
    </div>
  );
};

export default Socials;
