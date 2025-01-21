"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Head from "next/head";

const info = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    descripiton: "sunsouarvsen@gmail.com",
  },
];

function Contact() {
  return (
    <>
      <head>
        <title>Contact / Sourav Sen</title>
        <meta
          name="description"
          content="Welcome to the Contact Page of our application."
        />
      </head>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0, duration: 0.4, ease: "easeIn" },
        }}
        className="py-6"
      >
        <div className="container mx-auto transform xl:scale-75 xl:translate-y-[50px]">
          <div className="flex flex-col xl:flex-row gap-[30px]">
            {/* form */}
            {/* <div className="xl:w-[54%] order-2 xl:order-none">
              <form className="flex flex-col gap-6 p-8 bg-slate-300 rounded-xl">
                <h3 className="text-4xl text-accent">
                  Let&apos;s work together
                </h3>
                
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input type="firstname" placeholder="Firstname" />
                  <Input type="lastname" placeholder="Lastname" />
                  <Input type="email" placeholder="Email address" />
                  <Input type="phone" placeholder="Phone number" />
                </div>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value="est">Web Development</SelectItem>
                      <SelectItem value="cst">UI/UX Desingn</SelectItem>
                      <SelectItem value="mst">Logo Design</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Textarea
                  className="h-[200px] font-semibold text-gray-800 placeholder:text-gray-600 bg-slate-100"
                  placeholder="Type your message here."
                />
                <Button size="md" className="max-w-40 h-14" type="email">
                  Send message
                </Button>
              </form>
            </div> */}
            {/* info */}
            <div className="flex-1 flex items-start xl:justify-start order-1 mb-8 xl:mb-0">
              <ul className="flex flex-col gap-10">
                {info.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="flex items-center gap-6 flex-wrap"
                    >
                      <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-slate-300 text-accent rounded-md flex items-center justify-center">
                        <div className="text-[28px]">{item.icon}</div>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-800 font-bold">{item.title}</p>
                        <h3 className="text-xl">{item.descripiton}</h3>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default Contact;
