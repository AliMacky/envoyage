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
        setStatus(await getAstronautHealth(journals.at(-1).content));
    };
    return (
        <div className={"flex flex-1 flex-row h-full mx-auto"}>
            <div className="-mt-2">
                {status && <AstronautHealthChart status={status} />}
                <div className="-mt-4 ">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <p className="text-xs text-center max-w-sm truncate border p-2 rounded-md">
                                    {status.justifications ||
                                        "No data available"}
                                </p>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>
                                    {status.justifications ||
                                        "No data available"}
                                </p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
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
