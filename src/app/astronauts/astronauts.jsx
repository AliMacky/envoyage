"use client";
import {ChevronRight} from "lucide-react";
import {AstronautHealthChart} from "@/app/astronauts/astronautCharts";
import {useState} from "react";
import getAstronautHealth from "@/lib/actions/astronautHealthAI";

const Astronauts = ({journals}) => {
    const [status, setStatus] = useState(null);
    const handleReload = async () => {
        setStatus(await getAstronautHealth(journals.at(-1).content));
    }
    return <div className="flex flex-col flex-1 w-full p-4">
        <div></div>
        <div className={"text-sm text-gray-500 flex gap-1 items-center"}>
            Envoyage <ChevronRight size={15}/> Vitals
        </div>
        <div className={"font-semibold text-4xl tracking-tight mt-2"}>
            Astronaut Vitals
        </div>
        <div className={"text-sm text-white flex gap-1 items-center my-2"}>
            Monitor the health of your astronauts over time.
        </div>
        <div className={"flex flex-1 h-full mt-4"}>
            <div className={"flex flex-1 flex-row gap-8 h-full mx-auto"}>
                {status && <AstronautHealthChart status={status}/>}
                <button
                    className="self-end flex flex-row gap-2 w-fit items-center justify-center bg-zinc-800 hover:bg-zinc-700 text-white transition ease-in-out duration-300 px-4 py-2 rounded-md"
                    onClick={handleReload}
                >
                    Reload
                </button>
            </div>
        </div>
    </div>
}

export default Astronauts;