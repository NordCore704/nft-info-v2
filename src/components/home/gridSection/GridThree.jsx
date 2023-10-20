'use client'
import React from 'react'
import Image from 'next/image'
import { nftPortrait, } from '@/exports/image-exports'

const GridThree = () => {
  return (
    <div className='flex flex-col rounded-md items-center justify-center w-[70%]  md:w-full lg:w-[80%] bg-scheme-darkerGrey'>
    <Image src={nftPortrait} alt='vr-nft' className='rounded-t-md'/>
    <div className="flex flex-col gap-2 p-4">
        <h2 className="font-semibold text-xl sm:text-2xl text-center">A Portrait?</h2>
        <p className="text-center">
            A collector of portraits and artwork? It really doesn't have to be just a photo, if it's a portrait and also an NFT that exists, we willlet you know.
        </p>
    </div>
</div>
  )
}

export default GridThree