import React from "react";

interface Props {
  className?: string;
}

const ArrowLeft = (props: Props) => {
  const { className = "" } = props;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clip-path="url(#clip0_1395_332)">
        <path
          d="M5.37144 11.3532L22.4686 11.3292C22.8533 11.3292 23.1781 11.4616 23.443 11.7264C23.7072 11.9906 23.8393 12.3151 23.8393 12.6998C23.8393 13.0846 23.7068 13.4094 23.442 13.6742C23.1778 13.9384 22.8533 14.0705 22.4686 14.0705L5.37144 14.0464L12.6816 21.3566C12.9541 21.6291 13.0907 21.9498 13.0914 22.3185C13.0907 22.6872 12.9541 23.0078 12.6816 23.2804C12.4091 23.5529 12.0885 23.6895 11.7198 23.6901C11.351 23.6895 11.0304 23.5529 10.7579 23.2804L1.13923 13.6617C0.866706 13.3892 0.730441 13.0689 0.730441 12.7008C0.730442 12.3314 0.866705 12.0105 1.13923 11.738L10.7579 2.11931C11.0304 1.84678 11.351 1.71084 11.7198 1.71148C12.0885 1.71084 12.4091 1.84678 12.6816 2.11931C12.9541 2.39184 13.0901 2.71246 13.0894 3.08118C13.0901 3.44989 12.9541 3.77051 12.6816 4.04304L5.37144 11.3532Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_1395_332">
          <rect
            width="24"
            height="24"
            fill="currentColor"
            transform="translate(24 24) rotate(180)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ArrowLeft;
