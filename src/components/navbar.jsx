"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";


const Navbar = () => {
    const router = useRouter();
    return (
        <div className="inset-x-0 top-0 z-20 relative h-fit py-4">
            <div className="flex items-center justify-between h-full gap-2 max-w-7xl mx-auto">
                <Link href={"/"} className="flex flex-1 flex-row gap-4">
                    <img src="/envoyage.svg" alt="logo" className="dark:invert w-8 h-8"/>
                    <h1 className="font-[Orbitron] text-2xl">ENVOYAGE</h1>
                </Link>
                <div
                    className={`flex items-center gap-8`}
                >
                    <Link href="/explore">Explore</Link>
                    <Link href={"/login"}>
                        <div
                            className="bg-zinc-800 text-white px-5 py-2 hover:bg-zinc-700 transition ease-in-out duration-300 rounded-lg text-sm cursor-pointer">
                            Sign In
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;