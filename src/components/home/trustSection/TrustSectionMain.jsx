import React from "react";
import { TrustImage, TrustText } from "@/exports";

const TrustSectionMain = () => {
  return (
    <section className="w-full flex flex-col sm:flex-row px-4 lg:px-10 py-4 justify-center items-center overflow-y-hidden">
      <TrustImage />
      <TrustText />
    </section>
  );
};

export default TrustSectionMain;
