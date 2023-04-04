import Button from "@/components/Button";
import { ArrowLeft, ArrowRight } from "@/components/Icons";
import Text from "@/components/Text";
import React, { useMemo, useState } from "react";

const TESTIMONI = [
  {
    id: "sg",
    rating: "5.0",
    source: "Founder Startup SG",
    image: "testimoni-1.svg",
    description:
      "TeamUp exceeded our expectations, delivering high-quality products on time and on budget. Highly recommend them for all your manufacturing needs."
  },
  {
    id: "thai",
    rating: "5.0",
    source: "Founder Startup Thailand",
    image: "testimoni-2.svg",
    description:
      "Their expert team has helped me increase my online presence and grow my customer base. I highly recommend Teamup Agency to any business looking to take it's digital marketing."
  },
  {
    id: "hawai",
    rating: "5.0",
    source: "Founder Startup Hawai",
    image: "testimoni-3.svg",
    description:
      "I have been working with Teamup Agency for the past year and I couldn't be happier with the results. From the very beginning, they took the time to understand my business needs."
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
      <div className="flex justify-between items-center mb-12">
        <Text variant="h4-medium">Testimoni</Text>
        <div className="hidden md:flex items-center gap-4">
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
      <div className="border border-grey-light rounded-3xl p-5 md:p-[56px]">
        <div className="flex gap-[62px]">
          <div className="hidden md:block w-[200px] flex-shrink-0">
            <img
              src={`/images/illustrations/${selectedTestimoni.image}`}
              className="w-full"
            />
          </div>
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="rounded-full bg-white px-6 py-4">
                <p className="text-black font-bold">
                  Rating {selectedTestimoni.rating}
                </p>
              </div>
              <div className="rounded-full border border-white px-6 py-4">
                <p className="text-white font-bold">
                  {selectedTestimoni.source}
                </p>
              </div>
            </div>
            <Text variant="h3-regular">{selectedTestimoni.description}</Text>
          </div>
        </div>
      </div>

      <div className="flex md:hidden items-center gap-4 mt-10">
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
