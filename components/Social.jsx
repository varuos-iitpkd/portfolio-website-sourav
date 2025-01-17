"use client";

import Link from "next/link";

import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://www.google.com/" },
  { icon: <FaLinkedin />, path: "https://www.google.com/" },
  { icon: <FaYoutube />, path: "https://www.google.com/" },
  { icon: <FaTwitter />, path: "https://www.google.com/" },
];

function Social({ containerStyles, iconStyles }) {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link href={item.path} key={index} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
}

export default Social;
