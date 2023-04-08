import React from "react";

const Hero = () => {
  return (
    <>
      <img
        src="/images/illustrations/hero.svg"
        alt="hero-banner"
        className="hidden sm:block w-full mt-[60px] mb-[90px]"
      />
      <img
        src="/images/illustrations/hero-mobile.svg"
        alt="hero-banner"
        className="block sm:hidden w-full my-8"
      />
    </>
  );
};

export default Hero;
