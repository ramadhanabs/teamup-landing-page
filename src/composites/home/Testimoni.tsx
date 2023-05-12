import Button from "@/components/Button";
import { ArrowLeft, ArrowRight } from "@/components/Icons";
import Text from "@/components/Text";
import React, { useMemo, useState } from "react";

const TESTIMONI = [
  {
    id: "sg",
    company: "Skilled",
    source: "Singapore Startup",
    image: "testimoni-1.svg",
    description:
      "TeamUp was able to come up with various creative ideas ecompassing our company’s industry and target market within short period of time. Very accomodating in our design tweaks as well."
  },
  {
    id: "thai",
    company: "Kandang Qurban",
    source: "Indonesia Startup",
    image: "testimoni-2.svg",
    description:
      "I hired them to re-design my startup project last year, they give the best shot and great result with fresh idea. Happy to work with."
  },
  {
    id: "hawai",
    company: "Rentique",
    source: "Chinese Startup",
    image: "testimoni-3.svg",
    description:
      "It was a great pleasure working with TeamUp during our recent UI project. Their designer is smart, responsible and easy to comunicate with. if you are also looking for UI Designer, I would strongly recommend TeamUp Studio."
  }
];

const Testimoni = () => {
  const [indexTestimoni, setIndexTestimoni] = useState(0);
  const selectedTestimoni = useMemo(
    () => TESTIMONI[indexTestimoni],
    [indexTestimoni]
  );
  const lastTestimoni = TESTIMONI.length - 1;

  const handleNext = () => {
    if (indexTestimoni === lastTestimoni) {
      setIndexTestimoni(0);
      return;
    }

    setIndexTestimoni(indexTestimoni + 1);
  };

  const handlePrev = () => {
    if (indexTestimoni === 0) {
      setIndexTestimoni(lastTestimoni);
      return;
    }

    setIndexTestimoni(indexTestimoni - 1);
  };

  return (
    <div className="mb-[80px]">
      <div className="flex justify-between items-center mb-6 sm:mb-12">
        <Text variant="h4-medium">Testimoni</Text>
        <div className="hidden sm:flex items-center gap-4">
          <Button
            variant="circle"
            className="w-[96px] h-[96px]"
            icon={<ArrowLeft className="text-white w-6 h-6" />}
            sizeCircle="small"
            onClick={handlePrev}
          />
          <Button
            variant="circle"
            className="w-[96px] h-[96px]"
            icon={<ArrowRight className="text-white w-6 h-6" />}
            sizeCircle="small"
            onClick={handleNext}
          />
        </div>
      </div>
      <div className="border border-grey-light rounded-3xl p-5 lg:p-[56px]">
        <div className="flex gap-[62px]">
          <div className="hidden lg:block w-[200px] flex-shrink-0">
            <img
              src={`/images/illustrations/${selectedTestimoni.image}`}
              className="w-full"
            />
          </div>
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="rounded-full bg-white py-3 px-4 sm:px-6 sm:py-4">
                <Text
                  variant="s-semibold"
                  className="text-black whitespace-nowrap"
                >
                  {selectedTestimoni.company}
                </Text>
              </div>
              <div className="rounded-full border border-white py-3 px-4 sm:px-6 sm:py-4">
                <Text
                  variant="s-semibold"
                  className="text-white whitespace-nowrap"
                >
                  {selectedTestimoni.source}
                </Text>
              </div>
            </div>
            <Text variant="h4-regular">{selectedTestimoni.description}</Text>
          </div>
        </div>
      </div>

      <div className="flex sm:hidden items-center gap-4 mt-10">
        <Button
          variant="circle"
          className="w-[96px] h-[96px]"
          icon={<ArrowLeft className="text-white w-6 h-6" />}
          sizeCircle="small"
          onClick={handlePrev}
        />
        <Button
          variant="circle"
          className="w-[96px] h-[96px]"
          icon={<ArrowRight className="text-white w-6 h-6" />}
          sizeCircle="small"
          onClick={handleNext}
        />
      </div>
    </div>
  );
};

export default Testimoni;
