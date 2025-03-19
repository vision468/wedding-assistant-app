import { RiMoonFill, RiSunCloudyFill, RiSunFill } from "@remixicon/react";
import { HTMLAttributes } from "react";

type TimerBoxProps = {} & HTMLAttributes<HTMLDivElement>;

const TimerBox = ({}: TimerBoxProps) => {
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
                    <h2 className="text-6xl">5</h2>
                    <sub className="text-md">days</sub>
                </div>
            </div>
        </div>
    );
};

export default TimerBox;
