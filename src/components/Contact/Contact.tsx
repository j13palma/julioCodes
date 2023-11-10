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
import { PageInfo } from "../../../typings";

const FORMSPARK_FORM_ID = "PEUv9sGu";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type ContactProps = { pageInfo: PageInfo };

export default function Contact({ pageInfo }: ContactProps) {
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
      className="relative mx-auto flex h-fit max-w-7xl flex-col items-center justify-start px-10 pb-28 pt-10 text-left md:h-screen"
    >
      <SectionTitle title="Contact Me" />
      <div className="mt-5 flex max-w-[280px] flex-col space-y-5 md:max-w-md lg:max-w-lg">
        <h4 className="text-center text-4xl font-semibold">
          <span className="underline decoration-[#FB8500]/50">
            Let&apos;s talk
          </span>{" "}
          about your business needs and how I can help satisfy them.
        </h4>
        <div className="space-y-10">
          <div className="flex items-center justify-center space-x-2">
            <PhoneIcon className="h-7 animate-bounce text-[#FB8500]" />
            <p className="text-2xl">{pageInfo.phone}</p>
          </div>
          <div className="group flex items-center justify-center space-x-2">
            <EmailIcon className="h-7 animate-spin-slow text-[#FB8500]" />
            <p className="text-2xl">{pageInfo.email}</p>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <MapIcon className="h-7 animate-pulse text-[#FB8500]" />
            <p className="text-2xl">{pageInfo.address}</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto flex w-full flex-col space-y-3"
        >
          <div className="flex flex-col gap-3 md:flex-row">
            <input
              {...register("name")}
              className="contact-input w-full"
              placeholder="Name"
              type="text"
              required
              onChange={() => setSubmitted(false)}
            />
            <input
              {...register("email")}
              className="contact-input w-full"
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
            rows={5}
            required
            onChange={() => setSubmitted(false)}
          />
          <button
            className="rounded-md bg-[#FB8500]/40 px-10 py-5 text-lg font-bold transition-all enabled:hover:bg-[#FB8500]"
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
