'use client'
import React from 'react'
import Link from 'next/link'

const DescriptionText = () => {
  return (
    <div className="w-full sm:w-1/2 h-1/2 sm:h-full flex flex-col gap-5 justify-center items-center">
        <h2 className="self-center sm:self-start text-2xl sm:text-3xl font-bold text-center sm:text-left">What can we do for you?</h2>
        <p className="self-center sm:self-start text-center sm:text-left">
            From our quality up-to-date search data, you can now pull in data from famous NFT blockchains in real-time, get information on rare market commodities and the likes just because you requested for it! 
        </p>
        <Link
          href={"/search"}
          className={`self-center sm:self-start px-3 py-2 rounded-md font-semibold bg-scheme-greenOne hover:bg-gradients-greenThree text-scheme-bgBlack  hover:text-scheme-white transition-colors duration-300`}
        >
          See How
        </Link>
    </div>
  )
}

export default DescriptionText