import Button from "@/components/Button";
import { ArrowOutward } from "@/components/Icons";
import Text from "@/components/Text";
import React from "react";

const Collaboration = () => {
  return (
    <div className="mt-[120px]">
      <Text variant="h4-semibold" className="mb-12">
        We also open for other collaboration
      </Text>

      <div className="border-b border-grey-light py-12 flex flex-col md:flex-row md:justify-between gap-10">
        <img
          src="/images/illustrations/partnership.svg"
          className="w-[152px]"
        />
        <div>
          <Text variant="h1-regular" className="mb-6">
            Become Partner
          </Text>
          <Text variant="h6-regular">
            Become a partner to enable us complement each other's services and
            business fields that we are currently in, by collaborating we can go
            further together to achieve our respective business goals.
          </Text>
        </div>
        <div className="shrink-0 flex justify-end md:justify-start">
          <Button
            variant="circle"
            icon={<ArrowOutward className="w-6 h-6 text-white" />}
          />
        </div>
      </div>
      <div className="border-b border-grey-light py-12 flex flex-col md:flex-row md:justify-between gap-10">
        <img src="/images/illustrations/freelancer.svg" className="w-[152px]" />
        <div>
          <Text variant="h1-regular" className="mb-6">
            Become Freelancer
          </Text>
          <Text variant="h6-regular">
            Become a professional freelancer to work on projects that match your
            level of experience and working preferences, we believe that by
            increasing our project collaborations we will be able to create a
            better ecosystem.
          </Text>
        </div>
        <div className="shrink-0 flex justify-end md:justify-start">
          <Button
            variant="circle"
            icon={<ArrowOutward className="w-6 h-6 text-white" />}
          />
        </div>
      </div>
    </div>
  );
};

export default Collaboration;
