"use client";
import {
  AtSymbolIcon as EmailIcon,
  DevicePhoneMobileIcon as PhoneIcon,
  EllipsisHorizontalCircleIcon as LoadingIcon,
  MapIcon,
  PaperAirplaneIcon as PaperPlaneIcon,
  XCircleIcon as StopIcon,
} from "@heroicons/react/24/outline";
import { useFormspark } from "@formspark/use-formspark";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { SectionTitle } from "..";

const FORMSPARK_FORM_ID = "PEUv9sGu";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type ContactProps = {};

export default function Contact({}: ContactProps) {
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    await submit(formData);
    setSubmitted(true);
    alert("Form submitted");
  };
  const [submitted, setSubmitted] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex h-screen max-w-[2000px] flex-col items-center justify-evenly overflow-hidden px-10 text-center md:flex-row md:text-left xl:flex-row xl:space-y-0 xl:px-10"
    >
      <SectionTitle title="Contact Me" />
      <div className="flex flex-col space-y-10">
        <h4 className="text-center text-4xl font-semibold">
          <span className="underline decoration-[#f7ab0a]/50">
            Let&apos;s talk
          </span>{" "}
          about your business needs and how I can help satisfy them.
        </h4>
        <div className="space-y-10">
          <div className="flex items-center justify-center space-x-5">
            <PhoneIcon className="h-7 animate-bounce text-[#f7ab0a]" />
            <p className="text-2xl">(978) 237-0901</p>
          </div>
          <div className="group flex items-center justify-center space-x-5">
            <EmailIcon className="animate-spin-slow h-7 text-[#f7ab0a]" />
            <p className="text-2xl">JPalma@gmail.com</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <MapIcon className="h-7 animate-pulse text-[#f7ab0a]" />
            <p className="text-2xl">Charlotte, NC</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto flex w-fit flex-col space-y-3"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              className="contact-input"
              placeholder="Name"
              type="text"
              required
              onChange={() => setSubmitted(false)}
            />
            <input
              {...register("email")}
              className="contact-input"
              placeholder="Email"
              type="email"
              required
              onChange={() => setSubmitted(false)}
            />
          </div>
          <input
            {...register("subject")}
            className="contact-input"
            placeholder="Subject"
            type="text"
            required
            onChange={() => setSubmitted(false)}
          />
          <textarea
            {...register("message")}
            className="contact-input"
            placeholder="Message"
            cols={30}
            rows={10}
            required
            onChange={() => setSubmitted(false)}
          />
          <button
            className="rounded-md bg-[#f7ab0a]/40 px-10 py-5 text-lg font-bold transition-all enabled:hover:bg-[#f7ab0a]"
            disabled={submitting || submitted}
            type="submit"
          >
            {submitting ? (
              <span className="flex justify-center">
                <LoadingIcon className="h-7 animate-ping" />
              </span>
            ) : submitted ? (
              <span className="flex justify-center">
                Please Update The Form to Send Again
              </span>
            ) : (
              <span className="flex justify-center">
                Send
                <PaperPlaneIcon className="h-7 animate-pulse" />
              </span>
            )}
          </button>
        </form>
      </div>
    </motion.div>
  );
}
