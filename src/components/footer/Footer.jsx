'use client'
import React from "react";
import { Links, Socials, Description, Email } from "@/exports";
import {
  Inter,
  Bebas_Neue,
  Alata,
  Archivo_Black,
  Archivo,
  Raleway,
  Ubuntu,
  Montserrat,
} from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"], weight: "300" });
const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["700"] });
const raleway = Raleway({ subsets: ["latin"], weight: "700" });

const Footer = () => {
  return (
    <footer className="h-[80%] bg-scheme-darkerGrey invert-dark py-10 px-4 lg:px-10 gap-10 flex flex-col items-center justify-center" >
      <Socials />

      <div className="flex flex-col md:flex-row gap-16  items-center justify-center">
      <Description />
      <Links />
      <Email />
      </div>
      
    </footer>
  );
};

export default Footer;
