import Button from "@/components/Button";
import { ArrowOutward } from "@/components/Icons";
import Text from "@/components/Text";
import { sendContactForm } from "@/lib/api";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { twMerge } from "tailwind-merge";

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
    getValues,
    formState: { errors }
  } = useForm<FormValues>();
  const [isLoading, setIsLoading] = useState(false);
  const [focusName, setFocusName] = useState("");
  const formValue = getValues()

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
          <Text
            variant="h3-semibold"
            className={twMerge(
              "hidden lg:block",
              focusName === "name" || formValue.name
                ? "text-tosca"
                : "text-white"
            )}
          >
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
                onFocus={() => setFocusName("name")}
                onBlur={() => setFocusName("")}
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
          <Text
            variant="h3-semibold"
            className={twMerge(
              "hidden lg:block",
              focusName === "email" || formValue.email
                ? "text-tosca"
                : "text-white"
            )}
          >
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
                onFocus={() => setFocusName("email")}
                onBlur={() => setFocusName("")}
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
          <Text
            variant="h3-semibold"
            className={twMerge(
              "hidden lg:block",
              focusName === "phone" || formValue.phone
                ? "text-tosca"
                : "text-white"
            )}
          >
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
                onFocus={() => setFocusName("phone")}
                onBlur={() => setFocusName("")}
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
          <Text
            variant="h3-semibold"
            className={twMerge(
              "hidden lg:block",
              focusName === "company" || formValue.company
                ? "text-tosca"
                : "text-white"
            )}
          >
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
                onFocus={() => setFocusName("company")}
                onBlur={() => setFocusName("")}
              />
            </div>
          </div>
        </div>
        <div className="flex gap-10 mb-10">
          <Text
            variant="h3-semibold"
            className={twMerge(
              "hidden lg:block",
              focusName === "service" || formValue.service
                ? "text-tosca"
                : "text-white"
            )}
          >
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
                  placeholder="Select Option"
                  {...register("service")}
                  onFocus={() => setFocusName("service")}
                  onBlur={() => setFocusName("")}
                >
                  <option>Graphic Designer</option>
                  <option>Programmer</option>
                  <option>Businessman</option>
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
          <Text
            variant="h3-semibold"
            className={twMerge(
              "hidden lg:block",
              focusName === "project_description" || formValue.project_description
                ? "text-tosca"
                : "text-white"
            )}
          >
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
                {...register("project_description", { maxLength: 500 })}
                onFocus={() => setFocusName("project_description")}
                onBlur={() => setFocusName("")}
              />
              <Text
                className="absolute bottom-[12px] right-0"
                variant="s-regular"
              >
                {descriptionLength}/500
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
