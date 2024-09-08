import {Cover} from "@/components/ui/cover";
import {ArrowRight, Info} from "lucide-react";
import Navbar from "@/components/navbar";
import Particles from "@/components/ui/particles.jsx";
import Link from "next/link";
import {getUser} from "@/lib/actions/getUser";

export default async function Home() {
    const user = await getUser()
    const isAuthed = user !== null

    return (
        <div>
            <Navbar/>
            <div className={"dark:block hidden"}>
                <Particles
                    className="absolute inset-0"
                    quantity={800}
                    ease={10}
                    color={"#ffffff"}
                    refresh
                />
            </div>
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
                            className={"flex justify-center text-gray-400 max-w-3xl px-4 text-center mx-auto text-2xl font-light"}>Envoyage
                            allows for exploration of the cosmos with
                            cutting-edge space
                            exploration tools.
                        </div>
                    </div>
                    <div className={"mt-10 flex gap-4"}>
                        <Link href={isAuthed? "/dashboard" : "/login"}
                              className={"px-8 py-3.5 bg-zinc-800 hover:bg-zinc-700 transition ease-in-out duration-300 text-white rounded-xl flex gap-2 items-center cursor-pointer"}>
                            Start Now
                            <ArrowRight/>
                        </Link>
                        <Link href={isAuthed? "/dashboard" : "/login"}
                              className={"px-8 py-3.5 border rounded-xl flex gap-2 items-center hover:bg-zinc-700/40 transition ease-in-out duration-300 cursor-pointer"}>
                            Learn More
                            <Info/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
