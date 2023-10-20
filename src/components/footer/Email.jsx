import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Email = () => {
  return (
    <div className="flex flex-col gap-2 w-full md:w-[30%] md:self-start">
      <p className="text-center md:text-left text-xl text-scheme-greenOne">
        Send Us Mail
      </p>
      <div className="flex gap-2 md:self-start justify-center items-center">
        <input
          type="text"
          className="bg-transparent border-b border-scheme-grey outline-none"
        />
        <button className="rounded-full bg-scheme-white text-center text-scheme-darkerGrey p-2 hover:text-scheme-greenOne duration-300 hover:bg-scheme-grey">
            <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Email;
