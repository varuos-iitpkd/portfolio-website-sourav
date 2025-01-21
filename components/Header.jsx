"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { FaCheckCircle } from "react-icons/fa";

// components imports
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { useState } from "react";

const emailId = "sunsouravsen@gmail.com";

function Header() {
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

  return (
    <header className="py-4 xl:pb-0 xl:py-4 text-white">
      <div className="container mx-auto flex justify-between items-center pt-4">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-3xl text-gray-800 font-extrabold">
            sourav<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* desktop nav & hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
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
        </div>

        {/* Mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

export default Header;
