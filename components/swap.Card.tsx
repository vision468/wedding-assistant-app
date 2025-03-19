"use client";
import { HTMLAttributes } from "react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import imageSrc from "../public/ring.png";
import DescBox from "@/components/Desc.Box";
import TimerBox from "./timer.Box";
import NamesLabel from "./names.Label";
import { RiArrowGoBackFill, RiGiftFill, RiMapPinFill } from "@remixicon/react";

type SwapCardProps = {} & HTMLAttributes<HTMLDivElement>;

const SwapCard = ({}: SwapCardProps) => {
    const [flag, setFlag] = useState(true);
    const [rolling, setRolling] = useState(false);
    useEffect(() => {
        setRolling(true);
    }, [flag]);
    return (
        <div
            className={`${
                rolling ? "animate-roll" : ""
            } transition-all flex flex-col justify-between min-w-10/12 min-h-9/12 rounded-xl  shadow-xl bg-custom-img`}
            onAnimationEnd={() => setRolling(false)}
        >
            <NamesLabel />

            <div
                className={` ${
                    flag ? "" : "hidden"
                } relative w-full aspect-video flex justify-center overflow-clip`}
            >
                <TimerBox />
            </div>
            <div
                className={` ${
                    !flag ? "" : "hidden"
                } transition-all w-full h-full flex justify-center items-end `}
            >
                <DescBox className="w-full h-1/2"></DescBox>
            </div>
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    !rolling && setFlag((p) => !p);
                }}
                className="absolute top-1/2 -translate-y-1/2 right-0 p-4 bg-white active:bg-red-500 rounded-l-full place-content-center"
            >
                <RiMapPinFill className="animate-bounce" />
            </button>
        </div>
    );
};

export default SwapCard;
