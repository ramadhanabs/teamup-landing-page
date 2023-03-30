import Button from "@/components/Button";
import { ArrowOutward } from "@/components/Icons";
import Text from "@/components/Text";
import React from "react";

const ContactForm = () => {
  return (
    <div className="my-10">
      <Text variant="h4-semibold" className="mb-12">
        Interested to use our service?
      </Text>
      <form>
        <div className="flex gap-10 mb-10">
          <Text variant="h3-semibold" className="text-tosca">
            01
          </Text>
          <div className="w-full">
            <Text variant="p-semibold" className="mb-4">
              Name
            </Text>
            <div className="py-4 border-b border-grey-light">
              <input
                className="text-white text-[20px] w-full font-light"
                placeholder="Place your name here..."
              />
            </div>
          </div>
        </div>
        <div className="flex gap-10 mb-10">
          <Text variant="h3-semibold" className="text-white">
            02
          </Text>
          <div className="w-full">
            <Text variant="p-semibold" className="mb-4">
              Email
            </Text>
            <div className="py-4 border-b border-grey-light">
              <input
                type="email"
                className="text-white text-[20px] w-full font-light"
                placeholder="Place your email here..."
              />
            </div>
          </div>
        </div>
        <div className="flex gap-10 mb-10">
          <Text variant="h3-semibold" className="text-white">
            03
          </Text>
          <div className="w-full">
            <Text variant="p-semibold" className="mb-4">
              Phone Number
            </Text>
            <div className="py-4 border-b border-grey-light">
              <input
                type="number"
                className="text-white text-[20px] w-full font-light"
                placeholder="Place your phone number here..."
              />
            </div>
          </div>
        </div>
        <div className="flex gap-10 mb-10">
          <Text variant="h3-semibold" className="text-white">
            04
          </Text>
          <div className="w-full">
            <Text variant="p-semibold" className="mb-4">
              Company Name
            </Text>
            <div className="py-4 border-b border-grey-light">
              <input
                className="text-white text-[20px] w-full font-light"
                placeholder="Place your company name here..."
              />
            </div>
          </div>
        </div>
        <div className="flex gap-10 mb-10">
          <Text variant="h3-semibold" className="text-white">
            05
          </Text>
          <div className="w-full">
            <Text variant="p-semibold" className="mb-4">
              Kind of Service
            </Text>
            <div className="py-4 border-b border-grey-light">
              <div className="relative">
                <select className="text-white text-[20px] w-full font-light cursor-pointer">
                  <option>Select Option</option>
                  <option>Graphic Designer</option>
                </select>
                <img
                  src="/images/icons/chevron-down.svg"
                  className="w-4 h-4 absolute right-0 top-[25%]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-10 mb-10">
          <Text variant="h3-semibold" className="text-white">
            06
          </Text>
          <div className="w-full">
            <Text variant="p-semibold" className="mb-4">
              Brief of Description Project
            </Text>
            <div className="py-4 border-b border-grey-light relative">
              <textarea
                className="text-white text-[20px] w-full font-light"
                rows={4}
                cols={50}
                placeholder="Place the description here..."
              />
              <Text
                className="absolute bottom-[12px] right-0"
                variant="s-regular"
              >
                0/100
              </Text>
            </div>
            <div className="flex items-center justify-between mt-6">
              <Text variant="h6-regular">
                We will review it carefully and give the best proposal for you
              </Text>
              <Button
                className="rounded-full bg-purple py-5 px-6"
                icon={<ArrowOutward className="w-6 h-6 text-white" />}
              >
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
