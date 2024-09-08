import Sidebar from "@/components/sidebar";
import {ChevronRight, SquareActivity} from "lucide-react";
import Link from "next/link";
import {getUserInfo} from "@/lib/actions/getUserInfo";
import getSubordinates from "@/lib/actions/getSubordinates";

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
                <div className="mt-4 space-y-4">
                    {subordinates.map((subordinate, index) => (
                        <Link href={`/vitals/${subordinate.uid}`} key={subordinate.uid}>
                            <div
                                className="p-4 my-3 bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-colors flex gap-4 items-center">
                                <div>
                                    <SquareActivity size={50} strokeWidth={1}/>
                                </div>
                                <div>
                                    <div className="flex flex-row items-center">
                                        <h3 className="text-lg font-semibold">Astronaut {subordinate.user_name} </h3>
                                        <p className="pl-3 text-gray-500 truncate max-w-2xl">{subordinate.uid}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}