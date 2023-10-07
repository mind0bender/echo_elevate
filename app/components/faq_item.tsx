"use client";
import Image from "next/image";
import expandIcon from "../asstes/down.svg";
import { useState } from "react";

export interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <li className={`px-4 py-3 rounded-md border shadow-md bg-white`}>
      <div className={`flex w-full flex-col justify-between gap-2`}>
        <button onClick={() => setIsOpen(!isOpen)}>
          <div className={`flex justify-between items-center`}>
            <h5 className={`flex  gap-4 text-lg sm:text-xl`}>{question}</h5>
            <Image
              className={`${isOpen && "rotate-180"} duration-150`}
              alt={`Expand Question`}
              src={expandIcon}
            />
          </div>
        </button>
        <hr />
        <p
          className={`${
            isOpen ? "line-clamp-none" : "line-clamp-1"
          } text-ellipsis`}
        >
          {answer}
        </p>
      </div>
    </li>
  );
}
