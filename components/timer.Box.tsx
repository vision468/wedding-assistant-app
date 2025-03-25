"use client";

import { RiMoonFill, RiSunFill } from "@remixicon/react";
import { HTMLAttributes, useEffect, useState } from "react";
import getRemainingTime from "@/lib/remainingTime";

type TimerBoxProps = {
  targetTime?: Date | string; // new Date("2025-03-25") or "2025-03-25"
} & HTMLAttributes<HTMLDivElement>;

const TimerBox = ({ targetTime }: TimerBoxProps) => {
  const [remainingDays, setRemainingDays] = useState<number>(0);
  useEffect(() => {
    if (targetTime) {
      const rmTime = getRemainingTime(
        typeof targetTime === "string" ? new Date(targetTime) : targetTime
      );
      setRemainingDays(Math.round(rmTime.getTime() / (24 * 60 * 60 * 1000)));
    }
    return () => {
      // second
    };
  }, [targetTime]);

  return (
    <div className="absolute -bottom-1/3 w-2/3 flex justify-center items-center aspect-square bg-white/50 rounded-full">
      <div
        className="relative origin-center w-2/3 aspect-square border-dashed border-2 border-black rounded-full animate-spin-2 shadow-md"
        id="orbit"
      >
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full w-6 h-6 text-center place-content-center aspect-square"
          id="sun"
        >
          <RiSunFill />
        </div>
        <div
          className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full w-6 h-6 text-center place-content-center aspect-square"
          id="moon"
        >
          <RiMoonFill />
        </div>
        <div className=" absolute top-1/2 left-1/2 -translate-1/2 text-center">
          <h2 className="text-6xl">{remainingDays}</h2>
          <sub className="text-md">days</sub>
        </div>
      </div>
    </div>
  );
};

export default TimerBox;
