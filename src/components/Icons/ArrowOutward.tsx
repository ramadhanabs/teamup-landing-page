import React from "react";

interface Props {
  className?: string;
}

const ArrowOutward = (props: Props) => {
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
      <path
        d="M16.0072 8.4L7.13223 17.3C6.93223 17.5 6.69456 17.6 6.41923 17.6C6.14456 17.6 5.90723 17.5 5.70723 17.3C5.50723 17.1 5.40723 16.8623 5.40723 16.587C5.40723 16.3123 5.50723 16.075 5.70723 15.875L14.6072 7H7.00723C6.72389 7 6.48623 6.90433 6.29423 6.713C6.10289 6.521 6.00723 6.28333 6.00723 6C6.00723 5.71667 6.10289 5.479 6.29423 5.287C6.48623 5.09567 6.72389 5 7.00723 5L17.0072 5C17.2906 5 17.5279 5.09567 17.7192 5.287C17.9112 5.479 18.0072 5.71667 18.0072 6V16C18.0072 16.2833 17.9112 16.5207 17.7192 16.712C17.5279 16.904 17.2906 17 17.0072 17C16.7239 17 16.4866 16.904 16.2952 16.712C16.1032 16.5207 16.0072 16.2833 16.0072 16V8.4Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ArrowOutward;
