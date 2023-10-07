import { PropsWithChildren } from "react";

function Button({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>) {
  return (
    <button
      className={`px-4 py-3 bg-secondary-500 text-white font-bold rounded-md hover:ring-4 focus:ring-4 focus:outline-none ring-secondary-500 ring-opacity-30 duration-100 w-fit ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
