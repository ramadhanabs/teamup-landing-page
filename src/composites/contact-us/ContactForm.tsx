import Button from "@/components/Button";
import { ArrowOutward } from "@/components/Icons";
import Text from "@/components/Text";
import { sendContactForm } from "@/lib/api";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

export interface FormValues {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  project_description: string;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<FormValues>();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: FormValues) => {
    try {
      setIsLoading(true);
      const res = await sendContactForm(data);
      if (res.status === 200) {
        toast.success("Success Sending Message");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed Sending Message");
    } finally {
      setIsLoading(false);
    }
  };
  const descriptionLength = watch("project_description", "").length;

  return (
    <div className="my-10">
      <Text variant="h4-semibold" className="mb-12">
        Interested to use our service?
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-10 mb-10">
          <Text variant="h3-semibold" className="text-tosca hidden lg:block">
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
                {...register("name", { required: true })}
              />
            </div>
            {errors.name?.type === "required" && (
              <Text variant="s-regular" className="text-red-500 mt-3">
                Name is required
              </Text>
            )}
          </div>
        </div>
        <div className="flex gap-10 mb-10">
          <Text variant="h3-semibold" className="text-white hidden lg:block">
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
                {...register("email", { required: true })}
              />
            </div>
            {errors.email?.type === "required" && (
              <Text variant="s-regular" className="text-red-500 mt-3">
                Email is required
              </Text>
            )}
          </div>
        </div>
        <div className="flex gap-10 mb-10">
          <Text variant="h3-semibold" className="text-white hidden lg:block">
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
                {...register("phone", { required: true })}
              />
            </div>
            {errors.name?.type === "required" && (
              <Text variant="s-regular" className="text-red-500 mt-3">
                Phone is required
              </Text>
            )}
          </div>
        </div>
        <div className="flex gap-10 mb-10">
          <Text variant="h3-semibold" className="text-white hidden lg:block">
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
                {...register("company")}
              />
            </div>
          </div>
        </div>
        <div className="flex gap-10 mb-10">
          <Text variant="h3-semibold" className="text-white hidden lg:block">
            05
          </Text>
          <div className="w-full">
            <Text variant="p-semibold" className="mb-4">
              Kind of Service
            </Text>
            <div className="py-4 border-b border-grey-light">
              <div className="relative">
                <select
                  className="text-white text-[20px] w-full font-light cursor-pointer"
                  {...register("service")}
                >
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
          <Text variant="h3-semibold" className="text-white hidden lg:block">
            06
          </Text>
          <div className="w-full">
            <Text variant="p-semibold" className="mb-4">
              Brief of Description Project
            </Text>
            <div className="py-4 border-b border-grey-light relative">
              <textarea
                className="text-white text-[20px] w-full font- light block"
                rows={4}
                placeholder="Place the description here..."
                {...register("project_description", { maxLength: 100 })}
              />
              <Text
                className="absolute bottom-[12px] right-0"
                variant="s-regular"
              >
                {descriptionLength}/100
              </Text>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mt-6 gap-6">
              <Text variant="h6-regular">
                We will review it carefully and give the best proposal for you
              </Text>
              <Button
                className="rounded-full bg-purple py-5 px-6"
                icon={<ArrowOutward className="w-6 h-6 text-white" />}
                type="submit"
                isLoading={isLoading}
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
