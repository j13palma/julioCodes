"use client";

import OpenAI from "openai";
import { FormEvent, useState } from "react";
import clsx from "clsx";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY || "",
  dangerouslyAllowBrowser: true,
});

export type ChatBotProps = {};
function ChatBot({}: ChatBotProps) {
  const [inputValue, setInputValue] = useState("");
  const [chatLog, setChatLog] = useState([{ type: "", message: "" }]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    setChatLog((prevChatLog) => [
      ...prevChatLog,
      { type: "user", message: inputValue },
    ]);

    sendMessage(inputValue);
    setInputValue("");
  };

  async function sendMessage(message: string) {
    setIsLoading(true);
    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: message }],
      model: "gpt-3.5-turbo",
    });

    setChatLog((prevChatLog) => [
      ...prevChatLog,
      { type: "bot", message: completion.choices[0].message.content || "" },
    ]);
    setIsLoading(false);
  }

  const TypingAnimation = () => {
    return (
      <div className="flex items-center space-x-2">
        <div className="h-4 w-4 animate-pulse rounded-full bg-gradient-radial from-slate-200 to-slate-600" />
        <div className="h-4 w-4 animate-pulse rounded-full bg-gradient-radial from-slate-200 to-slate-600" />
        <div className="h-4 w-4 animate-pulse rounded-full bg-gradient-radial from-slate-200 to-slate-600" />
      </div>
    );
  };

  return (
    <div className="container mx-auto max-w-[700px]">
      <div className="flex h-full flex-col bg-gray-900">
        <h1 className="bg-gradient-to-b from-blue-500 to-purple-500 bg-clip-text py-3 text-center text-6xl font-bold text-transparent">
          Chat
        </h1>
        <div className="flex-grow p-6">
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
                    "bg-gradient-to-l from-blue-500 to-purple-500":
                      message.type === "user",
                    "bg-gradient-to-r from-blue-500 to-purple-500":
                      message.type === "bot",
                  })}
                >
                  {message.message}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className=" max-w-sm rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 p-4 text-white">
                  <TypingAnimation />
                </div>
              </div>
            )}
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex-none p-6">
          <div className="flex rounded-lg border border-gray-500 bg-slate-400">
            <input
              type="text"
              placeholder="Type your message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-grow bg-transparent px-4 py-2 text-white focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-lg bg-gradient-to-tl from-blue-500 to-purple-500 px-4 py-2 font-semibold text-white transition-colors duration-300 hover:bg-gradient-to-tl hover:from-blue-600 hover:to-purple-600"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default ChatBot;
