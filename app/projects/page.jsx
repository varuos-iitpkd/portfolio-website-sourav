"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Image from "next/image";
import Link from "next/link";

// components
import WorkSliderBtns from "@/components/WorkSliderBtns";
import Head from "next/head";

const projects = [
  {
    num: "01",
    logo: "",
    name: "The Wild Oasis",
    category: "frontend",
    title: "project 1",
    description:
      "A Hotel Management System which is an internal application for streamlining hotel operations. It allows employees to manage guest check-ins and check-outs, create user profiles, add breakfast options during check-ins, and access analytics on cabin bookings to optimize occupancy.",
    stack: [
      { name: "React.js" },
      { name: "Tailwind.css" },
      { name: "Supabase" },
    ],
    image: "/assets/work/theWildOasis.png",
    live: "https://wild-oasis-nu.vercel.app/",
    github: "https://github.com/varuos-iitpkd/wild-oasis",
  },
  {
    num: "02",
    logo: "",
    name: "The Wild Oasis(Guest application)",
    category: "fullstack",
    title: "project 2",
    description:
      "The guest-facing application for The Wild Oasis provides a seamless booking experience. Guests can explore available cabins, view pricing, and plan their vacations by selecting dates through an interactive calendar.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwidn.css" },
      { name: "Supabase" },
    ],
    image: "/assets/work/theWildOasisGuest.png",
    live: "https://wild-oasis-client-woad.vercel.app/",
    github: "https://github.com/varuos-iitpkd/wild-oasis-client-side",
  },

  {
    num: "03",
    logo: "",
    name: "Fast React Pizza",
    category: "frontend",
    title: "project 3",
    description:
      "An Application that allows users to see the restaurant menu, add them to the cart, and place orders seamlessly. Customers can prioritize their orders for a small additional fee, and the app automatically fetches the delivery address using their current location for convenience.",
    stack: [{ name: "React.js" }, { name: "Tailwind.css" }],
    image: "/assets/work/fastReactPizza.png",
    live: "https://fast-reaction-pizza.netlify.app/",
    github: "https://github.com/varuos-iitpkd/fast-reaction-pizza",
  },
];

function Projects() {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <>
      <head>
        <title>Projects / Sourav Sen</title>
        <meta
          name="description"
          content="Welcome to the Projects Page of our application."
        />
      </head>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0, duration: 0.4, ease: "easeIn" },
        }}
        className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
      >
        <div className="container mx-auto transform xl:translate-y-[-50px]">
          <div className="flex flex-col xl:flex-row xl:gap-[30px] transform xl:scale-75">
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
              <div className="flex flex-col gap-[30px] h-[50%]">
                {/* outline num */}
                <div className="text-8xl leading-none font-extrabold text-outline text-transparent">
                  {project.num}
                </div>
                {/* project category */}
                <h2 className="text-[42px] font-bold leading-none text-gray-800 group-hover:text-accent transition-all duration-500 capitalize">
                  {project.category} project
                </h2>
                {/* project description */}
                <p className="text-gray-800 font-semibold text-xl">
                  <span className="font-bold">{`${project.name} - `}</span>
                  {project.description}
                </p>
                {/* stack */}
                <ul className="flex gap-4 flex-wrap">
                  {project.stack.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="text-xl text-white bg-gray-700 px-4 py-2 rounded-full"
                      >
                        {item.name}
                        {/* remove the last comma */}
                        {/* {index !== project.stack.length - 1 && ","} */}
                      </li>
                    );
                  })}
                </ul>
                {/* border */}
                <div className="border border-gray-500"></div>
                {/* buttons */}
                <div className="flex items-center gap-4">
                  {/* live project button */}
                  <Link
                    href={project.live}
                    className="border border-gray-500 rounded-full"
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-gray-800 text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  {/* github project button */}
                  <Link
                    href={project.github}
                    className="border border-gray-500 rounded-full"
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-gray-800 text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full xl:w-[50%]">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                className="xl:h-[520px] mb-12"
                onSlideChange={handleSlideChange}
              >
                {projects.map((project, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className="h-[200px] md:h-[400px] lg:h-[500px] xl:h-[460px] relative group flex justify-center items-center bg-pink-50/20 rounded-xl overflow-hidden">
                        {/* overlay */}
                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                        {/* image */}
                        <div className="relative w-full h-full">
                          <Image
                            src={project.image}
                            fill
                            className="object-cover"
                            alt="project-image"
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
                {/* slider buttons */}
                <WorkSliderBtns
                  containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                  btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[40px] h-[40px] flex justify-center items-center transition-all rounded-full opacity-[70%]"
                />
              </Swiper>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default Projects;
