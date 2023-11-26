"use client";

import { LifebuoyIcon } from "@heroicons/react/24/outline";
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
  const [thread, setThread] = useState<{
    id: OpenAI.Beta.Threads.Thread["id"];
    instruction: string;
  }>();

  useEffect(() => {
    async function fetchData() {
      if (!thread) {
        const newThread = await openai.beta.threads.create();
        let instruction = "";
        await fetch("/api/datascraper", { method: "GET" })
          .then(async (res) => {
            const data = await res.json();
            return (instruction = JSON.stringify(data));
          })
          .catch((error) => {
            console.log(error);
          });
        setThread({ id: newThread.id, instruction });
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
    const element = document.body.querySelector("div.overflow-y-auto");
    setIsLoading(true);

    await openai.beta.threads.messages.create(thread!.id, {
      role: "user",
      content: message,
    });

    const run = await openai.beta.threads.runs.create(thread!.id, {
      assistant_id,
      instructions: `${
        (await openai.beta.assistants.retrieve(assistant_id)).instructions
      } additional information about julio: ${thread?.instruction}`,
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
    element?.scrollTo({
      top: 1000,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="container mx-auto h-full w-full max-w-[700px] rounded-lg">
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
                    "ml-5 bg-gradient-to-l from-[#FB8500] to-purple-500":
                      message.type === "user",
                    "mr-5 bg-gradient-to-r from-[#FB8500] to-purple-500":
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
                  <LifebuoyIcon className="h-5 w-5 animate-spin-slow" />
                </div>
              </div>
            )}
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex-none p-6">
          <div className="flex rounded-lg bg-slate-300">
            <input
              type="text"
              placeholder="Ask About Julio..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-[212px] flex-grow bg-transparent px-4 py-2 text-white placeholder:text-black focus:outline-none"
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
