"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const blogs = [
  {
    num: "01",
    title: "JS Inernals",
    description: "How Javascript works behind the scenes.",
    href: "",
  },
  {
    num: "02",
    title: "React Rendering",
    description: "How rendering works in React.",
    href: "",
  },
  {
    num: "03",
    title: "JS Prototypical Inheritance",
    description: "How prototypical inheritance works in Javascript.",
    href: "",
  },
  {
    num: "04",
    title: "RCC vs RSC",
    description: "Key differences between RCC and RSC in Next.js",
    href: "",
  },
];

import { motion } from "framer-motion";
import Head from "next/head";

function Blogs() {
  return (
    <>
      <head>
        <title>Blogs / Sourav Sen</title>
        <meta
          name="description"
          content="Welcome to the Projects Page of our application."
        />
      </head>
      <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 transform xl:scale-75">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 0, duration: 0.4, ease: "easeIn" },
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
          >
            {blogs.map((blog, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-1 flex-col justify-center gap-6 group border border-gray-800 p-4 rounded-xl"
                >
                  {/* top */}
                  <div className="w-full flex justify-between">
                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                      {blog.num}
                    </div>
                    <Link
                      href={blog.href}
                      className="w-[60px] h-[60px] rounded-full bg-gray-800 group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                    >
                      <BsArrowDownRight className="text-primary text-3xl" />
                    </Link>
                  </div>
                  {/* title */}
                  <h2 className="text-[32px] font-bold leading-none text-gray-800 group-hover:text-accent transition-all duration-500">
                    {blog.title}
                  </h2>
                  {/* description */}
                  <p className="text-gray-600 font-semibold text-xl">
                    {blog.description}
                  </p>
                  {/* border */}
                  <div className="border-b border-white/20 w-full"></div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Blogs;
