import { RiDiamondRingFill } from "@remixicon/react";
import { HTMLAttributes } from "react";

type NamesLabelProps = {
  names: string[];
} & HTMLAttributes<HTMLDivElement>;

const NamesLabel = ({ names }: NamesLabelProps) => {
  return (
    <div className="w-full  p-3 md:p-6 mt-10 flex justify-evenly items-center bg-white/80  md:*:text-6xl *:text-4xl">
      <div>
        <h1 className=" font-hilda">{names[0]}</h1>
      </div>
      <div>
        <RiDiamondRingFill size={32} />
      </div>
      <div>
        <h1 className="font-hilda">{names[1]}</h1>
      </div>
    </div>
  );
};

export default NamesLabel;
