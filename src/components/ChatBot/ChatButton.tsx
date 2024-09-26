"use client";
import clsx from "clsx";
import { useEffect, useState } from "react";
import {
  ChatBubbleLeftRightIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import { ChatBot } from ".";
import { InitChat } from "@/middleware/InitChat";

export default function ChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [chatLog, setChatLog] = useState<{ type: string; message: string }[]>(
    [],
  );
  const [threadId, setThreadId] = useState<string>();

  useEffect(() => {
    if (!threadId) {
      InitChat().then((id: string) => {
        setThreadId(id);
      });
    }
  }, [threadId]);

  return (
    <motion.footer
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="fixed bottom-3 right-3 z-50 flex h-12 items-center bg-transparent pr-3 xl:right-[10%] 2xl:right-1/4"
    >
      <button
        className={clsx(
          "group h-12 w-12 animate-bounce rounded-full border border-[#FB8500] p-2 filter hover:bg-[#FB8500]",
          { "animate-none": isOpen },
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <ChatBubbleLeftRightIcon className="fill-[#FB8500] stroke-[#023047] group-hover:fill-white group-hover:opacity-70" />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0 }}
            className={clsx({
              "absolute bottom-16 right-3 m-2 block h-[500px] w-80 max-w-sm overflow-hidden rounded-lg bg-white opacity-100 shadow-md xl:right-[10%] 2xl:right-1/4":
                isOpen,
              "hidden opacity-0 ": !isOpen,
            })}
          >
            <button
              className="absolute right-3 top-3 z-10 h-10 w-10 rounded-full border border-[#FB8500] hover:bg-[#FB8500]"
              onClick={() => setIsOpen(false)}
            >
              <XCircleIcon className="fill-slate-300" />
            </button>
            <ChatBot
              chatLog={chatLog}
              setChatLog={setChatLog}
              threadId={threadId!}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.footer>
  );
}
