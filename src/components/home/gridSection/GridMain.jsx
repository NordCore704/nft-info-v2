"use client";
import React from "react";
import { GridOne, GridTwo, GridThree } from "@/exports";

const GridMain = () => {
  return (
    <section className="w-full flex flex-col px-4 lg:px-10 py-4 justify-center items-center bg-scheme-darkGrey gap-10">
        <div className="flex flex-col gap-2 items-center justify-center">
            <h2 className="text-center font-semibold text-xl sm:text-2xl">
                Curated Collections For Every Taste
            </h2>
            <p className="text-scheme-grey text-center">NFT Info will provide valauble on popular NFTs that exists on our query blockchains, whatever kind they are</p>
        </div>
      <article className="flex flex-col md:flex-row justify-center items-center gap-5">
        <GridOne />
        <GridTwo />
        <GridThree />
      </article>
    </section>
  );
};

export default GridMain;
