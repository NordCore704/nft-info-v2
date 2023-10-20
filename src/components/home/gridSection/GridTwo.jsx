'use client'
import { retroNftFull } from '@/exports/image-exports'
import Image from 'next/image'
import React from 'react'

const GridTwo = () => {
  return (
    <div className='flex flex-col rounded-md items-center justify-center w-[70%] md:w-full bg-scheme-darkerGrey'>
    <Image src={retroNftFull} alt='vr-nft' className='rounded-t-md'/>
    <div className="flex flex-col gap-2 p-4">
        <h2 className="font-semibold text-xl sm:text-2xl text-center">Retro NFTs!</h2>
        <p className="text-center">
           Are you a fan of retro NFTs or something like that? well you could get the one you so desire, with a customised search through our vast database of NFTs.
        </p>
    </div>
</div>
  )
}

export default GridTwo