import React, { useState } from "react";
import Text from "@/components/Text";
import Button from "@/components/Button";
import { twMerge } from "tailwind-merge";
import { ArrowOutward } from "@/components/Icons";

type CurrencyType = "usd" | "idr" | "sgd";

const SELECTED_BUTTON_STYLE = "bg-[#6C77FF] border-0";

const PRICING_PLAN = [
  {
    id: "pricing-plan-1",
    title: "Project Service",
    subtitle: "Start from USD 50/design",
    description:
      "Suitable for a project who already had fixed brief. Ready to execute based on the requirement.",
    href: "/#"
  },
  {
    id: "pricing-plan-2",
    title: "Dedicated Talent",
    subtitle: "Start from USD 15/hour",
    description:
      "Suitable for a project which need hour token, it can drive in daily, weekly, and monthly. ",
    href: "/#"
  },
  {
    id: "pricing-plan-3",
    title: "Dedicated Team",
    subtitle: "Start from USD 1.200/month",
    description:
      "Suitable for a project which still doesn’t have a fixed brief and needs a team to dig more. ",
    href: "/#"
  }
];

const PricingPlan = () => {
  const [selectedButton, setSelectedButton] = useState<CurrencyType>("usd");
  return (
    <div className="mb-[80px]">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 sm:mb-10">
        <Text variant="h4-medium" className="mb-4 sm:mb-0">
          Pricing Plan
        </Text>
        <div className="flex items-center gap-4 justify-between sm:justify-start">
          <Button
            className={twMerge(
              "rounded-full flex justify-center items-center py-3 px-8 lg:w-[150px] border border-grey-light",
              selectedButton === "usd" && SELECTED_BUTTON_STYLE
            )}
            onClick={() => setSelectedButton("usd")}
          >
            USD
          </Button>
          <Button
            className={twMerge(
              "rounded-full flex justify-center items-center py-3 px-8 lg:w-[150px] border border-grey-light",
              selectedButton === "sgd" && SELECTED_BUTTON_STYLE
            )}
            onClick={() => setSelectedButton("sgd")}
          >
            SGD
          </Button>
          <Button
            className={twMerge(
              "rounded-full flex justify-center items-center py-3 px-8 lg:w-[150px] border border-grey-light",
              selectedButton === "idr" && SELECTED_BUTTON_STYLE
            )}
            onClick={() => setSelectedButton("idr")}
          >
            IDR
          </Button>
        </div>
      </div>

      <div className=" sm:overflow-scroll">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:w-[1000px] lg:w-full">
          {PRICING_PLAN.map(plan => (
            <div
              className="border border-grey-light rounded-2xl px-4 py-6 sm:p-8"
              key={plan.id}
            >
              <img
                src={`/images/illustrations/${plan.id}.svg`}
                className="w-full mb-6"
              />
              <Text variant="h5-semibold">{plan.title}</Text>
              <Text variant="p-medium" className="text-tosca mb-6">
                {plan.subtitle}
              </Text>
              <Text variant="p-regular" className="mb-6 sm:mb-10">
                {plan.description}
              </Text>
              <Button
                className="w-full sm:w-max py-5 px-6 bg-white"
                icon={<ArrowOutward className="w-6 h-6 text-black" />}
                isTextBlack
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
