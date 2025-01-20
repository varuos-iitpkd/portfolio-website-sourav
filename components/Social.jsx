"use client";

import Link from "next/link";

import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/varuos-iitpkd" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/sourav-sen-12b89b8a/",
  },
  { icon: <TbBrandLeetcode />, path: "https://leetcode.com/u/SouravSen/" },
  // { icon: <FaTwitter />, path: "https://www.google.com/" },
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
