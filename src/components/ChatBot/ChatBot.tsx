"use client";

import clsx from "clsx";
import OpenAI from "openai";
import { FormEvent, useEffect, useState } from "react";
import Markdown from "react-markdown";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY || "",
  dangerouslyAllowBrowser: true,
});

const assistant_id = process.env.NEXT_PUBLIC_OPENAI_ASSISTANT_ID || "";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export type ChatBotProps = {};
function ChatBot() {
  const [inputValue, setInputValue] = useState("");
  const [chatLog, setChatLog] = useState<{ type: string; message: string }[]>(
    [],
  );
  const [isLoading, setIsLoading] = useState(false);
  const [thread, setThread] = useState<OpenAI.Beta.Threads.Thread>();

  useEffect(() => {
    async function fetchData() {
      if (!thread) {
        const newThread = await openai.beta.threads.create();
        setThread(newThread);
      }
    }
    fetchData();
  }, [thread]);

  const handleSubmit = async (event: FormEvent) => {
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

    await openai.beta.threads.messages.create(thread!.id, {
      role: "user",
      content: message,
    });

    const run = await openai.beta.threads.runs.create(thread!.id, {
      assistant_id,
    });

    let runStatus = await openai.beta.threads.runs.retrieve(thread!.id, run.id);

    while (runStatus.status !== "completed") {
      await sleep(2000);
      runStatus = await openai.beta.threads.runs.retrieve(thread!.id, run.id);
    }

    const messages = await openai.beta.threads.messages.list(thread!.id);

    const lastMessageForRun = messages.data
      .filter(
        (message) => message.run_id === run.id && message.role === "assistant",
      )
      .pop();

    setChatLog((prevChatLog) => [
      ...prevChatLog,

      {
        type: "bot",
        message:
          lastMessageForRun?.content[0].type === "text"
            ? lastMessageForRun?.content[0].text.value
            : "Message cannot be found",
      },
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
    <div className="container mx-auto h-full max-w-[700px] rounded-lg">
      <div className="flex h-full flex-col bg-gray-900">
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
                    "bg-gradient-to-l from-[#FB8500] to-purple-500":
                      message.type === "user",
                    "bg-gradient-to-r from-[#FB8500] to-purple-500":
                      message.type === "bot",
                  })}
                >
                  <Markdown>{message.message}</Markdown>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className=" max-w-sm rounded-lg bg-gradient-to-r from-[#FB8500] to-purple-500 p-4 text-white">
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
              className="rounded-lg bg-gradient-to-tl from-[#FB8500] to-purple-500 px-4 py-2 font-semibold text-white transition-colors duration-300 hover:bg-gradient-to-tl hover:from-[#FB8500] hover:to-purple-600"
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
