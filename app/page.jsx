import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

import Head from "next/head";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Typing from "@/components/Typing";

function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-2 xl:pb-2 transform xl:scale-75 xl:translate-y-[-20px]">
          {/* text */}
          <div className="mt-4 xl:mt-0 text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">
              <Typing />
            </span>
            <h1 className="h1 mb-6">
              Hi I&apos;m <br /> <span className="text-accent">Sourav Sen</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-gray-800 font-semibold">
              Crafting Exceptional Frontend Experiences with Precision and
              Passion 🚀
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="/resume.pdf" download="resume.pdf">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-2"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-gray-800 hover:text-primary hover:transition-all duration-500 hover:border-gray-800"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="mt-4 xl:mt-0 order-1 xl:order-none">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}

export default Home;
