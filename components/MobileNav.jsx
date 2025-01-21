"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { Button } from "./ui/button";
import { FaCheckCircle } from "react-icons/fa";
import { useState } from "react";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "projects",
    path: "/projects",
  },
  {
    name: "blogs",
    path: "/blogs",
  },

  // {
  //   name: "contact",
  //   path: "/contact",
  // },
];

const emailId = "sunsouravsen@gmail.com";

function MobileNav() {
  const [isCopied, setisCopied] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setisCopied(true);
        // alert("Eamil Id copied to clipboard!");
      })
      .catch((err) => {
        setisCopied(false);
        // console.error("Failed to copy text: ", err);
      });
  };
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-20 mb-10 text-center text-2xl">
          <Link href="/">
            <h1 className="text-3xl font-semibold">
              sourav<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathname &&
                  "text-accent border-b-2 border-accent"
                } capitalize text-xl hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link href="/contact">
            <Button onClick={() => copyToClipboard(emailId)}>
              {isCopied ? (
                <span className="flex items-center justify-center gap-2">
                  <span>
                    <FaCheckCircle />
                  </span>
                  Email Copied
                </span>
              ) : (
                "Email"
              )}
            </Button>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
