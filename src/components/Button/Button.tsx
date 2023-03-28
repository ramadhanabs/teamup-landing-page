import React, {
  ReactNode,
  ButtonHTMLAttributes,
  PropsWithChildren
} from "react";
import { twMerge } from "tailwind-merge";
import Text from "../Text";

type ButtonVariant = "simple" | "circle";

type CircleSizeVariant = "large" | "small";

const CIRCLE_SIZE = {
  large: "w-[130px] h-[130px]",
  small: "w-[90px] h-[90px]"
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
  icon?: ReactNode;
  isTextBlack?: boolean;
  sizeCircle?: CircleSizeVariant;
}

const Button = (props: PropsWithChildren<ButtonProps>) => {
  const {
    icon,
    className,
    children,
    variant = "simple",
    isTextBlack = false,
    sizeCircle = "large",
    ...others
  } = props;

  if (variant === "circle")
    return (
      <button
        className={twMerge(
          "border border-white rounded-full flex items-center justify-center",
          CIRCLE_SIZE[sizeCircle]
        )}
        {...others}
      >
        {icon}
      </button>
    );

  return (
    <button
      className={twMerge(
        "rounded-full flex items-center justify-center gap-2",
        className
      )}
      {...others}
    >
      <Text className={isTextBlack ? "!text-black" : "text-white"}>
        {children}
      </Text>
      {icon}
    </button>
  );
};

export default Button;
