"use client";
import { TypewriterEffectSmooth } from "../../components/ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "AI",
      className: "text-white ",
    },
    {
      text: "INDICATOR",
      className: "text-white ",
    },
    {
      text: "@",
      className: "text-white ",
    },
    {
      text: "$29.00",
      className: "text-white ",
    },
    {
      text: "COMING SOON.",
      className: "text-purple-x ",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[30rem] text-white ">
      <p className="text-neutral-200 text-xs sm:text-base ">
        The road to freedom starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-white text-black text-sm">
          Buy Now!!!
        </button>
        <button className="w-40 h-10 rounded-xl bg-signup-button  text-sm">
          Trail 7 Days
        </button>
      </div>
    </div>
  );
}
