import Button from "@/components/Button";
import { ArrowOutward } from "@/components/Icons";
import Text from "@/components/Text";
import Link from "next/link";
import React from "react";

const MoreAboutUs = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
      <div>
        <Text variant="h1-medium">
          We create <br />
          great design
        </Text>
      </div>
      <div>
        <Text variant="h5-regular" className="mb-8">
          Helping businesses to grow and create bigger impact on their customers
          through end-to-end design services from identity, visual, to
          experience
        </Text>
        <Link href="/about-us">
          <Button
            className="px-6 py-5 bg-purple"
            icon={<ArrowOutward className="w-6 h-6 text-white" />}
          >
            More About Us
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MoreAboutUs;
