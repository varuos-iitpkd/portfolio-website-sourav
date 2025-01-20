"use client";

import { TypeAnimation } from "react-type-animation";

function Typing() {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Software Engineer",
        1000,
        "Frontend Developer",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "UI/UX Designer",
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: "1em", display: "inline-block" }}
      repeat={Infinity}
    />
  );
}

export default Typing;
