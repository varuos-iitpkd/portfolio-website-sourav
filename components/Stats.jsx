"use client";

import CountUp from "react-countup";
import { PiProjectorScreenChartDuotone } from "react-icons/pi";
import { PiLaptopDuotone } from "react-icons/pi";
import { FaCode } from "react-icons/fa";
import { PiSealQuestionDuotone } from "react-icons/pi";

const stats = [
  {
    num: 2,
    icon: <PiLaptopDuotone />,
    text: "Years of experience",
  },
  {
    num: 4,
    icon: <PiProjectorScreenChartDuotone />,
    text: "Projects completed",
  },
  {
    num: 10,
    icon: <FaCode />,
    text: "Technologies mastered",
  },
  {
    num: 176,
    icon: <PiSealQuestionDuotone />,
    text: "Leetcode Questions",
  },
];

function Stats() {
  return (
    <section className="pt-4 pb-12 xl:pt-4 xl:pb-4 rounded-lg tranform xl:scale-[0.70] xl:translate-y-[-50px] ">
      <div className="container m-auto ">
        <div className="flex flex-wrap item-center justify-center gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="bg-slate-200 p-4 rounded-lg border border-slate-500 flex-1 flex gap-4 items-center justify-start xl:justify-start"
                key={index}
              >
                <span className="text-4xl">{item.icon}</span>
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={0}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-gray-800 font-semibold`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Stats;
