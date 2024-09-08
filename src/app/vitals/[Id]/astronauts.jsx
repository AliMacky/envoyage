"use client";
import { ChevronRight } from "lucide-react";
import { AstronautHealthChart } from "@/app/vitals/[Id]/astronautCharts";
import { useState } from "react";
import getAstronautHealth from "@/lib/actions/astronautHealthAI";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

const Astronauts = ({ journals }) => {
    const [status, setStatus] = useState(null);
    const handleReload = async () => {
        setStatus(await getAstronautHealth(journals?.at(-1).content));
    };
    return (
        <div className={"flex flex-1 flex-row h-full w-full mx-auto"}>
            <div className="">
                {status && <AstronautHealthChart status={status} />}
                {status && (
                    <button className="-mt-4 w-full flex justify-center items-center">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger className="flex w-fit mr-6" asChild>
                                    <button className="text-xs max-w-sm truncate border px-2 py-1 rounded-md">
                                        {status?.justifications ? "More" :  "No data available"}
                                    </button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className="max-w-[30vh]">
                                        {status?.justifications ||
                                            "No data available"}
                                    </p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </button>
                )}
            </div>
            <button
                className="w-fit h-fit absolute top-4 right-4 bg-zinc-800 hover:bg-zinc-700 text-white transition ease-in-out duration-300 px-4 py-2 rounded-md"
                onClick={handleReload}
            >
                Reload
            </button>
        </div>
    );
};

export default Astronauts;
