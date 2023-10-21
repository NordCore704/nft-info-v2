import React from "react";
import { nftWhite } from "@/exports/image-exports";
import Image from "next/image";

const AboutTechnologiesImage = () => {
  return (
    <div className='w-full sm:w-1/2 h-1/2 sm:h-full flex gap-5 justify-center items-center relative'>
    <Image src={nftWhite} alt='avatar' className='rounded-md'/>
</div>
  );
};

export default AboutTechnologiesImage;
