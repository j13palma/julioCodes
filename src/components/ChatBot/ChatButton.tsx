"use client";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { ChatBot } from ".";
import clsx from "clsx";

export type ChatButtonProps = {};
export default function ChatButton({}: ChatButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <footer className="sticky bottom-3 z-50 mx-auto flex h-12 w-full max-w-7xl cursor-pointer items-center justify-end bg-transparent pr-3">
        <div className="group h-12 w-12 animate-bounce rounded-full p-2 filter hover:border hover:border-[#FB8500]">
          <ChatBubbleLeftRightIcon
            className="stroke-[#023047] group-hover:fill-[#FB8500] group-hover:opacity-70"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
        <div
          className={clsx({
            "absolute bottom-16 m-2 block h-[420px] w-80 max-w-xs overflow-hidden rounded-lg bg-white shadow-sm":
              isOpen,
            hidden: !isOpen,
          })}
        >
          <ChatBot />
        </div>
      </footer>
    </>
  );
}
