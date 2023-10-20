import Link from 'next/link'
import React from 'react'

const RevolutionText = () => {
  return (
    <div className='flex items-center justify-between w-full sm:w-1/2 h-1/2 sm:h-full text-scheme-bgBlack pb-4 sm:pb-0'>
        <div className="flex-1 flex gap-3 flex-col items-center justify-center">
            <h2 className="text-center sm:text-left font-semibold text-xl sm:text-2xl sm:self-start text-scheme-bgBlack">
                Join The NFT Revolution Today
            </h2>
            <p className="text-center sm:text-left  sm:self-start text-scheme-bgBlack">
                Ready to embark on a journey through the world of NFTs? Dive in now and start exploring the vast universe of digital collectibles with our Next.js powered app and BlockSpan API integration.
            </p>
            <Link
          href={"/search"}
          className={`self-center sm:self-start px-3 py-2 rounded-md font-semibold bg-gradients-greenTwo hover:bg-gradients-greenThree text-scheme-bgBlack  hover:text-scheme-white transition-colors duration-300 border-scheme-bgBlack border-2`}
        >
          Start Exploring
        </Link>
        </div>
    </div>
  )
}

export default RevolutionText