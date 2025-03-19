import type { Metadata } from "next";
import "./globals.css";
import { RiPhoneFill, RiSmartphoneFill, RiTabletFill } from "@remixicon/react";

export const metadata: Metadata = {
    title: "Wedding Assistant",
    description: "A simple assitant.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html>
            <body className={`antialiased`}>
                <div className="hidden lg:block w-screen h-screen bg-white text-center place-content-center">
                    <h1>
                        Switch to Mobile{" "}
                        <RiSmartphoneFill className="inline animate-bounce" />.
                    </h1>
                </div>
                <div className=" lg:hidden">{children}</div>
            </body>
        </html>
    );
}
