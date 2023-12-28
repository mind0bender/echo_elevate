"use client";

import { ChangeEvent, useState } from "react";
import Button from "./button";

export interface ContactData {
  name: string;
  email: string;
  message: string;
}

export function ContactForm(): JSX.Element {
  const [contactData, setContactData] = useState<ContactData>({
    name: "",
    email: "",
    message: "",
  });

  return (
    <div
      className={`flex grow flex-col justify-center items-center gap-4 px-10 py-8 rounded-md bg-white shadow-md`}
    >
      <h4 className={`text-2xl sm:text-3xl font-medium`}>Contact Us</h4>
      <form className={`flex grow flex-col gap-4`}>
        <div className={`flex flex-col sm:flex-row gap-4`}>
          <div className={`flex flex-col-reverse gap-2`}>
            <input
              type={`text`}
              id={`name`}
              name={`name`}
              autoFocus
              placeholder={`John Doe`}
              className={`focus:ring-2 peer focus:border-none focus:outline-none focus:ring-secondary-300 rounded-sm ring-1 ring-slate-400 px-4 py-2`}
              value={contactData.name}
              onChange={(e: ChangeEvent<HTMLInputElement>): void => {
                setContactData(
                  (prevCD: ContactData): ContactData => ({
                    ...prevCD,
                    name: e.target.value,
                  })
                );
              }}
            />
            <label
              className={`text-slate-700 peer-focus:text-slate-950 after:content-['*'] after:text-red-500`}
              htmlFor={`name`}
            >
              Name
            </label>
          </div>
          <div className={`flex flex-col-reverse gap-2`}>
            <input
              type={`email`}
              id={`email`}
              name={`email`}
              placeholder={`johndoe@example.com`}
              className={`focus:ring-2 peer focus:border-none focus:outline-none focus:ring-secondary-300 rounded-sm ring-1 ring-slate-400 px-4 py-2`}
              value={contactData.email}
              onChange={(e: ChangeEvent<HTMLInputElement>): void => {
                setContactData(
                  (prevCD: ContactData): ContactData => ({
                    ...prevCD,
                    email: e.target.value,
                  })
                );
              }}
            />
            <label
              className={`text-slate-700 peer-focus:text-slate-950 after:content-['*'] after:text-red-500`}
              htmlFor={`email`}
            >
              Email
            </label>
          </div>
        </div>
        <div className={`flex flex-col-reverse gap-2`}>
          <textarea
            rows={4}
            id={`message`}
            name={`message`}
            placeholder={`Hey, write your message here.`}
            className={`focus:ring-2 peer focus:border-none focus:outline-none focus:ring-secondary-300  rounded-sm ring-1 ring-slate-400 px-4 py-2`}
            value={contactData.message}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>): void => {
              setContactData(
                (prevCD: ContactData): ContactData => ({
                  ...prevCD,
                  message: e.target.value,
                })
              );
            }}
          />
          <label
            className={`text-slate-700 peer-focus:text-slate-950 after:content-['*'] after:text-red-500`}
            htmlFor={`message`}
          >
            Message
          </label>
        </div>
        <div className={`flex justify-end items-center pt-2 w-full`}>
          <Button className={`w-full text-xl`}>Submit</Button>
        </div>
      </form>
    </div>
  );
}
