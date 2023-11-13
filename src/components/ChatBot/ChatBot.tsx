"use client";

import OpenAI from "openai";
import { FormEvent, useState } from "react";

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
    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: message }],
      model: "gpt-3.5-turbo",
    });

    setIsLoading(true);
    setChatLog((prevChatLog) => [
      ...prevChatLog,
      { type: "bot", message: completion.choices[0].message.content || "" },
    ]);
    setIsLoading(false);
  }

  return (
    <div className="container mx-auto max-w-[700px]">
      <div className="flex h-screen flex-col bg-gray-900">
        <h1 className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text py-3 text-center text-6xl font-bold text-transparent">
          Chat
        </h1>
        {chatLog.map((message, index) => (
          <div key={index}>{message.message}</div>
        ))}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Type your message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
export default ChatBot;
