"use client";
import {
  ChatBubbleLeftRightIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ChatBot } from ".";

export type ChatButtonProps = {};
export default function ChatButton({}: ChatButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <motion.footer
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="fixed bottom-3 z-50 mx-auto flex h-12 w-full max-w-7xl items-center justify-end bg-transparent pr-3"
      >
        <div
          className={clsx(
            "group h-12 w-12 animate-bounce rounded-full p-2 filter hover:border hover:border-[#FB8500]",
            { "animate-none": isOpen },
          )}
        >
          <ChatBubbleLeftRightIcon
            className="stroke-[#023047] group-hover:fill-[#FB8500] group-hover:opacity-70"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              exit={{ opacity: 0 }}
              className={clsx({
                "absolute bottom-16 m-2 block h-[500px] w-80 max-w-sm overflow-hidden rounded-lg bg-white opacity-100 shadow-sm":
                  isOpen,
                "hidden opacity-0 ": !isOpen,
              })}
            >
              <button
                className="absolute right-3 top-3 z-10 h-10 w-10 rounded-full border border-[#FB8500]"
                onClick={() => setIsOpen(false)}
              >
                <XCircleIcon className="fill-slate-300" />
              </button>
              <ChatBot />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.footer>
    </>
  );
}
