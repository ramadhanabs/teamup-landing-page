import useMediaQuery from "@/hooks/useMediaQuery";
import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type TextVariantType =
  | "h1-regular"
  | "h1-medium"
  | "h1-semibold"
  | "h2-regular"
  | "h2-medium"
  | "h2-semibold"
  | "h3-regular"
  | "h3-medium"
  | "h3-semibold"
  | "h4-regular"
  | "h4-medium"
  | "h4-semibold"
  | "h5-regular"
  | "h5-medium"
  | "h5-semibold"
  | "h6-regular"
  | "h6-medium"
  | "h6-semibold"
  | "p-regular"
  | "p-medium"
  | "p-semibold"
  | "s-regular"
  | "s-medium"
  | "s-semibold";

const TEXT_VARIANT = {
  mobile: {
    "h1-regular": "text-[32px] leading-[48px]",
    "h1-medium": "text-[32px] leading-[48px] font-medium",
    "h1-semibold": "text-[32px] leading-[48px] font-semibold",
    "h2-regular": "text-[32px] leading-[48px]",
    "h2-medium": "text-[32px] leading-[48px] font-medium",
    "h2-semibold": "text-[32px] leading-[48px] font-semibold",
    "h3-regular": "text-[32px] leading-[48px]",
    "h3-medium": "text-[32px] leading-[48px] font-medium",
    "h3-semibold": "text-[32px] leading-[48px] font-semibold",
    "h4-regular": "text-[24px] leading-[38px]",
    "h4-medium": "text-[24px] leading-[38px] font-medium",
    "h4-semibold": "text-[24px] leading-[38px] font-semibold",
    "h5-regular": "text-[20px] leading-[34px]",
    "h5-medium": "text-[20px] leading-[34px] font-medium",
    "h5-semibold": "text-[20px] leading-[34px] font-semibold",
    "h6-regular": "text-[16px] leading-[27px]",
    "h6-medium": "text-[16px] leading-[27px] font-medium",
    "h6-semibold": "text-[16px] leading-[27px] font-semibold",
    "p-regular": "text-[14px] leading-[24px]",
    "p-medium": "text-[14px] leading-[24px] font-medium",
    "p-semibold": "text-[14px] leading-[24px] font-semibold",
    "s-regular": "text-[12px] leading-[20px]",
    "s-medium": "text-[12px] leading-[20px] font-medium",
    "s-semibold": "text-[12px] leading-[20px] font-semibold"
  },
  desktop: {
    "h1-regular": "text-[80px] leading-[96px]",
    "h1-medium": "text-[80px] leading-[96px] font-medium",
    "h1-semibold": "text-[80px] leading-[96px] font-semibold",
    "h2-regular": "text-[62px] leading-[80px]",
    "h2-medium": "text-[62px] leading-[80px] font-medium",
    "h2-semibold": "text-[62px] leading-[80px] font-semibold",
    "h3-regular": "text-[48px] leading-[68px]",
    "h3-medium": "text-[48px] leading-[68px] font-medium",
    "h3-semibold": "text-[48px] leading-[68px] font-semibold",
    "h4-regular": "text-[36px] leading-[54px]",
    "h4-medium": "text-[36px] leading-[54px] font-medium",
    "h4-semibold": "text-[36px] leading-[54px] font-semibold",
    "h5-regular": "text-[32px] leading-[48px]",
    "h5-medium": "text-[32px] leading-[48px] font-medium",
    "h5-semibold": "text-[32px] leading-[48px] font-semibold",
    "h6-regular": "text-[24px] leading-[38px]",
    "h6-medium": "text-[24px] leading-[38px] font-medium",
    "h6-semibold": "text-[24px] leading-[38px] font-semibold",
    "p-regular": "text-[20px] leading-[32px]",
    "p-medium": "text-[20px] leading-[32px] font-medium",
    "p-semibold": "text-[20px] leading-[32px] font-semibold",
    "s-regular": "text-[16px] leading-[24px]",
    "s-medium": "text-[16px] leading-[24px] font-medium",
    "s-semibold": "text-[16px] leading-[24px] font-semibold"
  }
};

interface TextProps {
  variant?: TextVariantType;
  className?: string;
  children: ReactNode;
}

const Text = (props: TextProps) => {
  const { variant = "p-regular", className, children } = props;
  const isMobile = useMediaQuery(992);

  return (
    <p
      className={twMerge(
        "text-white",
        className,
        TEXT_VARIANT[isMobile ? "mobile" : "desktop"][variant]
      )}
    >
      {children}
    </p>
  );
};

export default Text;
