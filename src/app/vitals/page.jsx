import Sidebar from "@/components/sidebar";
import {ChevronRight, SquareActivity} from "lucide-react";
import Link from "next/link";
import {getUserInfo} from "@/lib/actions/getUserInfo";
import getSubordinates from "@/lib/actions/getSubordinates";
import AstronautVitals from "@/app/vitals/vitals";

export default async function Home() {
    const user = await getUserInfo();
    const subordinates = await getSubordinates(user.affiliation)

    return (
        <div className="h-screen w-screen flex flex-row">
            <div className="flex flex-col h-full">
                <Sidebar/>
            </div>
            <div className="flex-1 w-full p-4">
                <div className={"text-sm text-gray-500 flex gap-1 items-center"}>
                    Envoyage <ChevronRight size={15}/> Vitals
                </div>
                <div className={"font-semibold text-4xl tracking-tight mt-2"}>
                    Astronaut Vitals
                </div>
                <AstronautVitals subordinates={subordinates}/>
            </div>
        </div>
    )
}