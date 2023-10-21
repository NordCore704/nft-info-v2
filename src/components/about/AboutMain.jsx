import React from 'react'
import { AboutIntro, AboutStoryMain, AboutKeyWordsMain, AboutTechnologiesMain } from '@/exports'

const AboutMain = () => (
    <section className='flex flex-col w-full'>
        <AboutIntro />
        <AboutStoryMain />
        <AboutKeyWordsMain />
        <AboutTechnologiesMain />
    </section>
)

export default AboutMain