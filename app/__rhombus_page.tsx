"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {
    type zoneType = 1 | 2 | 3 | 4;
    function simpleOrbitCordination(zone: zoneType, elem: HTMLElement) {
        console.clear();
        console.log("SOC Start!");
        console.time("soc");
        const height = Math.floor(elem.offsetHeight);
        const hStep = 1; // Math.floor(height / 12);
        const halfHeight = Math.floor(height / 2);
        const width = Math.floor(elem.offsetWidth);
        const wStep = 1; // Math.floor(width / 12);
        const halfWidth = Math.floor(width / 2);
        console.log(` height: ${height}, half height: ${halfHeight}`);
        console.log(` width: ${width}, half width: ${halfWidth}`);

        let top: number, right: number;
        zone = 1;
        top = halfHeight;
        right = 0;
        function getAllCordination(
            zone: zoneType,
            top: number,
            right: number,
            cordPack: Array<number[]> = []
        ) {
            cordPack.push([top, right, zone]);
            switch (zone) {
                case 1:
                    if (top > 0 && right < halfWidth) {
                        top -= hStep;
                        right += wStep;
                        // cordPack.push([top, right, zone]);
                    } else {
                        top = 0;
                        right = halfWidth;
                        zone = 2;
                    }
                    return getAllCordination(zone, top, right, cordPack);

                case 2:
                    if (top < halfHeight && right < width) {
                        top += hStep;
                        right += wStep;
                        // cordPack.push([top, right, zone]);
                    } else {
                        top = halfHeight;
                        right = width;
                        zone = 3;
                    }
                    return getAllCordination(zone, top, right, cordPack);

                case 3:
                    if (top < height && right > halfWidth) {
                        top += hStep;
                        right -= wStep;
                        // cordPack.push([top, right, zone]);
                    } else {
                        top = height;
                        right = halfWidth;
                        zone = 4;
                    }
                    return getAllCordination(zone, top, right, cordPack);

                case 4:
                    if (top > halfHeight && right > 0) {
                        top -= hStep;
                        right -= wStep;
                        // cordPack.push([top, right, zone]);
                        return getAllCordination(zone, top, right, cordPack);
                    } else {
                        // top = halfHeight;
                        // right = 0;
                        // zone = 1;
                        return cordPack;
                    }
                default:
                    zone = 1;
                    top = halfHeight;
                    right = 0;
                    // cordPack.push([top, right, zone]);
                    return getAllCordination(zone, top, right, cordPack);
            }
        }
        const allCord = getAllCordination(1, top, right);
        console.timeEnd("soc");
        console.log("result: ");
        console.log(allCord);
        return allCord;
    }
    const [flag, setFlag] = useState(false);
    const intervalRef = useRef(0);
    useEffect(() => {
        if (flag) {
            const t = document.getElementById("orbit");
            const sun = document.getElementById("sun");
            const moon = document.getElementById("moon");
            if (t && sun && moon) {
                const cordMap = simpleOrbitCordination(1, t);
                const reCordMap = cordMap.slice().reverse();
                let i = 0;
                intervalRef.current = setInterval(
                    () => {
                        // sun.style.translate = `${cordMap[i][1]}px ${cordMap[i][0]}px`;
                        // sun.style.right = `${cordMap[i][1]}px`;
                        // moon.style.translate = `${reCordMap[i][1]}px  ${reCordMap[i][0]}px`;
                        // moon.style.right = `${reCordMap[i][1]}px`;
                        const dot = document.createElement("span");
                        dot.style.position = "absolute";
                        dot.style.width = "2px";
                        dot.style.height = "2px";
                        dot.style.backgroundColor = "#fff";
                        dot.style.top = `${cordMap[i][0]}px`;
                        dot.style.right = `${cordMap[i][1]}px`;
                        t.appendChild(dot);
                        i += 1;
                        if (i >= cordMap.length || i >= reCordMap.length)
                            clearInterval(intervalRef.current);
                    },
                    10,
                    "s"
                );
            }
        } else if (intervalRef.current) clearInterval(intervalRef.current);
        return () => clearInterval(intervalRef.current);
    }, [flag]);
    return (
        <div className="w-screen h-screen">
            <div className="w-full h-full flex justify-center items-center">
                <div className="flex flex-col justify-between w-10/12 h-9/12 rounded-xl bg-gray-300 shadow-lg">
                    <div className="w-full p-6 mt-10 flex justify-between items-center bg-white/50 ">
                        <div>
                            <h1 className="text-4xl">Name</h1>
                        </div>
                        <div>
                            <h1 className="text-4xl">Name</h1>
                        </div>
                    </div>
                    <button onClick={() => setFlag((p) => !p)}>Click Me</button>

                    <div className="relative w-full aspect-video flex justify-center">
                        <div className="absolute -bottom-1/3 w-2/3 flex justify-center items-center aspect-square bg-white/50 rounded-full">
                            <div className=" absolute text-center">
                                <h2 className="text-6xl">5</h2>
                                <sub className="text-md">days</sub>
                            </div>
                            <div
                                className="relative origin-center w-2/3 aspect-square border-dashed border-2 border-black "
                                id="orbit"
                            >
                                <div
                                    className="absolute top-0 left-0 origin-center"
                                    id="sun"
                                >
                                    ☀️
                                </div>
                                <div
                                    className="absolute top-0 left-0 origin-center"
                                    id="moon"
                                >
                                    🌙
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
