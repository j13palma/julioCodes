"use server";

import OpenAI from "openai";

const assistant_id = process.env.NEXT_PUBLIC_OPENAI_ASSISTANT_ID || "";
const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY || "",
});

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const removeCitation = (text: string) => text.replace(/【.*?】/g, "");

export async function InitChat() {
  const newThread = await openai.beta.threads.create();
  return newThread.id;
}

export async function SendMessage({
  message,
  threadId,
}: {
  message: string;
  threadId: string;
}) {
  await openai.beta.threads.messages.create(threadId, {
    role: "user",
    content: message,
  });

  const run = await openai.beta.threads.runs.create(threadId, {
    assistant_id,
  });

  let runStatus = await openai.beta.threads.runs.retrieve(threadId, run.id);

  while (runStatus.status !== "completed") {
    await sleep(2000);
    runStatus = await openai.beta.threads.runs.retrieve(threadId, run.id);
  }

  const messages = await openai.beta.threads.messages.list(threadId);

  const lastMessageForRun = messages.data
    .filter(
      (message) => message.run_id === run.id && message.role === "assistant",
    )
    .pop();

  return lastMessageForRun?.content[0].type === "text"
    ? removeCitation(lastMessageForRun?.content[0].text.value)
    : "Message cannot be found";
}
