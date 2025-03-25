import CeremonyDataType from "@/types/ceremonyData.type";
import {
  RiCalendarEventFill,
  RiMap2Fill,
  RiSafariFill,
  RiUserHeartFill,
} from "@remixicon/react";
import Image from "next/image";
import { HTMLAttributes } from "react";

/* 

ceremonyDateString is an string like 2025-03-25
ceremonyHallName is an string like Master Complex
ceremonyHost is an string like Mr. John
cta_link is an Array like ["https://...", "https://...", ...]
cta_logo is an Array like ["https://...", "https://...", ...]

*/

type DescBoxProps = {} & HTMLAttributes<HTMLDivElement> &
  Omit<CeremonyDataType, "names">;

const DescBox = ({
  children,
  className,
  ceremonyDateString,
  ceremonyHallName,
  ceremonyHost,
  cta_link,
  cta_logo,
  ...props
}: DescBoxProps) => {
  return (
    <div
      className={`${className} w-2/3 p-3 m-10 mt-0 bg-white/50 rounded-lg shadow-inner overflow-clip`}
      {...props}
    >
      <ul className="text-md h-2/3 *:my-4 place-content-center">
        <li>
          {/* Hall Name */}
          <RiMap2Fill className="inline" />{" "}
          <span className="inline-block">{`${ceremonyHallName}`}</span>
        </li>
        <li>
          {/* Date */}
          <RiCalendarEventFill className="inline" />{" "}
          <span>{`${ceremonyDateString}`}</span>
        </li>
        <li>
          {/* Host Name */}
          <RiUserHeartFill className="inline" />{" "}
          <span>{`${ceremonyHost}`}</span>
        </li>
      </ul>
      <div className="flex justify-between flex-wrap h-1/3 items-center *:text-center place-items-center">
        {cta_link.map((v, i) => (
          <div
            key={`cta #-${i}`}
            className="w-10 aspect-square bg-blue-50/50 rounded-full flex justify-center items-center"
          >
            <a
              href={v || "http://"}
              className="hover:text-blue-400 focus:text-blue-400 visited:text-black transition-colors relative overflow-clip"
            >
              {cta_logo[i] ? (
                <Image
                  src={cta_logo[i]}
                  alt=""
                  width={64}
                  height={64}
                  className="rounded-full aspect-square"
                />
              ) : (
                <RiSafariFill />
              )}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DescBox;
