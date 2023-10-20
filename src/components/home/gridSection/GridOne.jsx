'use client'
import React from 'react'
import { niftyArt } from '@/exports/image-exports'
import Image from 'next/image'

const GridOne = () => {
  return (
    <div className='flex flex-col rounded-md items-center justify-center w-[70%] md:w-full  lg:w-[80%] bg-scheme-darkerGrey'>
        <Image src={niftyArt} alt='vr-nft' className='rounded-t-md'/>
        <div className="flex flex-col gap-2 p-4">
            <h2 className="font-semibold text-xl sm:text-2xl text-center">Cartoon Types!</h2>
            <p className="text-center">
                You may probably prefer NFTs with a cartoon-like nature, sure we could do that too. You just have to set your preference in your search.
            </p>
        </div>
    </div>
  )
}

export default GridOne