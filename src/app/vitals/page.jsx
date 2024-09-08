"use client"

import * as React from 'react';
import Sidebar from "@/components/sidebar";
import { ChevronRight } from "lucide-react";

export default function Home() {

    return (
        <div className="h-screen w-screen flex flex-row">
            <div className="flex flex-col h-full">
                <Sidebar />
            </div>
            <div className="flex-1 w-full p-4">
                <div className={"text-sm text-gray-500 flex gap-1 items-center"}>
                    Envoyage <ChevronRight size={15}/> Vitals
                </div>
                <div className={"font-semibold text-4xl tracking-tight mt-2"}>
                    Astronaut Vitals
                </div>
                <div className={"text-sm text-white flex gap-1 items-center my-2"}>
                    Monitor the health of your astronauts over time.
                </div>
                <div className={"mt-4"}>
                    <div className={"grid grid-cols-2 gap-4"}>

                    </div>
                </div>
            </div>
        </div>
    );
}