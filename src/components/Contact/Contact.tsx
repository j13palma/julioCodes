'use client';
import {
  AtSymbolIcon as EmailIcon,
  DevicePhoneMobileIcon as PhoneIcon,
  EllipsisHorizontalCircleIcon as LoadingIcon,
  MapIcon,
  PaperAirplaneIcon as PaperPlaneIcon,
} from '@heroicons/react/24/outline';
import { useFormspark } from '@formspark/use-formspark';
import { motion } from 'framer-motion';
import { useState } from 'react';

import { SectionTitle } from '..';
import { PageInfo } from '../../../typings';

const FORMSPARK_FORM_ID = 'PEUv9sGu';

export type ContactProps = { pageInfo: PageInfo };

export default function Contact({ pageInfo }: ContactProps) {
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    await submit({
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    });
    setSubmitted(true);
    alert('Form submitted');
  };

  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex h-fit max-w-7xl flex-col items-center justify-start px-10 pb-0 pt-10 text-left md:h-screen"
    >
      <SectionTitle title="Contact Me" />
      <div className="mt-5 flex max-w-[280px] flex-col space-y-5 md:max-w-md lg:max-w-lg">
        <h4 className="mb-5 text-center text-4xl font-semibold">
          Let&apos;s talk,{' '}
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
            <p className="text-2xl">{pageInfo.email}</p>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <MapIcon className="h-7 animate-pulse text-[#FB8500]" />
            <p className="text-2xl">{pageInfo.address}</p>
          </div>
        </div>
        <form
          action={handleSubmit}
          className="mx-auto flex w-full flex-col space-y-3"
        >
          <div className="flex flex-col gap-3 md:flex-row">
            <input
              className="contact-input w-full"
              name="name"
              placeholder="Name"
              type="text"
              required
            />
            <input
              className="contact-input w-full"
              name="email"
              placeholder="Email"
              type="email"
              required
            />
          </div>
          <input
            className="contact-input"
            name="subject"
            placeholder="Subject"
            type="text"
            required
          />
          <textarea
            className="contact-input"
            name="message"
            placeholder="Message"
            cols={30}
            rows={5}
            required
          />
          <button
            className="rounded-md border-4 border-[#FB8500] px-10 py-5 text-lg font-bold transition-all enabled:hover:bg-[#FB8500]"
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
    </motion.article>
  );
}
