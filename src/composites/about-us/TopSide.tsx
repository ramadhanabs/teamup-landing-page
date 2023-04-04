import React from "react";
import Text from "@/components/Text";

const TopSide = () => {
  return (
    <div className="grid grid-cols-2 gap-10">
      <div>
        <Text variant="h2-medium" className="mb-10">
          Get to know our
          <br />
          team and culture
        </Text>
        <img src="/images/illustrations/about-us-hero.svg" className="w-full" />
      </div>
      <div>
        <div className="flex items-center gap-4 mb-10">
          <div className="rounded-full bg-white px-6 py-4">
            <p className="text-black font-bold">Born at Surabaya</p>
          </div>
          <div className="rounded-full border border-white px-6 py-4">
            <p className="text-white">Since 2019</p>
          </div>
        </div>
        <Text variant="h5-regular">
          We are a digital design studio in Yogyakarta and was founded on 29
          October 2019 at Surabaya. Our team was built based on shared interests
          in the fields of design and technology.
          <br />
          <br />
          The combination of abilities from education and experience enables us
          to work together to provide maximum results, full of innovation and
          quality.
        </Text>
      </div>
    </div>
  );
};

export default TopSide;
