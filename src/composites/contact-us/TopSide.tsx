import Button from "@/components/Button";
import { ArrowOutward } from "@/components/Icons";
import Text from "@/components/Text";
import React from "react";

const TopSide = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
      <div>
        <Text variant="h2-medium" className="mb-4">
          Chat us the way
          <br />
          you like, anytime!
        </Text>
        <img
          src="/images/illustrations/contact-us-hero.svg"
          className="w-full"
        />
      </div>

      <div>
        <div className="flex items-center gap-4 mb-10">
          <div className="rounded-full bg-white px-4 py-3 lg:px-6 lg:py-4">
            <p className="text-black font-bold">Our Studio</p>
          </div>
          <div className="rounded-full border border-white px-4 py-3 lg:px-6 lg:py-4">
            <p className="text-white font-bold">Weekdays at 10 to 5</p>
          </div>
        </div>
        <Text variant="h5-regular" className="lg:h-[320px] mb-4 lg:mb-0">
          Perum Berlian Asri, Jl. Merpati Gg. Beo No.B5, Tempelan, Banguntapan,
          Kec. Banguntapan, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55198
        </Text>
        <div className="border-y border-grey-light py-6 flex items-center w-full justify-between">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6">
            <img src="/images/illustrations/call.svg" className="w-[68px]" />
            <div>
              <Text variant="h6-medium">Phone</Text>
              <Text variant="h5-regular">0989787393</Text>
            </div>
          </div>
          <Button
            variant="circle"
            icon={<ArrowOutward className="w-8 h-8 text-white" />}
            sizeCircle="small"
          />
        </div>
        <div className="border-y border-grey-light py-6 flex items-center w-full justify-between">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6">
            <img src="/images/illustrations/email.svg" className="w-[68px]" />
            <div>
              <Text variant="h6-medium">Email</Text>
              <Text variant="h5-regular">hello@teamup.com</Text>
            </div>
          </div>
          <Button
            variant="circle"
            icon={<ArrowOutward className="w-8 h-8 text-white" />}
            sizeCircle="small"
          />
        </div>
      </div>
    </div>
  );
};

export default TopSide;
