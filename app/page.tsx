"use client";
import DescBox from "@/components/Desc.Box";
import NamesLabel from "@/components/names.Label";
import SwapCard from "@/components/swap.Card";
import TimerBox from "@/components/timer.Box";
import useENVData from "@/app/hooks/useENVData";

export default function Home() {
  const { data, isLoading, error } = useENVData();

  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full flex justify-center items-center">
        {!isLoading && data && (
          <SwapCard>
            <NamesLabel names={data.names} />
            <TimerBox targetTime={data.ceremonyDateString} />
            <DescBox {...data} />
          </SwapCard>
        )}
      </div>
    </div>
  );
}
