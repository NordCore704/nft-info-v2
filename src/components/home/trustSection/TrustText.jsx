import Link from "next/link";
import React from "react";

const TrustText = () => {
  return (
    <div className="w-full sm:w-1/2 h-1/2 sm:h-full flex flex-col gap-5 justify-center items-center">
      <h2 className="self-center sm:self-start text-2xl sm:text-3xl font-bold text-center sm:text-left">
        The NFT Search App You Can Trust
      </h2>
      <p className="self-center sm:self-start text-center sm:text-left">
        Our app is backed by the robust Next.js framework, ensuring a seamless
        user expererience, and integrates BlockSpan API for reliable and
        up-to-date blockchain data. Rest easy knowing you're exploring the world
        of NFTs with cutting-edge technology.
      </p>
      <Link
          href={"/about"}
          className={`self-center sm:self-start px-3 py-2 rounded-md font-semibold bg-scheme-greenOne hover:bg-gradients-greenThree text-scheme-bgBlack  hover:text-scheme-white transition-colors duration-300`}
        >
          Learn More
        </Link>
    </div>
  );
};

export default TrustText;
