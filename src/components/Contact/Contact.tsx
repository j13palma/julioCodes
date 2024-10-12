"use client";
import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import {
  AtSymbolIcon as EmailIcon,
  DevicePhoneMobileIcon as PhoneIcon,
  EllipsisHorizontalCircleIcon as LoadingIcon,
  MapIcon,
  PaperAirplaneIcon as PaperPlaneIcon,
} from "@heroicons/react/24/outline";
import { useFormspark } from "@formspark/use-formspark";

import { SectionTitle } from "@/components";
import { PageInfo } from "@root/typings";

const FORMSPARK_FORM_ID = process.env.NEXT_PUBLIC_FORMSPARK_ID || "";

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
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<Inputs>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    await submit(formData);
    setSubmitted(true);
  };

  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex h-fit max-w-7xl flex-col items-center justify-start px-10 pb-10 pt-10 md:h-screen"
    >
      <SectionTitle title="Contact Me" />
      <div className="mt-5 flex max-w-[280px] flex-col space-y-5 md:max-w-md lg:max-w-lg">
        <h4 className="mb-5 text-center text-4xl font-semibold">
          Let&apos;s talk,{" "}
          <span className="underline decoration-[#FB8500]/50">
            Let&apos;s connect
          </span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center justify-center space-x-2">
            <PhoneIcon className="h-7 animate-bounce text-[#FB8500]" />
            <p className="text-2xl">{pageInfo.phone}</p>
          </div>
          <div className="group flex items-center justify-center space-x-2">
            <EmailIcon className="h-7 animate-spin-slow text-[#FB8500]" />
            <a
              className="text-2xl"
              href={`mailto:${pageInfo.email}`}
              target="_blank"
            >
              {pageInfo.email}
            </a>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <MapIcon className="h-7 animate-pulse text-[#FB8500]" />
            <p className="text-2xl">{pageInfo.address}</p>
          </div>
        </div>
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="mx-auto flex w-full flex-col space-y-3"
          >
            <div className="flex flex-col gap-3 md:flex-row">
              <input
                className="contact-input w-full"
                name="name"
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                placeholder="Name"
                type="text"
                required
              />
              <input
                className="contact-input w-full"
                name="email"
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                placeholder="Email"
                type="email"
                required
              />
            </div>
            <input
              className="contact-input"
              name="subject"
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, subject: e.target.value }))
              }
              placeholder="Subject"
              type="text"
              required
            />
            <textarea
              className="contact-input"
              name="message"
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, message: e.target.value }))
              }
              placeholder="Message"
              cols={30}
              rows={5}
              required
            />
            <button
              className="group rounded-md border-4 border-[#FB8500] px-10 py-5 text-lg font-bold transition-all enabled:hover:bg-[#FB8500]"
              disabled={submitting || submitted}
              type="submit"
            >
              {submitting ? (
                <span className="flex justify-center">
                  <LoadingIcon className="h-7 animate-spin" />
                </span>
              ) : (
                <span className="flex justify-center">
                  SEND
                  <PaperPlaneIcon className="h-7 animate-pulse text-[#FB8500] group-hover:text-white" />
                </span>
              )}
            </button>
          </form>
        ) : (
          <div className="my-auto justify-center text-center align-middle">
            <p className="my-16 text-3xl">
              Thank you for your message! <br />
              <br /> I will respond to you as soon as possible.
            </p>
          </div>
        )}
      </div>
    </motion.article>
  );
}
