import {Cover} from "@/components/ui/cover";
import {ArrowRight} from "lucide-react";
import Navbar from "@/components/navbar";
import FlickeringGrid from "@/components/ui/flickering-grid.tsx";
import Link from "next/link";

export default function Home() {
    return (
        <div>
            <Navbar/>
            <div className="flex flex-col h-full w-full absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <div className="flex flex-col flex-1 items-center justify-center">
                    <div className={"flex flex-col gap-4"}>
                        <h1 className="tracking-tight text-7xl max-w-6xl mx-auto text-center relative z-20">
                            Everything for your trip
                        </h1>
                        <h1 className={"tracking-tight text-7xl max-w-6xl mx-auto text-center relative z-20"}>
                            <Cover>beyond Earth.</Cover>
                        </h1>
                    </div>
                    <div className={"mt-10 flex gap-4"}>
                        <div
                            className={"flex justify-center text-gray-600 max-w-3xl px-4 text-center mx-auto text-2xl font-light"}>Envoyage
                            allows exploration the cosmos with
                            cutting-edge space
                            exploration tools.
                        </div>
                    </div>
                    <div className={"mt-10 flex gap-4"}>
                        <Link href={"/dashboard"} className={"px-8 py-3.5 bg-zinc-900 text-white rounded-xl flex gap-2 items-center cursor-pointer"}>
                            Start Now
                            <ArrowRight/>
                        </Link>
                        <Link href={"/dashboard"} className={"px-8 py-3.5 bg-zinc-900 text-white rounded-xl flex gap-2 items-center cursor-pointer"}>
                            Start Now
                            <ArrowRight/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
