import {
    RiCalendarEventFill,
    RiChromeFill,
    RiFirefoxFill,
    RiMap2Fill,
    RiOperaFill,
    RiSafariFill,
    RiUserHeartFill,
} from "@remixicon/react";
import { HTMLAttributes } from "react";

const defaultContent = [
    " the address line",
    " 2025 March 19",
    " the hosts name",
];

type DescBoxProps = { textContent?: string[] } & HTMLAttributes<HTMLDivElement>;

const DescBox = ({
    children,
    className,
    textContent = defaultContent,
    ...props
}: DescBoxProps) => {
    return (
        <div
            className={`${className} p-3 m-10 mt-0 bg-white/50 rounded-lg shadow-inner overflow-clip`}
            {...props}
        >
            <ul className="text-lg h-2/3 *:my-4 place-content-center">
                <li>
                    <RiMap2Fill className="inline" /> {textContent[0]}
                </li>
                <li>
                    <RiCalendarEventFill className="inline" /> {textContent[1]}
                </li>
                <li>
                    <RiUserHeartFill className="inline" /> {textContent[2]}
                </li>
            </ul>
            <div className="flex justify-between flex-wrap h-1/3 items-center *:text-center place-items-center">
                <div className="w-10 aspect-square bg-blue-50/50 rounded-full flex justify-center items-center">
                    <a
                        href="http://"
                        className="hover:text-blue-400 focus:text-blue-400 visited:text-black transition-colors"
                    >
                        <RiSafariFill />
                    </a>
                </div>
                <div className="w-10 aspect-square bg-blue-50/50 rounded-full flex justify-center items-center">
                    <a
                        href="http://"
                        className="hover:text-blue-400 focus:text-blue-400 visited:text-black transition-colors"
                    >
                        <RiChromeFill />
                    </a>
                </div>
                <div className="w-10 aspect-square bg-blue-50/50 rounded-full flex justify-center items-center">
                    <a
                        href="http://"
                        className="hover:text-blue-400 focus:text-blue-400 visited:text-black transition-colors"
                    >
                        <RiFirefoxFill />
                    </a>
                </div>
                <div className="w-10 aspect-square bg-blue-50/50 rounded-full flex justify-center items-center">
                    <a
                        href="http://"
                        className="hover:text-blue-400 focus:text-blue-400 visited:text-black transition-colors"
                    >
                        <RiOperaFill />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default DescBox;
