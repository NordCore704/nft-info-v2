'use client'
import { DescriptionMain, GridMain, IntroMain, LogosSlider, PreferencesMain, RevolutionSectionMain, TrustSectionMain } from "@/exports"


export default function Home() {
  return (
    <main className="flex flex-col gap-5 py-5 overflow-hidden">
      <IntroMain />
      <LogosSlider />
      <DescriptionMain />
      <PreferencesMain />
      <GridMain />
      <TrustSectionMain />
      <RevolutionSectionMain />
    </main>
  )
}
