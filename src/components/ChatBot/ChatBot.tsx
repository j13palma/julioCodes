"use client";

import { SendMessage } from "@/middleware/InitChat";
import clsx from "clsx";
import {
  createRef,
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import Markdown from "react-markdown";

const SpeechBubbles = () => {
  return (
    <div className="flex justify-start">
      <div className="max-w-sm rounded-lg bg-gradient-to-r from-[#FB8500] to-purple-500 p-3 text-white">
        <svg
          width="32"
          height="32"
          viewBox="0 0 28 24"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-white"
        >
          <circle cx="4" cy="14" r="4">
            <animate
              id="spinner_qFRN"
              begin="0;spinner_OcgL.end+0.25s"
              attributeName="cy"
              calcMode="spline"
              dur="0.6s"
              values="12;6;12"
              keySplines=".33,.66,.66,1;.33,0,.66,.33"
            />
          </circle>
          <circle cx="14" cy="14" r="4">
            <animate
              begin="spinner_qFRN.begin+0.1s"
              attributeName="cy"
              calcMode="spline"
              dur="0.6s"
              values="12;6;12"
              keySplines=".33,.66,.66,1;.33,0,.66,.33"
            />
          </circle>
          <circle cx="24" cy="14" r="4">
            <animate
              id="spinner_OcgL"
              begin="spinner_qFRN.begin+0.2s"
              attributeName="cy"
              calcMode="spline"
              dur="0.6s"
              values="12;6;12"
              keySplines=".33,.66,.66,1;.33,0,.66,.33"
            />
          </circle>
        </svg>
      </div>
    </div>
  );
};

interface ChatBotProps {
  chatLog: { type: string; message: string }[];
  setChatLog: Dispatch<SetStateAction<{ type: string; message: string }[]>>;
  threadId: string;
}

export default function ChatBot({
  chatLog,
  setChatLog,
  threadId,
}: ChatBotProps) {
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = createRef<HTMLDivElement>();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    setChatLog((prevChatLog) => [
      ...prevChatLog,
      { type: "user", message: inputValue },
    ]);

    sendMessage(inputValue);
    setInputValue("");
  };

  const sendMessage = async (message: string) => {
    setIsLoading(true);

    const chatMessage = await SendMessage({ message, threadId: threadId });
    setChatLog((prevChatLog) => [
      ...prevChatLog,

      {
        type: "bot",
        message: chatMessage,
      },
    ]);

    setIsLoading(false);
  };

  return (
    <div className="container mx-auto h-full w-full max-w-[700px] rounded-lg">
      <div className="flex h-full flex-col bg-slate-700">
        <h1 className="bg-gradient-to-b from-[#FB8500] to-purple-500 bg-clip-text py-3 text-center text-5xl font-bold text-transparent">
          Chat
        </h1>
        <div className="flex-grow overflow-y-auto p-6">
          <div className="flex flex-col space-y-4">
            {chatLog.map((message, index) => (
              <div
                key={index}
                className={clsx("flex", {
                  "justify-end": message.type === "user",
                  "justify-start": message.type === "bot",
                })}
              >
                <div
                  className={clsx("max-w-sm rounded-lg p-4 text-white", {
                    "ml-5 bg-gradient-to-l from-[#FB8500] to-purple-500":
                      message.type === "user",
                    "mr-5 bg-gradient-to-r from-[#FB8500] to-purple-500":
                      message.type === "bot",
                  })}
                >
                  <div ref={messagesEndRef} />
                  <Markdown>{message.message}</Markdown>
                </div>
              </div>
            ))}
            {isLoading && <SpeechBubbles />}
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex-none p-6">
          <div className="flex rounded-lg bg-slate-300">
            <input
              type="text"
              placeholder="Ask About Julio..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-[212px] flex-grow bg-transparent px-4 py-2 placeholder:text-white focus:outline-none"
            />
            <button
              className="rounded-lg bg-gradient-to-tl from-[#FB8500] to-purple-500 px-4 py-2 font-semibold text-white transition-colors duration-300 hover:bg-gradient-to-tl hover:from-[#FB8500] hover:to-purple-600"
              disabled={isLoading}
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
