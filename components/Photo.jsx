"use client";

import { motion } from "framer-motion";
import Image from "next/image";

function Photo() {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 0,
            duration: 0.3,
            ease: "easeIn",
          },
        }}
      >
        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 0.5,
              duration: 0.3,
              ease: "easeOut",
            },
          }}
          className="rounded-full w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] absolute overflow-hidden transform scale-90 border-2 border-dashed border-slate-300 animate-bobble bg-slate-200"
        >
          <Image
            src="/assets/profile.png"
            priority
            quality={100}
            fill
            alt="profile picture"
            className="object-contain w-full h-full tranform scale-110 translate-y-4 "
          />
        </motion.div>
        {/* circle */}
        <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#F93827"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          /> */}
        </motion.svg>
      </motion.div>
    </div>
  );
}

export default Photo;
