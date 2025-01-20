"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaVuejs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

import { FaUserGraduate } from "react-icons/fa";
import { PiLaptopDuotone } from "react-icons/pi";

// about data
const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium.",

  info: [
    {
      fieldName: "Name",
      fieldValue: "Sourav Sen",
    },
    {
      fieldName: "Experience",
      fieldValue: "2.5+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Email",
      fieldValue: "sunsouravsen@gmail.com",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Bengali, Hindi",
    },
  ],
};

// experience data
const experience = {
  icon: <PiLaptopDuotone />,
  title: "My experience",
  description:
    "A Software Engineer who transforms complex ideas into stunning, user-friendly web applications.",
  items: [
    {
      company: "LTIMindtree",
      position: "Senior Software Enginner",
      duration: "October 2022 - present",
    },
    {
      company: "L&T Infotech",
      position: "Post Graduate Engineer Trainee",
      duration: "July 2022 - October 2022",
    },
  ],
};

// Education Data
const education = {
  icon: <FaUserGraduate />,
  title: "My education",
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, a!",
  items: [
    {
      institution: "IIT Palakkad",
      degree: "M.Tech - Power Electronics and Power System",
      title: "Indian Institute of Technology Palakkad",
      duration: "2020-2022",
    },
    {
      institution: "RERF",
      degree: "B.Tech - Electrical Engineering",
      title: "Regent Education and Research Foundation",
      duration: "2013 - 2017",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, in!",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
      color: "red",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
      color: "",
    },
    {
      icon: <FaJs />,
      name: "javascript",
      color: "",
    },
    {
      icon: <FaReact />,
      name: "react.js",
      color: "",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
      color: "",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
      color: "",
    },
    {
      icon: <FaVuejs />,
      name: "vue.js",
      color: "",
    },
    {
      icon: <FaFigma />,
      name: "figma",
      color: "",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto transform xl:scale-75">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger className="text-xl font-semibold" value="experience">
              Experience
            </TabsTrigger>
            <TabsTrigger className="text-xl font-semibold" value="education">
              Education
            </TabsTrigger>
            <TabsTrigger className="text-xl font-semibold" value="skills">
              Skills
            </TabsTrigger>
            <TabsTrigger className="text-xl font-semibold" value="about">
              About me
            </TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-gray-800 mx-auto xl:mx-0 text-xl font-semibold">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-slate-300 h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent font-semibold">
                            {item.duration}
                          </span>
                          <h3 className="font-semibold text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3 bg-slate-300 rounded-full px-4 border border-gray-800">
                            {/* dot */}
                            <span className="w-[8px] h-[8px] rounded-full bg-accent"></span>
                            <p className="text-gray-800 font-semibold">
                              {item.company}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-slate-300 h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent font-semibold">
                            {item.duration}
                          </span>
                          <h3 className="text-xl font-semibold max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3 border border-gray-800 rounded-full px-4 mt-6">
                            {/* dot */}
                            <span className="w-[8px] h-[8px] rounded-full bg-accent"></span>
                            <p className="text-gray-800 font-semibold">
                              {/* {item.institution} */}
                              <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                  <TooltipTrigger className="bg-slate-300 rounded-xl flex justify-center items-center group">
                                    <div className="group-hover:text-accent transition-all duration-300">
                                      {item.institution}
                                    </div>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p className="capitalize">{item.title}</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-slate-300 rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px] font-semibold">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <ul className="flex flex-col item-start gap-y-6 mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-2 border border-slate-400 rounded-full py-2 text-sm md:text-md lg:text-lg xl:text-xl px-4"
                      >
                        <span className="text-gray-800 font-bold">
                          {item.fieldName}:
                        </span>
                        <span>{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}

export default Resume;
