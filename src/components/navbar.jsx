"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";


const Navbar = () => {
    const router = useRouter();
    return (
        <div className="inset-x-0 top-0 z-0 h-fit py-4">
            <div className="flex items-center justify-between h-full gap-2 max-w-7xl mx-auto">
                <div className="flex flex-1 flex-row gap-4">
                    <img src="/envoyage.svg" alt="logo" className="dark:invert w-8 h-8"/>
                    <h1 className="font-[Orbitron] text-2xl">ENVOYAGE</h1>
                </div>
                <div
                    className={`flex items-center gap-8`}
                >
                    <Link href="/explore">Explore</Link>
                    <div
                        className="bg-zinc-900 text-white px-5 py-2 rounded-lg text-sm cursor-pointer hover:-translate-y-0.5 transition-all hover:shadow-lg">
                        <Link href={"login"}>Sign In</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;